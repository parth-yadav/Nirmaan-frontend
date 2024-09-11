import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import DataTablePagination from "./pagination";

// Define the type for the modal component prop
interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  searchcolumn: string;
  ModalComponent?: React.ComponentType<{ isOpen: boolean; onClose: () => void; data: TData | null }>;
}

function DataTable<TData, TValue>({
  columns,
  data,
  searchcolumn, 
  ModalComponent,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});
  const [selectedRow, setSelectedRow] = React.useState<TData | null>(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
    },
  });

  const filterByStatus = (status: string) => {
    table.getColumn("status")?.setFilterValue(status);
  };

  const handleRowClick = (rowData: TData) => {
    setSelectedRow(rowData);
    setIsModalOpen(true);
  };

  return (
    <div>
      <div className="flex items-center py-4 space-x-4 justify-between ">
        <div className="flex gap-4">
          <Input
            placeholder={`Filter ${searchcolumn}...`}
            value={(table.getColumn(searchcolumn)?.getFilterValue() as string) ?? ""}
            onChange={(event) => table.getColumn(searchcolumn)?.setFilterValue(event.target.value)}
            className="max-w-sm border-gray-300 w-80"
          />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="border-gray-300" variant="outline">
                Filter{" "}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white" align="start">
              <DropdownMenuItem onClick={() => filterByStatus("pending")}>Pending</DropdownMenuItem>
              <DropdownMenuItem onClick={() => filterByStatus("processing")}>Processing</DropdownMenuItem>
              <DropdownMenuItem onClick={() => filterByStatus("success")}>Success</DropdownMenuItem>
              <DropdownMenuItem onClick={() => filterByStatus("failed")}>Failed</DropdownMenuItem>
              <DropdownMenuItem onClick={() => filterByStatus("")}>Clear Filter</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="flex">
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="bg-white">
              <Button
                variant="outline"
                className="ml-auto flex gap-2 justify-center px-4 py-2 text-sm font-medium leading-6 text-black whitespace-nowrap bg-white rounded-md border border-gray-300 border-solid "
              >
                View
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {table.getAllColumns().filter((column) => column.getCanHide()).map((column) => (
                <DropdownMenuCheckboxItem
                  key={column.id}
                  className="capitalize bg-white "
                  checked={column.getIsVisible()}
                  onCheckedChange={(value) => column.toggleVisibility(!!value)}
                >
                  {column.id}
                </DropdownMenuCheckboxItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder ? null : (
                      <div>
                        {flexRender(header.column.columnDef.header, header.getContext())}
                      </div>
                    )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  onClick={() => handleRowClick(row.original)}
                  className=" hover:cursor-pointer" // Handle row click
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <div className="flex items-center justify-end space-x-2 py-4">
        <DataTablePagination table={table} />
      </div>

      {/* Render the modal component if provided */}
      {isModalOpen && selectedRow && ModalComponent && (
        <ModalComponent
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          data={selectedRow}
        />
      )}
    </div>
  );
}

export default DataTable;
