import { useState } from "react";
import { EditSection, columns } from "./editsectioncolumns";
import DataTable from "../../../../Table/data-ttable";
import EditSectionModal from "./editsectionmodal";

interface EditSectionTableProps {
  data: {
    sections: EditSection[];
  };
}

export default function EditSectionTable({ data }: EditSectionTableProps) {
  return (
    <div className="py-10">
      <DataTable
        columns={columns}
        searchcolumn="name"
        data={data.sections}
        ModalComponent={EditSectionModal}
      />
    </div>
  );
}
