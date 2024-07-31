import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { getCountries, deleteCountry, Country } from '../api';

const CountryList = () => {
    const queryClient = useQueryClient();
    /*const { data, error, isLoading } = useQuery(['countries'], () => getCountries().then(res => res.data));*/
    const { data, error, isLoading } = useQuery<Country[], Error>({
        queryKey: ['countries'],
        queryFn: () => getCountries().then(res => res.data),
    });

    /*const deleteMutation = useMutation(deleteCountry, {
        onSuccess: () => {
            queryClient.invalidateQueries(['countries']);
        },
    });*/
    const deleteMutation = useMutation({
        mutationFn: (id: string) => deleteCountry(id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['countries'] });
        },
    });

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div>
            <h1>Countries</h1>
            <Link to="/countries/new">Add New Country</Link>
            <ul>
                {data && data.length > 0 ? (
                    data.map((country) => (
                        <li key={country.countryId}>
                            {country.name}
                            <button onClick={() => deleteMutation.mutate(country.countryId)}>Delete</button>
                            <Link to={`/countries/${country.countryId}`}>Edit</Link>
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
