import { Facebook, Instagram, Linkedin, Mail, Phone, X } from "lucide-react";

const Footer = () => {
  return (
    <footer
      className="w-full bg-[url('/footer-bg.png')] bg-no-repeat bg-bottom bg-contain 
             md:bg-[url('/footer-bg.png')] 
             md:bg-contain 
             sm:bg-none bg-gradient-to-t from-white via-red-200 to-white text-gray-800 pt-10 border-t border-red-300"
      style={{
        backgroundImage: `linear-gradient(to top, rgba(255,255,255,0.1), rgba(255,0,0,0.2), rgba(255,255,255,0.1)), url('/footer-bg.png')`,
      }}
    >
      {/* Main Grid */}
      <div className="w-full max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-10">
        {/* 1. Logo + Description */}
        <div className="space-y-4">
          <img src="/red-car-logo.avif" alt="Logo" className="h-10 w-auto" />
          <p className="text-sm">
            Motor Company is the most trusted way of buying and selling used
            cars. Choose from over 5000 fully inspected second-hand car models.
          </p>
          <div>
            <h4 className="font-semibold text-red-600">Connect With Us</h4>
            <div className="flex gap-4 mt-2">
              <X className="text-red-600 hover:scale-110 cursor-pointer" />
              <Instagram className="text-red-600 hover:scale-110 cursor-pointer" />
              <Linkedin className="text-red-600 hover:scale-110 cursor-pointer" />
              <Facebook className="text-red-600 hover:scale-110 cursor-pointer" />
            </div>
          </div>
        </div>

        {/* 2 & 3. Pages + Legal */}
        <div className="flex flex-col sm:flex-row sm:justify-between gap-6">
          {/* Pages */}
          <div>
            <h4 className="font-semibold text-red-600 mb-2">Pages</h4>
            <ul className="space-y-1 text-sm">
              <a href="#" className="hover:underline">
                <li>Home</li>
              </a>
              <a href="#" className="hover:underline">
                <li>Products</li>
              </a>
              <a href="#" className="hover:underline">
                <li>Contact</li>
              </a>
              <a href="#" className="hover:underline">
                <li>Career</li>
              </a>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-red-600 mb-2">Legal</h4>
            <ul className="space-y-1 text-sm">
              <a href="#" className="hover:underline">
                <li>Terms & Conditions</li>
              </a>
              <a href="#" className="hover:underline">
                <li>Privacy Policy</li>
              </a>
            </ul>
          </div>
        </div>

        {/* 4. Contact */}
        <div className="space-y-2">
          <h4 className="font-semibold text-red-600 mb-2">Contact</h4>
          <div className="flex items-center gap-2 text-sm">
            <Phone className="w-4 h-4 text-red-600" />
            <a href="tel:+919876543210" className="hover:underline">
              +91-9876543210
            </a>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Mail className="w-4 h-4 text-red-600" />
            <a
              href="mailto:contact@motorcompany.com"
              className="hover:underline"
            >
              contact@motorcompany.com
            </a>
          </div>
        </div>

        {/* 5. Newsletter */}
        <div>
          <h4 className="font-semibold text-red-600 mb-2">
            Subscribe for our Newsletter
          </h4>
          <input
            type="email"
            placeholder="Enter your Email"
            className="w-full p-2 border rounded-md text-sm mb-2"
          />
          <button className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition">
            Subscribe
          </button>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="text-xs text-center md:text-left text-gray-600 flex flex-col md:flex-row justify-between items-center px-4 pb-10 max-w-7xl mx-auto gap-2">
        <p>© Copyright 2025 | All Rights Reserved</p>
        <p>Develop by Dhiraj Prajapat</p>
      </div>
    </footer>
  );
};

export default Footer;
