import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { getCountries, Country, deleteCountry } from '../../api'
import { Alert } from "@/components/ui/alert";
import { Spinner } from '@/components/ui/spinner';
import { DataTable } from '@/pages/CountryList/data-table'
import { columns } from '@/pages/CountryList/columns'
import { useNavigate } from "react-router-dom"

const CountryList = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { data, error, isLoading } = useQuery<Country[], Error>({
    queryKey: ['countries'],
    queryFn: () => getCountries().then(res => res.data as Country[]),
  });

  const deleteMutation = useMutation({
    mutationFn: (id: string) => deleteCountry(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['countries'] });
    },
  });

  if (isLoading) return <Spinner size="large" />;
  if (error) return <Alert variant="default">{error.message}</Alert>;

  return (
    <div className="container mx-auto py-10">
      <DataTable<Country, unknown> columns={columns(navigate, deleteMutation.mutate)} data={(data as Country[] ?? [])} />
    </div>
  );
};

export default CountryList;
