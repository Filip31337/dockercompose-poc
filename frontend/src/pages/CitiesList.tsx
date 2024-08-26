import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { getCities, deleteCity, City } from '../api';
import { Spinner } from '@/components/ui/spinner'
import { Alert } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'

const CitiesList = () => {
  const queryClient = useQueryClient();
  const { data, error, isLoading } = useQuery<City[], Error>({
    queryKey: ['cities'],
    queryFn: () => getCities().then(res => res.data),
  });

  const deleteMutation = useMutation({
    mutationFn: (id: string) => deleteCity(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cities'] });
    },
  });

  if (isLoading) return <Spinner size="large" />;
  if (error) return <Alert variant="destructive">{error.message}</Alert>;

  return (
    <div className="p-6 bg-white rounded shadow-md max-w-lg mx-auto">
      <h1 className="text-2xl font-bold text-center mb-4">Cities</h1>
      <Link to="/cities/new">
        <Button variant="outline" className="mb-4 w-full">Add New City</Button>
      </Link>
      <ul className="space-y-2">
        {data && data.length > 0 ? (
          data.map((city: City) => (
            <li key={city.cityId} className="flex justify-between items-center p-2 border rounded">
              <span>{city.name}</span>
              <div className="space-x-2">
                <Button variant="destructive" onClick={() => deleteMutation.mutate(city.cityId)}>
                  Delete
                </Button>
                <Link to={`/cities/${city.cityId}/edit`}>
                  <Button variant="secondary">Edit</Button>
                </Link>
              </div>
            </li>
          ))
        ) : (
          <li>No cities found.</li>
        )}
      </ul>
    </div>
  );
};

export default CitiesList;
