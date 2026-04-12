import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg z-50">
      
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-3">
        
        {/* Logo */}
        <h1 className="text-xl font-bold">
          NPRS
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6">
          <a href="#" className="hover:text-gray-200">Home</a>
          <a href="#" className="hover:text-gray-200">About</a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-blue-700 text-center py-3">
          <a href="#" className="block py-2">Home</a>
          <a href="#" className="block py-2">About</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;