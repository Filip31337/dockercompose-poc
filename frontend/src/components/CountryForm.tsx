import React, {useEffect} from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { getCountryById, updateCountry, Country } from '../api';
import { useForm, SubmitHandler } from 'react-hook-form';

type FormData = Omit<Country, 'countryId'>;

const CountryEdit: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const { register, handleSubmit, setValue } = useForm<FormData>();

    const { data, error, isLoading } = useQuery<Country, Error>({
        queryKey: ['country', id],
        queryFn: () => getCountryById(id),
        enabled: !!id,
    });

    useEffect(() => {
        if (data) {
            Object.keys(data).forEach((key) => {
                setValue(key as keyof FormData, data[key as keyof Country]);
            });
        }
    }, [data, setValue]);

    const updateMutation = useMutation({
        mutationFn: (country: Country) => updateCountry(id as string, country),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['countries'] });
            navigate('/countries');
        },
    });

    const onSubmit: SubmitHandler<FormData> = (formData) => {
        if (id) {
            updateMutation.mutate({ ...formData, countryId: id });
        }
    };

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div>
            <h1>Edit Country</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register('countryCode' as keyof FormData)} placeholder="Country Code" />
                <input {...register('name' as keyof FormData)} placeholder="Name" />
                <input {...register('officialName' as keyof FormData)} placeholder="Official Name" />
                <input {...register('population' as keyof FormData)} placeholder="Population" />
                <input {...register('areaSqKm' as keyof FormData)} placeholder="Area (sq km)" />
                <input {...register('latitude' as keyof FormData)} placeholder="Latitude" />
                <input {...register('longitude' as keyof FormData)} placeholder="Longitude" />
                <input {...register('timezone' as keyof FormData)} placeholder="Timezone" />
                <input {...register('regionId' as keyof FormData)} placeholder="Region ID" />
                <button type="submit">Update Country</button>
            </form>
        </div>
    );
};

export default CountryEdit;
