const ResultCard = ({ result }) => {
  if (!result) return null;

  return (
    <div className="mt-6 bg-black border border-red-500 p-5 rounded-2xl shadow-[0_0_15px_rgba(255,0,0,0.3)] text-center w-full max-w-md">

      {/* Label */}
      <h2 className="text-gray-400 text-sm">
        Detected Number Plate
      </h2>

      {/* Result */}
      <h1 className="text-3xl font-bold text-red-500 mt-2 tracking-widest">
        {result}
      </h1>

    </div>
  );
};

export default ResultCard;