import axios from "axios";

const API_URL = "http://localhost:3001";

export const uploadFile = async (file) => {
  const formData = new FormData();
  formData.append("file", file);

  try {
    const response = await axios.post(`${API_URL}/files`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error uploading file:", error);
    throw error;
  }
};

export const getFiles = async () => {
  try {
    const response = await axios.get(`${API_URL}/files`);
    return response.data;
  } catch (error) {
    console.error("Error fetching files:", error);
    throw error;
  }
};

export const deleteFile = async (id) => {
  try {
    await axios.delete(`${API_URL}/files/${id}`);
  } catch (error) {
    console.error("Error deleting file:", error);
    throw error;
  }
};
