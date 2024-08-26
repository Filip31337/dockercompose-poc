import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { getCountries, deleteCountry, Country } from '../api';
import { Button } from "@/components/ui/button";
import { Alert } from "@/components/ui/alert";
import { Spinner } from '@/components/ui/spinner';

const CountryList = () => {
  const queryClient = useQueryClient();
  const { data, error, isLoading } = useQuery<Country[], Error>({
    queryKey: ['countries'],
    queryFn: () => getCountries().then(res => res.data),
  });

  const deleteMutation = useMutation({
    mutationFn: (id: string) => deleteCountry(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['countries'] });
    },
  });

  if (isLoading) return <Spinner size="large" />;
  if (error) return <Alert variant="default">{error.message}</Alert>;

  return (
    <div className="p-6 bg-white rounded shadow-md max-w-lg mx-auto">
      <h1 className="text-2xl font-bold text-center mb-4">Countries</h1>
      <Link to="/countries/new">
        <Button variant="outline" className="mb-4 w-full">Add New Country</Button>
      </Link>
      <ul className="space-y-2">
        {data && data.length > 0 ? (
          data.map((country: Country) => (
            <li key={country.countryId} className="flex justify-between items-center p-2 border rounded">
              {country.name}
              <div className="space-x-2">
                <Button onClick={() => deleteMutation.mutate(country.countryId)} variant="destructive">
                  Delete
                </Button>
                <Link to={`/countries/${country.countryId}/edit`}>
                  <Button variant="secondary">Edit</Button>
                </Link>
              </div>
            </li>
          ))
        ) : (
          <li>No countries found.</li>
        )}
      </ul>
    </div>
  );
};

export default CountryList;
