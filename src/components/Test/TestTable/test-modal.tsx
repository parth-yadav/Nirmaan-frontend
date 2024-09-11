import * as React from "react";
import TestComponent from "../TestComponent/TestComponent";

interface TestModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: any; // Define a proper type based on your data
} 

const ExamModal: React.FC<TestModalProps> = ({ isOpen, onClose, data }) => {
  if (!isOpen) return null;

  return (  
    <>
      <div className=" absolute inset-y-0 right-0 w-full max-w-xl overflow-auto z-50">
        <div className=" " onClick={onClose}></div>
        
          <div className="">
            <TestComponent data ={data} close = {onClose} />
          </div>
       
      </div>
    </>
  );
};

export default ExamModal;