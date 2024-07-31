import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { getCountries, deleteCountry } from '../api';
const CountryList = () => {
    const queryClient = useQueryClient();
    /*const { data, error, isLoading } = useQuery(['countries'], () => getCountries().then(res => res.data));*/
    const { data, error, isLoading } = useQuery({
        queryKey: ['countries'],
        queryFn: () => getCountries().then(res => res.data),
    });
    /*const deleteMutation = useMutation(deleteCountry, {
        onSuccess: () => {
            queryClient.invalidateQueries(['countries']);
        },
    });*/
    const deleteMutation = useMutation({
        mutationFn: (id) => deleteCountry(id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['countries'] });
        },
    });
    if (isLoading)
        return _jsx("div", { children: "Loading..." });
    if (error)
        return _jsxs("div", { children: ["Error: ", error.message] });
    return (_jsxs("div", { children: [_jsx("h1", { children: "Countries" }), _jsx(Link, { to: "/countries/new", children: "Add New Country" }), _jsx("ul", { children: data && data.length > 0 ? (data.map((country) => (_jsxs("li", { children: [country.name, _jsx("button", { onClick: () => deleteMutation.mutate(country.countryId), children: "Delete" }), _jsx(Link, { to: `/countries/${country.countryId}`, children: "Edit" })] }, country.countryId)))) : (_jsx("li", { children: "No countries found." })) })] }));
};
export default CountryList;
