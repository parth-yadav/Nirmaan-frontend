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
    
      <DataTable
        columns={columns}
        searchcolumn=""
        data={data.sections}
        ModalComponent={EditSectionModal}
        hideSearch={true}
        hideFilter={true}
        hideViewOptions={true}
        hidePagination={true}
      />
   
  );
}
