import { useQuery } from '@tanstack/react-query';
import { getCountries, Country } from '../../api';
import { Alert } from "@/components/ui/alert";
import { Spinner } from '@/components/ui/spinner';
import { DataTable } from '@/pages/CountryList/data-table'
import { columns } from '@/pages/CountryList/columns'

const CountryList = () => {
  const { data, error, isLoading } = useQuery<Country[], Error>({
    queryKey: ['countries'],
    queryFn: () => getCountries().then(res => res.data as Country[]),
  });

  if (isLoading) return <Spinner size="large" />;
  if (error) return <Alert variant="default">{error.message}</Alert>;

  return (
    <div className="container mx-auto py-10">
      <DataTable<Country, unknown> columns={columns} data={(data as Country[] ?? [])} />
    </div>
  );
};

export default CountryList;
