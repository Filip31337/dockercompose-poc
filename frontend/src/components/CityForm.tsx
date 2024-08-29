import React, { useEffect } from 'react';
import { useForm, FormProvider, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQueryClient, useQuery } from '@tanstack/react-query';
import Field from './Field';
import { createCity, updateCity, getCityById, City } from '../api';
import { useParams, useNavigate } from 'react-router-dom';
import { CityFormData, citySchema } from '../types/schemas';
import { Button } from '@/components/ui/button'
import { Alert } from '@/components/ui/alert'
import { Spinner } from '@/components/ui/spinner'
import { Card } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'

const CityForm: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const isEditing = !!id;
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { data: city, error, isLoading } = useQuery<City, Error>({
    queryKey: ['city', id],
    queryFn: () => getCityById(id!).then(res => res.data),
    enabled: isEditing,
  });

  const methods = useForm<CityFormData>({
    resolver: zodResolver(citySchema),
    defaultValues: {
      cityId: '',
      name: '',
      population: 0,
      countryId: '',
      isCapital: false,
    },
  });

  useEffect(() => {
    if (city) {
      methods.reset(city);
    }
  }, [city, methods]);

  const mutation = useMutation<City, Error, CityFormData>({
    mutationFn: async (data: CityFormData) => {
      if (isEditing) {
        const response = await updateCity(id!, data);
        return response.data;
      } else {
        const response = await createCity(data);
        return response.data;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cities'] });
      navigate('/cities');
    },
  });

  const onSubmit = (data: CityFormData) => {
    mutation.mutate(data);
  };

  if (isLoading) return <Spinner />;
  if (error) return <Alert variant="destructive">{error.message}</Alert>;

  return (
    <Card className="max-w-md mx-auto p-4">
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-4">
          {!isEditing && <Field name="cityId" label="City ID" />}
          <Field name="name" label="Name" />
          <Field name="population" label="Population" type="number" />
          <Field name="countryId" label="Country ID" />
          <Controller
            name="isCapital"
            control={methods.control as never}
            render={({ field }) => (
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="isCapital"
                  checked={field.value || false}
                  onCheckedChange={(checked) => field.onChange(checked === true)}
                />
                <label htmlFor="isCapital" className="text-sm font-medium text-gray-900">
                  Capital
                </label>
              </div>
            )}
          />
          <Button type="submit" variant="default" className="w-full">
            {isEditing ? 'Update' : 'Create New'} City
          </Button>
        </form>
      </FormProvider>
    </Card>
  );
};

export default CityForm;
