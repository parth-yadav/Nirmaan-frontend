import * as React from "react";
//import TestComponent from "../TestComponent/TestComponent";
import NewExamSchemaCover from "@/components/ExamSchemas/NewExamSchema/NewExamSchemacopy";

interface ExamSchemaModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: any; // Define a proper type based on your data
}

const ExamSchemaModal: React.FC<ExamSchemaModalProps> = ({
  isOpen,
  onClose,
  data,
}) => {
  if (!isOpen) return null;

  return (
    <>
      <div className=" absolute inset-y-0 right-0 w-full max-w-xl overflow-auto z-50">
        {/* <div className=" " onClick={onClose}></div> */}

        <NewExamSchemaCover data={data} close={onClose} />
      </div>
    </> 
  );
};

export default ExamSchemaModal;
    