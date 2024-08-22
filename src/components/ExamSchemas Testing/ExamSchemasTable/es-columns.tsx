"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { MoreHorizontal } from "lucide-react";
import DataTableColumnHeader from "../../Table/column-header";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type ExamSchema = {
  id: string;
  title: string;
  targetgroup: string;
  status: "pending" | "processing" | "success" | "failed";
};

export const columns: ColumnDef<ExamSchema>[] = [
  {
    accessorKey: "title",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Title" />
    ),
  },
  {
    accessorKey: "targetgroup",
    // header: () => <div className="text-left">Status</div>,
    header: ({ column }) => (
      <div>
        <DataTableColumnHeader column={column} title="Target Group" />
      </div>
    ),

    cell: ({ row }) => {
      const targetgroup = row.getValue("targetgroup") as string;
      return <div className="text-left">{targetgroup}</div>;
    },
  },
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

  
];
