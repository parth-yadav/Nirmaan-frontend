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
        {/* <div className=" " onClick={onClose}></div> */}
        
         
            <TestComponent data ={data} close = {onClose} />
          
       
      </div>
    </>
  );
};

export default ExamModal;