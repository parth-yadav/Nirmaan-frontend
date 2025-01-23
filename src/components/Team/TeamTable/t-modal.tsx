import type * as React from "react";
import UserProfile from "../UserProfile/UserProfile";

interface TeamModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: any; // Define a proper type based on your data
}

const TeamModal: React.FC<TeamModalProps> = ({ isOpen, onClose, data }) => {
  if (!isOpen) return null;

  return (
    <>
      {/* Modal container */}
      <div className="fixed inset-y-0 right-0 w-full md:max-w-xl bg-white overflow-auto z-50 shadow-lg shadow-gray-700">
        <UserProfile data={data} close={onClose} />
      </div>

      {/* Background overlay for mobile */}
      <div
        className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={onClose}
      ></div>
    </>
  );
};

export default TeamModal;
