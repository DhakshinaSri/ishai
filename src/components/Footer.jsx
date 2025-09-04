import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { HiLocationMarker, HiMail, HiPhone } from "react-icons/hi";

export default function Footer() {
  return (
    <footer className="bg-[#65B5A3] text-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-15 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20">
        {/* Left Info */}
        <div>
            <a href="#home">
              <img
                src="\src\assets\logoishai.png"
                alt="Company Logo"
                className="h-20 md:h-20 w-auto"
              /></a>
          <p className="text-gray-100 mb-6">
            The proper Footer on proper time can preserve you protection. 
            We assist you make sure everybody forward.
          </p>
          <div className="flex gap-4">
            <a href="#" className="bg-yellow-400 text-[#65B5A3] p-2 rounded-full">
              <FaFacebookF />
            </a>
            <a href="#" className="bg-yellow-400 text-[#65B5A3] p-2 rounded-full">
              <FaTwitter />
            </a>
            <a href="#" className="bg-yellow-400 text-[#65B5A3] p-2 rounded-full">
              <FaInstagram />
            </a>
            <a href="#" className="bg-yellow-400 text-[#65B5A3] p-2 rounded-full">
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-lg mb-4">Quick Link</h3>
          <ul className="space-y-3">
            <li>› Home</li>
            <li>› About Us</li>
            <li>› Services</li>
            <li>› Product</li>
          </ul>
        </div>

        {/* Blog */}
        <div>
          <h3 className="font-bold text-lg mb-4">Blog</h3>
          <ul className="space-y-4">
            <li>
              <p className="font-semibold">› People Saying About Footer.</p>
              <span className="text-sm text-gray-200">8 Nov, 2021</span>
            </li>
            <li>
              <p className="font-semibold">› People Saying About Footer.</p>
              <span className="text-sm text-gray-200">8 Nov, 2021</span>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-bold text-lg mb-4">Contact</h3>
          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <HiLocationMarker className="text-yellow-400" />
              <span>44 Danwers, NY City, USA, 70-102</span>
            </li>
            <li className="flex items-center gap-3">
              <HiMail className="text-yellow-400" />
              <span>Lamaro@Lamaroyc.Us</span>
            </li>
            <li className="flex items-center gap-3">
              <HiPhone className="text-yellow-400" />
              <span>91+585-656-658</span>
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
