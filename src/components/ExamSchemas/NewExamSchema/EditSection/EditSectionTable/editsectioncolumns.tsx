"use client";

import { ColumnDef } from "@tanstack/react-table";
import DataTableColumnHeader from "../../../../Table/column-header";

export type EditSection = {
  name: string;
  questions: number;
  marking: string;
  max_marks: number;
};

export const columns: ColumnDef<EditSection>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Name" />
    ),
  },
  {
    accessorKey: "questions",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Questions" />
    ),
  },
  {
    accessorKey: "marking",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Marking" />
    ),
  },
  {
    accessorKey: "max_marks",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Max Marks" />
    ),
  },
];
