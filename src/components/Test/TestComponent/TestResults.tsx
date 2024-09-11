import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";

type TestResult = {
  previous_attempts: string;
  attempted_on: string;
  marks_obtained: number;
};

type TestResultsProps = {
  results: TestResult[];
};

const columns: ColumnDef<TestResult>[] = [
  {
    accessorKey: "previous_attempts",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="hover:bg-transparent px-0 font-bold"
        >
          Attempt Number
          <ArrowUpDown className="ml-2 h-4 w-3" />
        </Button>
      )
    },
  },
  {
    accessorKey: "attempted_on",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="hover:bg-transparent px-0 font-bold"
        >
          Attempted On
          <ArrowUpDown className="ml-2 h-4 w-3" />
        </Button>
      )
    },
  },
  {
    accessorKey: "marks_obtained",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="hover:bg-transparent px-0 font-bold"
        >
          Marks Obtained
          <ArrowUpDown className="ml-2 h-4 w-3" />
        </Button>
      )
    },
  },
];

function TestResults({ results }: TestResultsProps) {
  const [sorting, setSorting] = React.useState<SortingState>([]);

  const table = useReactTable({
    data: results,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
    },
  });

  return (
    <div className="w-full max-w-[500px] mt-8">
      <h2 className="flex gap-1.5 text-lg font-semibold leading-7 text-black">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/90212d808b437940516353040aa12abbea5040d33e4b78dd9acc4f9e84f7fb93?apiKey=8a82faa9db93454483a68c973b38c7b0&&apiKey=8a82faa9db93454483a68c973b38c7b0"
          className="shrink-0  aspect-square w-[18px]"
          alt=""
        />
        <span className="flex-auto">Results</span>
      </h2>
      <Table>
        <TableHeader className="">
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead className="text-left p-0" key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell className="py-2" key={cell.id}>
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
  );
}

export default TestResults;