import React from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { getCurrencies, deleteCurrency, Currency } from '../api'

const CurrenciesList: React.FC = () => {
  const queryClient = useQueryClient();

  const { data, error, isLoading } = useQuery<Currency[], Error>({
    queryKey: ['currencies'],
    queryFn: () => getCurrencies().then(res => res.data),
  });

  const deleteMutation = useMutation({
    mutationFn: (id: string) => deleteCurrency(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['currencies'] });
    },
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h2>Currencies</h2>
      <Link to="/currencies/new">Add New Currency</Link>
      <ul>
        {data && data.map((currency: Currency) => (
          <li key={currency.currencyId}>
            {currency.name}
            <Link to={`/currencies/${currency.currencyId}/edit`}>Edit</Link>
            <button onClick={() => deleteMutation.mutate(currency.currencyId)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CurrenciesList;
