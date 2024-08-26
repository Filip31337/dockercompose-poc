import React from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { getCurrencies, deleteCurrency, Currency } from '../api';
import { Spinner } from '@/components/ui/spinner'
import { Alert } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'

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

  if (isLoading) return <Spinner size="large" />;
  if (error) return <Alert variant="destructive">{error.message}</Alert>;

  return (
    <div className="p-6 bg-white rounded shadow-md max-w-lg mx-auto">
      <h1 className="text-2xl font-bold text-center mb-4">Currencies</h1>
      <Link to="/currencies/new">
        <Button variant="outline" className="mb-4 w-full">Add New Currency</Button>
      </Link>
      <ul className="space-y-2">
        {data && data.length > 0 ? (
          data.map((currency: Currency) => (
            <li key={currency.currencyId} className="flex justify-between items-center p-2 border rounded">
              <span>{currency.name}</span>
              <div className="space-x-2">
                <Button variant="destructive" onClick={() => deleteMutation.mutate(currency.currencyId)}>
                  Delete
                </Button>
                <Link to={`/currencies/${currency.currencyId}/edit`}>
                  <Button variant="secondary">Edit</Button>
                </Link>
              </div>
            </li>
          ))
        ) : (
          <li>No currencies found.</li>
        )}
      </ul>
    </div>
  );
};

export default CurrenciesList;
