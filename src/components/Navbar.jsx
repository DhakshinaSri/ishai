import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menus = [
    { name: "Home", color: "text-black font-medium" },
    { name: "Service", color: "text-black font-medium" },
    { name: "About us", color: "text-black font-medium" },
    { name: "Contact us", color: "text-black font-medium" },
    { name: "Membership", color: "text-[#64BFB6] font-extrabold" },
  ];

  return (
    <nav className="bg-white fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-25 items-center">
          {/* Logo Image */}
          <div className="cursor-pointer">
            <a href="#home">
              <img
                src="\src\assets\logoishai.png"
                alt="Company Logo"
                className="h-20 md:h-20 w-auto"
              />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-[72px]">
            {menus.map((item, index) => (
              <a
                key={index}
                href={"#" + item.name.toLowerCase().replace(/\s+/g, "")}
                className={`text-[20px] font-montserrat ${item.color}`}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Fullscreen Overlay) */}
      {isOpen && (
        <div className="fixed inset-0 bg-white flex flex-col items-center justify-center space-y-8 z-50">
          {/* Close button inside overlay */}
          <button
            className="absolute top-6 right-6"
            onClick={() => setIsOpen(false)}
          >
            <X size={32} />
          </button>

          {menus.map((item, index) => (
            <a
              key={index}
              href={"#" + item.name.toLowerCase().replace(/\s+/g, "")}
              className={`text-[24px] font-montserrat ${item.color}`}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
