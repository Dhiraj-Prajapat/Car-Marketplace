import { Bookmark, User } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between">
        {/* Left side - Logo */}
        <div className="flex flex-col items-center ">
          <img
            src="/red-car-logo.avif" // Replace with your logo path
            alt="Logo"
            className="h-10 w-10"
          />
          <span className="text-red-600 font-bold tracking-wide text-sm">MOTOR COMPANY</span>
        </div>

        {/* Center - Nav links */}
        <div className="hidden md:flex items-center gap-6 min-w-[25%]">
          <a href="#" className="text-red-600 font-medium border-b-2 border-red-600 pb-1">Home</a>
          <a href="/buy-car" className="text-gray-700 hover:text-red-600 transition">Buy Car</a>
          <a href="/saved" className="flex items-center gap-1 text-gray-700 hover:text-red-600 transition">
            <Bookmark className="w-5 h-5" />
            <span>Saved</span>
          </a>
        </div>

        {/* Right side - Buttons */}
        <div className="flex items-center gap-4">
          <button className="bg-red-600 text-white px-8 py-2 rounded-md hover:bg-red-700 transition">
            Sell Your Car
          </button>
          <span className='text-red-600 text-4xl font-light flex items-center justify-center mb-2.5'>|</span>
          <button className="border border-red-600 text-red-600 px-4 py-2 rounded-md flex items-center gap-2 hover:bg-red-50 transition">
            <User className="w-5 h-5" />
            Login/Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
