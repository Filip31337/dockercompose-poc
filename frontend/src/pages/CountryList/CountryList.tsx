import { keepPreviousData, useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import {
  Country,
  deleteCountry,
  getPaginatedFilteredSortedCountries,
  PageResponse,
} from '../../api'
import { Alert } from "@/components/ui/alert";
import { Spinner } from '@/components/ui/spinner';
import { DataTable } from '@/pages/CountryList/data-table'
import { columns } from '@/pages/CountryList/columns'
import { useNavigate } from "react-router-dom"
import { useState } from 'react'
import { SortingState } from '@tanstack/react-table'

const CountryList = () => {
  const queryClient = useQueryClient();
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [globalFilter, setGlobalFilter] = useState('');
  const [sort, setSort] = useState<SortingState>([]);
  const navigate = useNavigate();
  const { data: countryData, error, isLoading } = useQuery<unknown, Error, PageResponse<Country>, ['countries', unknown, unknown, unknown, unknown]>({
    queryKey: ['countries', page, pageSize, globalFilter, sort],
    queryFn: () => getPaginatedFilteredSortedCountries(page, pageSize, globalFilter, sort).then(res => res.data),
    placeholderData: keepPreviousData,
  });

  const deleteMutation = useMutation({
    mutationFn: (id: string) => deleteCountry(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['countries'] });
    },
  });

  const handlePageChange = (newPage: number) => setPage(newPage);
  const handlePageSizeChange = (newPageSize: number) => setPageSize(newPageSize);
  const handleFilterChange = (filterValue: string) => {
    setGlobalFilter(filterValue);
    setPage(0);
  };
  const handleSortChange = (sort: SortingState) => {
    setSort(sort);
    setPage(0);
  };

  if (isLoading) return <Spinner size="large" />;
  if (error) return <Alert variant="default">{error.message}</Alert>;

  if (countryData) {
    console.log('Fetched countryData:', JSON.stringify(countryData, null, 2));
  }

  if (error) {
    console.error('Error fetching countryData:', error);
  }

  return (
    <div className="container mx-auto py-10">
      <DataTable<Country, unknown>
        columns={columns(navigate, deleteMutation.mutate)}
        data={countryData?.content ?? []}
        total={countryData?.totalElements ?? 0}
        page={page}
        pageSize={pageSize}
        onPageChange={handlePageChange}
        onPageSizeChange={handlePageSizeChange}
        globalFilter={globalFilter}
        onFilterChange={handleFilterChange}
        sort={sort}
        onSortChange={handleSortChange}
      />
    </div>
  );
};

export default CountryList;
