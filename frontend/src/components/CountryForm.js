import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { getCountryById, updateCountry } from '../api';
import { useForm } from 'react-hook-form';
const CountryEdit = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const { register, handleSubmit, setValue } = useForm();
    const { data, error, isLoading } = useQuery({
        queryKey: ['country', id],
        queryFn: () => getCountryById(id),
        enabled: !!id,
    });
    useEffect(() => {
        if (data) {
            Object.keys(data).forEach((key) => {
                setValue(key, data[key]);
            });
        }
    }, [data, setValue]);
    const updateMutation = useMutation({
        mutationFn: (country) => updateCountry(id, country),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['countries'] });
            navigate('/countries');
        },
    });
    const onSubmit = (formData) => {
        if (id) {
            updateMutation.mutate(Object.assign(Object.assign({}, formData), { countryId: id }));
        }
    };
    if (isLoading)
        return _jsx("div", { children: "Loading..." });
    if (error)
        return _jsxs("div", { children: ["Error: ", error.message] });
    return (_jsxs("div", { children: [_jsx("h1", { children: "Edit Country" }), _jsxs("form", { onSubmit: handleSubmit(onSubmit), children: [_jsx("input", Object.assign({}, register('countryCode'), { placeholder: "Country Code" })), _jsx("input", Object.assign({}, register('name'), { placeholder: "Name" })), _jsx("input", Object.assign({}, register('officialName'), { placeholder: "Official Name" })), _jsx("input", Object.assign({}, register('population'), { placeholder: "Population" })), _jsx("input", Object.assign({}, register('areaSqKm'), { placeholder: "Area (sq km)" })), _jsx("input", Object.assign({}, register('latitude'), { placeholder: "Latitude" })), _jsx("input", Object.assign({}, register('longitude'), { placeholder: "Longitude" })), _jsx("input", Object.assign({}, register('timezone'), { placeholder: "Timezone" })), _jsx("input", Object.assign({}, register('regionId'), { placeholder: "Region ID" })), _jsx("button", { type: "submit", children: "Update Country" })] })] }));
};
export default CountryEdit;
