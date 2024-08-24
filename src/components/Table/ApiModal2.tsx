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

const ApiModal2: React.FC<ApiModalProps> = ({
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
    console.log("Submitting form with data:", formData);

    try {
      let response;
      if (actionType === "POST") {
        console.log("Making POST request to:", apiEndpoint);
        response = await axios.post("/api/examschemas", formData);
      } else if (actionType === "PUT") {
        console.log("Making PUT request to:", apiEndpoint);
        response = await axios.put(apiEndpoint, formData);
      }
      
      if (response) {
        console.log("Response:", response.data);
        refreshTable();
        onClose();
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("API call failed:", error.response?.data || error.message || "Unknown error");
      } else {
        console.error("Unexpected error:", error);
      }
    }
  };

  const handleDelete = async () => {
    try {
      const response = await axios.delete(apiEndpoint);
      console.log("DELETE response:", response.data);
      refreshTable();
      onClose();
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("API call failed:", error.response?.data || error.message || "Unknown error");
      } else {
        console.error("Unexpected error:", error);
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal bg-slate-200">
      <button className="close" onClick={onClose}>
        &times;
      </button>
      <form onSubmit={handleSubmit} className=" bg-slate-200">
        <input
          type="text"
          name="title"
          value={formData.title || ''}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="targetgroup"
          value={formData.targetgroup || ''}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="status"
          value={formData.status || ''}
          onChange={handleInputChange}
        />
        <button type="submit" className="bg-green-300">
          Save
        </button>
        <button type="button" className="bg-red-400" onClick={handleDelete}>Delete</button>
      </form>
    </div>
  );
};

export default ApiModal2;
