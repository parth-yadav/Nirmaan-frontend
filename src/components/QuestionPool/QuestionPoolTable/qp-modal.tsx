import * as React from "react";
import QuestionPoolRow from "../QuestionPoolRow/QuestionPoolRow";

interface QustionPoolModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: any; // Define a proper type based on your data
}

const QuestionPoolModal: React.FC<QustionPoolModalProps> = ({
  isOpen,
  onClose,
  data,
}) => {
  if (!isOpen) return null;

  return (
    <>
      <div className=" absolute  shadow-lg shadow-gray-700 inset-y-0 right-0 overflow-auto ">
        <QuestionPoolRow data={data} close={onClose} />
      </div>
    </>
  );
};

export default QuestionPoolModal;
