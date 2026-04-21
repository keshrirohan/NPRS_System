import { useEffect, useState } from "react";
import { getHistory } from "../services/api";
import UploadForm from "../components/UploadForm";
import History from "../components/History";
import Navbar from "../components/Navbar";

const Dashboard = () => {
  const [history, setHistory] = useState([]);

  const fetchHistory = async () => {
    try {
      const res = await getHistory();
      setHistory(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchHistory();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-red-900">

      {/* Navbar */}
      <Navbar />

      <div className="pt-24 px-4 max-w-7xl mx-auto">

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-red-500 text-center mb-8">
          Dashboard
        </h1>

        {/* Layout */}
        <div className="flex flex-col md:flex-row gap-6">

          {/* Upload Section */}
          <div className="w-full md:w-1/2 flex justify-center">
            <UploadForm fetchHistory={fetchHistory} />
          </div>

          {/* History Section */}
          <div className="w-full md:w-1/2">
            <History data={history} />
          </div>

        </div>

      </div>
    </div>
  );
};

export default Dashboard;