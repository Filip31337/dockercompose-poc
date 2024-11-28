import { ColumnDef } from '@tanstack/react-table'
import { Country } from '@/api'
import { DropdownMenu, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'
import { Button } from '@/components/ui/button'
import { ArrowUpDown, MoreHorizontal } from 'lucide-react'
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu'
import { Checkbox } from '@/components/ui/checkbox'
import { useNavigate } from "react-router-dom"

export const columns = (navigate: ReturnType<typeof useNavigate>, onDelete: (id: string) => void): ColumnDef<Country>[] => [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "country_code",
    header: ({column}) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Country Code
          <ArrowUpDown className="m1-2 h-4 w-4"></ArrowUpDown>
        </Button>
      )
    }
  },
  {
    accessorKey: "name",
    header: ({column}) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Country Name
          <ArrowUpDown className="m1-2 h-4 w-4"></ArrowUpDown>
        </Button>
      )
    }
  },
  {
    accessorKey: "official_name",
    header: ({column}) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Official Country Name
          <ArrowUpDown className="m1-2 h-4 w-4"></ArrowUpDown>
        </Button>
      )
    }
  },
  {
    accessorKey: "population",
    header: "Number of people",
    cell: ({row}) => {
      const amount = parseInt(row.getValue("population"))
      const formattedAmount = new Intl.NumberFormat("en-US", {
        style: "decimal",
        maximumFractionDigits: 2,
      }).format(amount)

      return <div className="font-medium">{formattedAmount}</div>
    }
  },
  {
    accessorKey: "area_sq_km",
    header: "Size",
    cell: ({row}) => {
      const amount = parseInt(row.getValue("areaSqKm"))

      return <div className="font-medium">{amount} km&sup2;</div>
    }
  },
  {
    id: "actions",
    cell: ({row}) => {
      const country = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Show actions</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(country.countryId)}
              >
              Copy Country ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => navigate('/countries/' + country.countryId + '/edit')}
            >Edit Country
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => onDelete(country.countryId)}
            >Delete Country
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    }
  },
]
