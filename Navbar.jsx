import { Bookmark, Menu, User } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="w-full max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex flex-col items-start">
          <img src="/red-car-logo.avif" alt="Logo" className="h-10 w-10" />
          <span className="text-red-600 font-bold tracking-wide text-sm hidden md:block">
            MOTOR COMPANY
          </span>
        </div>

        {/* Desktop Nav Links (hidden on small screens) */}
        <div className="hidden md:flex items-center gap-6">
          <a href="#" className="text-red-600 font-medium border-b-2 border-red-600 pb-1">
            Home
          </a>
          <a href="/buy-car" className="text-gray-700 hover:text-red-600 transition">
            Buy Car
          </a>
          <a href="/saved" className="flex items-center gap-1 text-gray-700 hover:text-red-600 transition">
            <Bookmark className="w-5 h-5" />
            <span>Saved</span>
          </a>
        </div>

        {/* Desktop Buttons (hidden on small screens) */}
        <div className="hidden md:flex items-center gap-4">
          <button className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition text-sm">
            Sell Your Car
          </button>
          <span className="text-red-600 text-2xl font-light">|</span>
          <button className="border border-red-600 text-red-600 px-4 py-2 rounded-md flex items-center gap-2 hover:bg-red-50 transition text-sm">
            <User className="w-5 h-5" />
            Login/Sign Up
          </button>
        </div>

        {/* Mobile Menu Button (visible below md) */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <Menu className="w-6 h-6 text-red-600" />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-inner border-t border-gray-200 px-4 pb-4 space-y-3">
          <a href="#" className="block text-red-600 font-medium">
            Home
          </a>
          <a href="/buy-car" className="block text-gray-700 hover:text-red-600 transition">
            Buy Car
          </a>
          <a href="/saved" className="block text-gray-700 hover:text-red-600 transition">
            <Bookmark className="inline w-4 h-4 mr-1" />
            Saved
          </a>
          <button className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition text-sm">
            Sell Your Car
          </button>
          <button className="w-full border border-red-600 text-red-600 py-2 rounded flex items-center justify-center gap-2 hover:bg-red-50 transition text-sm">
            <User className="w-4 h-4" />
            Login/Sign Up
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
