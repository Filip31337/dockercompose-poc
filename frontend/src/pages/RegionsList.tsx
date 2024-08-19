import React from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { getRegions, deleteRegion, Region } from '../api'

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

  if (isLoading) return <p>Loading...</p>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h2>Regions</h2>
      <Link to="/regions/new">Add New Region</Link>
      <ul>
        {data && data.map((region: Region) => (
          <li key={region.regionId}>
            {region.name}
            <Link to={`/regions/${region.regionId}/edit`}>Edit</Link>
            <button onClick={() => deleteMutation.mutate(region.regionId)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RegionsList;
