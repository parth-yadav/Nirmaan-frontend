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

  React.useEffect(() => {
    console.log("Modal opened with rowData:", rowData);
    setFormData(rowData); // Update formData when rowData changes
  }, [rowData]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("Input change event:", e.target.name, e.target.value);
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
        console.log("Sending POST request to:", apiEndpoint);
        response = await axios.post(apiEndpoint, formData);
        console.log("POST response:", response.data);
      } else if (actionType === "PUT") {
        console.log("Sending PUT request to:", apiEndpoint);
        response = await axios.put(apiEndpoint, formData);
        console.log("PUT response:", response.data);
      }
      refreshTable();
      onClose();
    } catch (error) {
      console.error("API call failed:", error);
    }
  };

  const handleDelete = async (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent form submission
    console.log("Sending DELETE request to:", apiEndpoint);

    try {
      await axios.delete(apiEndpoint);
      console.log("DELETE request successful");
      refreshTable();
      onClose();
    } catch (error) {
      console.error("API call failed:", error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal bg-slate-200 p-4">
      <button className="close" onClick={onClose}>
        &times;
      </button>
      <form onSubmit={handleSubmit} className="bg-slate-200 p-4">
        <input
          type="text"
          name="title"
          value={formData.title || ""}
          onChange={handleInputChange}
          placeholder="Title"
          required
        />
        <input
          type="text"
          name="targetgroup"
          value={formData.targetgroup || ""}
          onChange={handleInputChange}
          placeholder="Target Group"
          required
        />
        <input
          type="text"
          name="status"
          value={formData.status || ""}
          onChange={handleInputChange}
          placeholder="Status"
          required
        />
        {actionType !== "DELETE" && (
          <button type="submit" className="bg-green-300">
            Save
          </button>
        )}
        {(actionType === "PUT" || actionType === "DELETE") && (
          <button type="button" className="bg-red-400" onClick={handleDelete}>
            Delete
          </button>
        )}
      </form>
    </div>
  );
};

export default ApiModal;

 //   const handleSubmit = async (e: React.FormEvent) => {
  //     e.preventDefault();
  //     console.log("Submitting form with data:", formData);

  //     try {
  //       if (actionType === "POST") {
  //         console.log("Sending POST request to:", apiEndpoint);
  //         await axios.post(apiEndpoint, formData);
  //         console.log("POST request successful");
  //       } else if (actionType === "PUT") {
  //         console.log("Sending PUT request to:", apiEndpoint);
  //         await axios.put(apiEndpoint, formData);
  //         console.log("PUT request successful");
  //       }
  //       refreshTable();
  //       onClose();
  //     } catch (error) {
  //       console.error("API call failed:", error);
  //     }
  //   };
