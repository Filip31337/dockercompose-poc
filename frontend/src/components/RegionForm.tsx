import React, { useEffect } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQueryClient, useQuery } from '@tanstack/react-query';
import Field from './Field';
import { createRegion, updateRegion, getRegionById, Region } from '../api';
import { useParams, useNavigate } from 'react-router-dom';
import { RegionFormData, regionSchema } from '../types/schemas';

const RegionForm: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const isEditing = !!id;
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { data: region, error, isLoading } = useQuery<Region, Error>({
    queryKey: ['region', id],
    queryFn: () => getRegionById(id!).then(res => res.data),
    enabled: isEditing,
  });

  const methods = useForm<RegionFormData>({
    resolver: zodResolver(regionSchema),
    defaultValues: {
      name: '',
    },
  });

  useEffect(() => {
    if (region) {
      methods.reset(region);
    }
  }, [region, methods]);

  const mutation = useMutation<Region, Error, RegionFormData>({
    mutationFn: async (data: RegionFormData) => {
      if (isEditing) {
        const response = await updateRegion(id!, data);
        return response.data;
      } else {
        const response = await createRegion(data);
        return response.data;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['regions'] });
      navigate('/regions');
    },
  });

  const onSubmit = (data: RegionFormData) => {
    mutation.mutate(data);
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Field name="name" label="Name" />
        <button type="submit">{isEditing ? 'Update' : 'Create New'} Region</button>
      </form>
    </FormProvider>
  );
};

export default RegionForm;
