import { useState } from "react";
import UploadForm from "../components/UploadForm";
import ResultCard from "../components/ResultCard";
import Navbar from "../components/Navbar";

const Home = () => {
  const [result, setResult] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200">

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center pt-24 px-4">

        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 text-center">
          Number Plate Recognition
        </h1>

        <p className="text-gray-600 mb-6 text-center max-w-md">
          Upload a vehicle image to detect and extract the number plate using AI.
        </p>

        <UploadForm setResult={setResult} />

        <ResultCard result={result} />

      </div>
    </div>
  );
};

export default Home;