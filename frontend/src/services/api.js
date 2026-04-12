import axios from "axios";

export const uploadImage = async (formData) => {
  const res = await axios.post(
    "http://localhost:5000/api/upload",
    formData
  );
  return res.data;
};