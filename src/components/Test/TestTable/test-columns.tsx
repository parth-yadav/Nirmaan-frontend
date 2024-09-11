"use client"

import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"
import { MoreHorizontal } from "lucide-react"
import DataTableColumnHeader from "../../Table/column-header"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"





// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
// export type Test = {
//   id: string
//   title:string
//   questioncount: number
//   duration: number
//   attempts: number
//   status: "pending" | "processing" | "success" | "failed"
 
// }
export type Test = {
  id: string;
  title: string;
  questioncount: number;
  duration: number;
  attempts: number;
  status: "pending" | "processing" | "success" | "failed";
  total_questions: number;
  maximum_marks: number;
  attempts_remaining: number;
  max_attempts: number;
  sections: { title: string; questions: number; maximum_marks: number }[];
  results: { previous_attempts: string; attempted_on: string; marks_obtained: number }[];
};


export const columns: ColumnDef<Test>[] = 

[
{
  accessorKey: "status",
  // header: () => <div className="text-left">Status</div>,
  header: ({ column }) => (
    <div>
    <DataTableColumnHeader column={column} title="status" />
    
    </div>
  ),

  cell: ({ row }) => {
    const status = row.getValue("status") as string;
    return <div className="text-left">{status}</div>;
  },
},

{
  accessorKey: "title",
  header: ({ column }) => (
    <DataTableColumnHeader column={column} title="Title" />
  ),
},
// {
//   accessorKey: "name",
//   header: ({ column }) => (
//     <DataTableColumnHeader column={column} title="name" />
//   ),
// },
{
  accessorKey: "questioncount",
  // header: () => <div className="text-right">Amount</div>,
  header: ({ column }) => (
    <DataTableColumnHeader column={column} title="Question Count" />
  ),
  cell: ({ row }) => {
    const questioncount = parseFloat(row.getValue("questioncount"));
    // const formatted = new Intl.NumberFormat("en-US", {
    //   style: "currency",
    //   currency: "USD",
    // }).format(amount);
    return <div className=" font-medium">{questioncount}</div>;
  },
},
{
  accessorKey: "duration",
  // header: () => <div className="text-right">Amount</div>,
  header: ({ column }) => (
    <DataTableColumnHeader column={column} title="Duration" />
  ),
  cell: ({ row }) => {
    const duration = parseFloat(row.getValue("duration"));
    // const formatted = new Intl.NumberFormat("en-US", {
    //   style: "currency",
    //   currency: "USD",
    // }).format(amount);
    return <div className=" font-medium">{duration}</div>;
  },
},
{
  accessorKey: "attempts",
  // header: () => <div className="text-right">Amount</div>,
  header: ({ column }) => (
    <DataTableColumnHeader column={column} title="Attempts" />
  ),
  cell: ({ row }) => {
    const attempts = parseFloat(row.getValue("attempts"));
    // const formatted = new Intl.NumberFormat("en-US", {
    //   style: "currency",
    //   currency: "USD",
    // }).format(amount);
    return <div className=" font-medium">{attempts}</div>;
  },
},
// {
//   id: "actions",
//   cell: ({ row }) => {
//     const payment = row.original

//     return (
//       <DropdownMenu>
//         <DropdownMenuTrigger asChild>
//           <Button variant="ghost" className="h-8 w-8 p-0">
//             <span className="sr-only">Open menu</span>
//             <MoreHorizontal className="h-4 w-4" />
//           </Button>
//         </DropdownMenuTrigger>
//         <DropdownMenuContent align="end">
//           <DropdownMenuLabel>Actions</DropdownMenuLabel>
//           <DropdownMenuItem
//             onClick={() => navigator.clipboard.writeText(payment.id)}
//           >
//             Copy payment ID
//           </DropdownMenuItem>
//           <DropdownMenuSeparator />
//           <DropdownMenuItem>View customer</DropdownMenuItem>
//           <DropdownMenuItem>View payment details</DropdownMenuItem>
//         </DropdownMenuContent>
//       </DropdownMenu>
//     )
//   },
// },
]
