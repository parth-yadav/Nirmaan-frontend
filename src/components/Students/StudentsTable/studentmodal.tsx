import type * as React from "react";
import UserProfile from "../StudentPopup/UserProfile";

interface StudentModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: any; // Define a proper type based on your data
}

const StudentModal: React.FC<StudentModalProps> = ({
  isOpen,
  onClose,
  data,
}) => {
  if (!isOpen) return null;

  return (
    <>
      <div className="fixed md:absolute inset-0 md:inset-y-0 md:right-0 w-full md:w-full md:max-w-xl bg-white overflow-auto z-50 shadow-lg shadow-gray-700">
        <UserProfile data={data} close={onClose} />
      </div>
      <div
        className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={onClose}
      ></div>
    </>
  );
};

export default StudentModal;
