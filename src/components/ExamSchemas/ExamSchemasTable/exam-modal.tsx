import * as React from "react";

interface ExamModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: any; // Define a proper type based on your data
}

const ExamModal: React.FC<ExamModalProps> = ({ isOpen, onClose, data }) => {
  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/50 z-50" onClick={onClose}></div>
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded shadow-lg max-w-sm w-full">
          <h2 className="text-xl font-semibold mb-4">Exam Details</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
          <button
            onClick={onClose}
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
          >
            Closeee
          </button>
        </div>
      </div>
    </>
  );
};

export default ExamModal;
