import React, { useEffect } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQueryClient, useQuery } from '@tanstack/react-query';
import Field from './Field';
import { createRegion, updateRegion, getRegionById, Region } from '../api';
import { useParams, useNavigate } from 'react-router-dom';
import { RegionFormData, regionSchema } from '../types/schemas';
import { Spinner } from '@/components/ui/spinner'
import { Alert } from '@/components/ui/alert'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

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

  if (isLoading) return <Spinner />;
  if (error) return <Alert variant="destructive">{error.message}</Alert>;

  return (
    <Card className="max-w-md mx-auto p-4">
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-4">
          <Field name="name" label="Name" />
          <Button type="submit" variant="default" className="w-full">
            {isEditing ? 'Update' : 'Create New'} Region
          </Button>
        </form>
      </FormProvider>
    </Card>
  );
};

export default RegionForm;
