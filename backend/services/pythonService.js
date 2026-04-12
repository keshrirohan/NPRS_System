import axios from "axios";
import fs from "fs";
import FormData from "form-data";

export const sendToPython = async (filePath) => {
  try {
    const formData = new FormData();

    formData.append("image", fs.createReadStream(filePath));

    const response = await axios.post(
      "http://localhost:5001/detect",
      formData,
      {
        headers: formData.getHeaders(),
      }
    );

    return response.data;

  } catch (error) {
    console.error("Python API Error:", error.message);
    return { plate_number: "ERROR" };
  }
};