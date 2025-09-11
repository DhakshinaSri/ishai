import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom"; 
import logo from "@assets/logoishai.png";

export default function Footer() {
  return (
    <footer className="bg-[#65B5A3] text-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-15 py-12 
                grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 
                gap-10 lg:gap-12 justify-between">

        
        {/* Left Info */}
        <div>
          <a href="#home">
            <img
              src={logo}
              alt="Company Logo"
              className="h-20 md:h-20 w-auto"
            />
          </a>
          <p className="text-gray-100 mb-6">
            Together, we are building a smarter, healthier tomorrow.
          </p>
          <div className="flex gap-4">
            <a href="#" className="bg-yellow-400 text-[#65B5A3] p-3 rounded-full text-lg">
              <FaFacebookF />
            </a>
            <a href="#" className="bg-yellow-400 text-[#65B5A3] p-3 rounded-full text-lg">
              <FaTwitter />
            </a>
            <a href="#" className="bg-yellow-400 text-[#65B5A3] p-3 rounded-full text-lg">
              <FaInstagram />
            </a>
            <a href="#" className="bg-yellow-400 text-[#65B5A3] p-3 rounded-full text-lg">
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-3">
            <li>
              <Link to="/" className="hover:underline">› Home</Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline">› About Us</Link>
            </li>
            <li>
              <Link to="/services" className="hover:underline">› Services</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">› Contact</Link>
            </li>
            <li>
              <Link to="/membership" className="hover:underline">› Membership</Link>
            </li>
          </ul>
        </div>

        

        {/* Contact */}
        <div>
          <h3 className="font-bold text-lg mb-4">Contact</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-yellow-400 text-xl mt-1" />
              <span>
                # 327, 11th Block NG Road <br />
                New Washermenpet <br />
                Chennai 600 081
              </span>
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-yellow-400 text-xl" />
              <a href="mailto:info@ishai.in" className="hover:underline">
                info@ishai.in
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-yellow-400 text-xl" />
              <a href="tel:+919445393068" className="hover:underline">
                +91-94453 93068
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/30 py-4 text-center text-sm text-gray-100">
        © 2023 All rights reserved
      </div>
    </footer>
  );
}
