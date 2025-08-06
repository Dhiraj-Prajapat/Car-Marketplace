import { Facebook, Instagram, Linkedin, Mail, Phone, X } from "lucide-react";

const Footer = () => {
  return (
    <footer
      className="w-full bg-gradient-to-t from-white via-red-200 to-white text-gray-800 pt-10 border-t border-red-300"
      style={{
        backgroundImage: `linear-gradient(to top, rgba(255,255,255,0.1), rgba(255,0,0,0.2), rgba(255,255,255,0.1)), url('/footer-bg.png')`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 grid grid-flow-col gap-8 pb-10">
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

        <div className="space-y-4 grid  grid-flow-col-dense space-x-6">
          {/* 2. Pages */}
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

          {/* 3. Legal */}
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

          {/* 4. Contact */}
          <div>
            <h4 className="font-semibold text-red-600 mb-2">Contact</h4>
            <div className="flex items-center gap-2 text-sm mb-1">
              <Phone className="w-4 h-4 text-red-600" />
              <span className="whitespace-nowrap">
                <a href="tel:+919876543210" className="hover:underline">
                  +91-9876543210
                </a>
              </span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Mail className="w-4 h-4 text-red-600" />
              <span className="whitespace-nowrap">
                <a
                  href="mailto:contact@motorcompany.com"
                  className="hover:underline"
                >
                  contact@motorcompany.com
                </a>
              </span>
            </div>
          </div>
        </div>

        {/* 5. Newsletter */}
        <div className="pl-15">
          <h4 className="font-semibold text-red-600 mb-2">
            Subscribe for our Newsletter
          </h4>
          <input
            type="email"
            placeholder="Enter your Email"
            className="w-full p-2 border rounded-md text-sm mb-2"
          />
          <button className="w-auto bg-red-600 text-white py-2 px-8 rounded hover:bg-red-700 transition">
            Subscribe
          </button>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="text-xs text-center md:text-left text-gray-600 flex flex-col md:flex-row justify-between items-center px-4 pb-10 max-w-7xl mx-auto">
        <p>© Copyright 2025 | All Rights Reserved</p>
        <p>Develop by Dhiraj Prajapat</p>
      </div>
    </footer>
  );
};

export default Footer;
