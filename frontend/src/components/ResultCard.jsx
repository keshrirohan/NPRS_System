const ResultCard = ({ result }) => {
  if (!result) return null;

  return (
    <div className="mt-6 bg-white p-5 rounded-2xl shadow-lg text-center w-full max-w-md">
      <h2 className="text-gray-500">Detected Number Plate</h2>

      <h1 className="text-3xl font-bold text-green-600 mt-2 tracking-wider">
        {result}
      </h1>
    </div>
  );
};

export default ResultCard;