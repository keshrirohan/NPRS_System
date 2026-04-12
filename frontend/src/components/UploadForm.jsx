import { useState } from "react";
import { uploadImage } from "../services/api";

const UploadForm = ({ setResult }) => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const selected = e.target.files[0];
    setFile(selected);
    setPreview(URL.createObjectURL(selected));
  };

  const handleSubmit = async () => {
    if (!file) return alert("Please select image");

    setLoading(true);

    const formData = new FormData();
    formData.append("image", file);

    const res = await uploadImage(formData);

    setResult(res.plate);
    setLoading(false);
  };

  return (
    <div className="mt-6 backdrop-blur-lg bg-white/30 border border-white/20 p-6 rounded-3xl shadow-xl w-full max-w-md text-center">

      {/* Custom File Upload */}
      <label className="cursor-pointer block border-2 border-dashed border-gray-400 rounded-xl p-6 hover:border-blue-500 transition">
        
        <p className="text-gray-700 font-medium">
          Click to upload image
        </p>
        <p className="text-sm text-gray-500">
          JPG, PNG supported
        </p>

        <input
          type="file"
          onChange={handleChange}
          className="hidden"
        />
      </label>

      {/* Preview */}
      {preview && (
        <img
          src={preview}
          alt="preview"
          className="w-full h-40 object-cover rounded-xl mt-4"
        />
      )}

      {/* Button */}
      <button
        onClick={handleSubmit}
        className="mt-4 w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 rounded-xl hover:scale-105 transition"
      >
        {loading ? "⏳ Processing..." : "Upload & Detect"}
      </button>
    </div>
  );
};

export default UploadForm;