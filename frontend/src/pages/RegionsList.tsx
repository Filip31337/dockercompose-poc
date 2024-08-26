import React from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { getRegions, deleteRegion, Region } from '../api';
import { Spinner } from '@/components/ui/spinner'
import { Alert } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'

const RegionsList: React.FC = () => {
  const queryClient = useQueryClient();

  const { data, error, isLoading } = useQuery<Region[], Error>({
    queryKey: ['regions'],
    queryFn: () => getRegions().then(res => res.data),
  });

  const deleteMutation = useMutation({
    mutationFn: (id: string) => deleteRegion(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['regions'] });
    },
  });

  if (isLoading) return <Spinner size="large" />;
  if (error) return <Alert variant="default">{error.message}</Alert>;

  return (
    <div className="p-6 bg-white rounded shadow-md max-w-lg mx-auto">
      <h2 className="text-2xl font-bold text-center mb-4">Regions</h2>
      <Link to="/regions/new">
        <Button variant="outline" className="mb-4 w-full">Add New Region</Button>
      </Link>
      <ul className="space-y-2">
        {data && data.length > 0 ? (
          data.map((region: Region) => (
            <li key={region.regionId} className="flex justify-between items-center p-2 border rounded">
              <span>{region.name}</span>
              <div className="space-x-2">
                <Button variant="destructive" onClick={() => deleteMutation.mutate(region.regionId)}>
                  Delete
                </Button>
                <Link to={`/regions/${region.regionId}/edit`}>
                  <Button variant="secondary">Edit</Button>
                </Link>
              </div>
            </li>
          ))
        ) : (
          <li>No regions found.</li>
        )}
      </ul>
    </div>
  );
};

export default RegionsList;
