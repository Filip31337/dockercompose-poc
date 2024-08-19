import React, { useEffect } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQueryClient, useQuery } from '@tanstack/react-query';
import Field from './Field';
import { createCountry, updateCountry, getCountryById, Country } from '../api';
import { useParams, useNavigate } from 'react-router-dom';
import { CountryFormData, countrySchema } from '../types/schemas';

const CountryForm: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const isEditing = !!id;
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { data: country, error, isLoading } = useQuery<Country, Error>({
    queryKey: ['country', id],
    queryFn: () => getCountryById(id!).then(res => res.data),
    enabled: isEditing,
  });

  const methods = useForm<CountryFormData>({
    resolver: zodResolver(countrySchema),
    defaultValues: {
      name: '',
      countryCode: '',
      population: undefined,
      officialName: undefined,
      areaSqKm: undefined,
      latitude: undefined,
      longitude: undefined,
      timezone: undefined,
      regionId: '',
    },
  });

  useEffect(() => {
    if (country) {
      methods.reset(country);
    }
  }, [country, methods]);

  const mutation = useMutation<Country, Error, CountryFormData>({
    mutationFn: async (data: CountryFormData) => {
      if (isEditing) {
        const response = await updateCountry(id!, data);
        return response.data;
      } else {
        const response = await createCountry(data);
        return response.data;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['countries'] });
      navigate('/countries');
    },
  });

  const onSubmit = (data: CountryFormData) => {
    mutation.mutate(data);
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Field name="name" label="Name" />
        <Field name="countryCode" label="Country Code" />
        <Field name="population" label="Population" type="number" />
        <Field name="officialName" label="Official Name" />
        <Field name="regionId" label="Region ID" />
        <button type="submit">{isEditing ? 'Update' : 'Create New'} Country</button>
      </form>
    </FormProvider>
  );
};

export default CountryForm;
