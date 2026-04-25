const History = ({ data }) => {
  return (
    <div className="w-full md:w-1/2 bg-black border border-red-500 p-4 rounded-2xl shadow-[0_0_15px_rgba(255,0,0,0.2)] max-h-[420px] overflow-y-auto">

      {/* Title */}
      <h2 className="text-xl font-bold mb-4 text-red-500 text-center">
        History
      </h2>

      {/* Empty State */}
      {data.length === 0 ? (
        <p className="text-center text-gray-400">No history found</p>
      ) : (
        data.map((item, i) => (
          <div
            key={i}
            className="bg-gray-900 border border-red-400 p-3 mb-3 rounded-xl hover:scale-[1.02] transition"
          >
            
            {/* Plate */}
            <p className="text-red-400 font-semibold text-lg">
              {item.plateNumber}
            </p>

            {/* Image */}
            <img
              src={`https://nprs-system-backend.onrender.com/uploads/${item.image}`}
              alt="plate"
              className="w-full h-24 object-cover rounded mt-2 border border-red-500"
            />

            {/* Date */}
            <p className="text-xs text-gray-400 mt-2">
              {new Date(item.createdAt).toLocaleString()}
            </p>

          </div>
        ))
      )}
    </div>
  );
};

export default History;