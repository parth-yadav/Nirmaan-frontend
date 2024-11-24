import * as React from "react";
//import TestComponent from "../TestComponent/TestComponent";
import NewExamSchemaCover from "@/components/ExamSchemas/NewExamSchema/NewExamSchemacopy";
import EditSection from "../EditSection";

interface EditSectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: any; // Define a proper type based on your data
}

const EditSectionModal: React.FC<EditSectionModalProps> = ({
  isOpen,
  onClose,
  data,
}) => {
  if (!isOpen) return null;

  return (
    <>
      <div className=" absolute inset-y-0 right-0 w-full max-w-xl overflow-auto z-50">
        {/* <div className=" " onClick={onClose}></div> */}

        <EditSection data={data.sections} close={onClose} />
      </div>
    </>
  );
};

export default EditSectionModal;
