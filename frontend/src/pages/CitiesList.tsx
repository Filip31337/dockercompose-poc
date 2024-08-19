import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { getCities, deleteCity, City } from '../api'

const CitiesList = () => {
  const queryClient = useQueryClient();
  const { data, error, isLoading } = useQuery<City[], Error>({
    queryKey: ['cities'],
    queryFn: () => getCities().then(res => res.data),
  });

  const deleteMutation = useMutation( {
    mutationFn: (id: string) => deleteCity(id),
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['cities']});
    },
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h2>Cities</h2>
      <Link to="/cities/new">Add New City</Link>
      <ul>
        {data && data.length > 0 ? (
          data.map((city: City) => (
            <li key={city.cityId}>
              {city.name}
              <button onClick={() => deleteMutation.mutate(city.cityId)}>Delete</button>
              <Link to={`/cities/${city.cityId}/edit`}>Edit</Link>
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
