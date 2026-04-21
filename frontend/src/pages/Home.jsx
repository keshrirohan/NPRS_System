import { useState } from "react";
import UploadForm from "../components/UploadForm";
import ResultCard from "../components/ResultCard";
import Navbar from "../components/Navbar";

const Home = () => {
  const [result, setResult] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-red-900">

      <Navbar />

      <div className="pt-24 px-4 flex flex-col items-center">

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-red-500">
          Number Plate Recognition
        </h1>

        {/* Subtitle */}
        <p className="text-gray-400 mb-6 text-center max-w-md">
          Upload a vehicle image to detect and extract the number plate using AI.
        </p>

        {/* Upload */}
        <UploadForm setResult={setResult} fetchHistory={() => {}} />

        {/* Result */}
        <ResultCard result={result} />

      </div>
    </div>
  );
};

export default Home;