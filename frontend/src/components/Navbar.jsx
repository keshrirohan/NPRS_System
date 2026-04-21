import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="fixed top-0 w-full bg-black border-b border-red-500 shadow-[0_2px_10px_rgba(255,0,0,0.2)] z-50">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">

        {/* Logo */}
        <h1
          className="text-xl font-bold text-red-500 cursor-pointer hover:scale-105 transition"
          onClick={() => navigate("/")}
        >
          NPRS
        </h1>

        {/* Menu */}
        <div className="flex gap-6 items-center text-sm md:text-base">

          <button
            onClick={() => navigate("/")}
            className="text-gray-300 hover:text-red-400 transition"
          >
            Home
          </button>

          <button
            onClick={() => navigate("/history")}
            className="text-gray-300 hover:text-red-400 transition"
          >
            History
          </button>

          <button
            onClick={logout}
            className="bg-gradient-to-r from-red-500 to-red-700 text-white px-4 py-1.5 rounded-lg font-semibold hover:scale-105 transition shadow-md"
          >
            Logout
          </button>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;