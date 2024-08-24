import React from "react";
import axios from "axios";

interface ApiModalProps {
  isOpen: boolean;
  onClose: () => void;
  actionType: "" | "POST" | "PUT" | "DELETE";
  apiEndpoint: string;
  rowData: any;
  refreshTable: () => void;
}

const ApiModal: React.FC<ApiModalProps> = ({
  isOpen,
  onClose,
  actionType,
  apiEndpoint,
  rowData,
  refreshTable,
}) => {
  const [formData, setFormData] = React.useState(rowData);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (actionType === "POST") {
        await axios.post(apiEndpoint, formData);
      } else if (actionType === "PUT") {
        await axios.put(apiEndpoint, formData);
      }
      refreshTable();
      onClose();
    } catch (error) {
      console.error("API call failed", error);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(apiEndpoint);
      refreshTable();
      onClose();
    } catch (error) {
      console.error("API call failed", error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal bg-slate-200">
      <div className="modal-content ">
        <button className="close" onClick={onClose}>
          &times;
        </button>
        <form onSubmit={handleSubmit} className=" bg-slate-200">
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="targetgroup"
            value={formData.targetgroup}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="status"
            value={formData.status}
            onChange={handleInputChange}
          />
          <button type="submit" className="bg-green-300">Save</button>
        </form>
        {actionType === "PUT" && (
          <button onClick={handleDelete}>Delete</button>
        )}
      </div>
    </div>
  );
};

export default ApiModal;
