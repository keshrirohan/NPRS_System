import { useState } from "react";
import { uploadImage } from "../services/api";

const UploadForm = ({ setResult, fetchHistory }) => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const f = e.target.files[0];
    if (!f) return;

    setFile(f);
    setPreview(URL.createObjectURL(f));
  };

  const handleSubmit = async () => {
    if (!file) return alert("Please select image");

    setLoading(true);

    const formData = new FormData();
    formData.append("image", file);

    const res = await uploadImage(formData);

    setResult(res.data.plate);
    fetchHistory();

    setLoading(false);
  };

  return (
    <div className="mt-8 w-full max-w-lg bg-black border border-red-500 p-8 rounded-3xl shadow-[0_0_20px_rgba(255,0,0,0.3)] text-center">

      {/* Upload Box */}
      <label className="cursor-pointer block border-2 border-dashed border-red-500 rounded-2xl p-10 hover:bg-red-900/20 transition-all">

        <div className="flex flex-col items-center gap-3">

          <span className="text-4xl text-red-500"></span>

          <p className="text-lg font-semibold text-gray-200">
            Click to Upload Image
          </p>

          <p className="text-sm text-gray-400">
            JPG, PNG (Max 5MB)
          </p>

        </div>

        <input
          type="file"
          onChange={handleChange}
          className="hidden"
        />
      </label>

      {/* Preview */}
      {preview && (
        <div className="mt-6">
          <img
            src={preview}
            alt="preview"
            className="w-full h-48 object-cover rounded-xl border border-red-500"
          />
        </div>
      )}

      {/* Button */}
      <button
        onClick={handleSubmit}
        className="mt-6 w-full bg-gradient-to-r from-red-500 to-red-700 text-white py-3 rounded-xl font-semibold hover:scale-105 transition-all shadow-lg"
      >
        {loading ? "Processing..." : "Upload & Detect"}
      </button>

    </div>
  );
};

export default UploadForm;