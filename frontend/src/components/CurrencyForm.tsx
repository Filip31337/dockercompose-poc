import React, { useEffect } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQueryClient, useQuery } from '@tanstack/react-query';
import Field from './Field';
import { createCurrency, updateCurrency, getCurrencyById, Currency } from '../api';
import { useParams, useNavigate } from 'react-router-dom';
import { CurrencyFormData, currencySchema } from '../types/schemas';

const CurrencyForm: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const isEditing = !!id;
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { data: currency, error, isLoading } = useQuery<Currency, Error>({
    queryKey: ['currency', id],
    queryFn: () => getCurrencyById(id!).then(res => res.data),
    enabled: isEditing,
  });

  const methods = useForm<CurrencyFormData>({
    resolver: zodResolver(currencySchema),
    defaultValues: {
      name: '',
      officialName: '',
      symbol: '',
    },
  });

  useEffect(() => {
    if (currency) {
      methods.reset(currency);
    }
  }, [currency, methods]);

  const mutation = useMutation<Currency, Error, CurrencyFormData>({
    mutationFn: async (data: CurrencyFormData) => {
      if (isEditing) {
        const response = await updateCurrency(id!, data);
        return response.data;
      } else {
        const response = await createCurrency(data);
        return response.data;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['currencies'] });
      navigate('/currencies');
    },
  });

  const onSubmit = (data: CurrencyFormData) => {
    mutation.mutate(data);
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Field name="name" label="Name" />
        <Field name="officialName" label="Official Name" />
        <Field name="symbol" label="Symbol" />
        <button type="submit">{isEditing ? 'Update' : 'Create New'} Currency</button>
      </form>
    </FormProvider>
  );
};

export default CurrencyForm;
