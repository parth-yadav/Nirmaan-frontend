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
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-20 flex justify-end z-50">
        <div className="w-full max-w-xl bg-white shadow-lg overflow-auto h-full">
          <EditSection data={data} close={onClose} />
        </div>
      </div>
    </>
  );
};

export default EditSectionModal;
