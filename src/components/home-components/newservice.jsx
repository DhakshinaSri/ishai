import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import aboutImage from "@assets/serviceimg11.png";
import aboutImage2 from "@assets/serviceimg10.png";
import aboutImage3 from "@assets/serviceimg13.png";

const products = [
  {
    id: 1,
    title: "ISHAI Student Chapters",
    description:
      "The International Society for Healthcare & AI Innovators (ISHAI) is committed to shaping the future of healthcare and artificial intelligence by creating strong connections between academia and industry.",
    image: aboutImage,
  },
  {
    id: 2,
    title: "ISHAI Center of Excellence (COE)",
    description:
      "The COE aims to empower students with hands-on training, research opportunities, and real-world exposure, acting as a bridge between academia and global industry leaders.",
    image: aboutImage2,
  },
  {
    id: 3,
    title: "Internships with ISHAI",
    description:
      "All ISHAI internships are facilitated through Skill Hive, a dedicated platform that connects students with curated internship opportunities across industries.",
    image: aboutImage3,
  },
];

export default function ProductSection() {
  const [active, setActive] = useState(1);
  const buttonText = "Explore"; // Header button text

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      {/* Content + Cards Container */}
      <div className="flex flex-col md:flex-row gap-12 items-start">
        {/* Left: Content */}
        <div className="md:w-1/2 flex flex-col gap-6">
          <h2 className="text-4xl font-bold text-gray-900">
            Services offered by <span className="text-[#65B5A3]">ISHAI</span>
          </h2>
          <p className="text-lg text-gray-500">
            The International Society for Healthcare & AI Innovators (ISHAI) is dedicated to shaping the future of healthcare and artificial intelligence by connecting students, academia, and industry. Through initiatives like ISHAI Student Chapters and the ISHAI Center of Excellence (COE), ISHAI empowers students with knowledge, hands-on experience, and global exposure. These platforms encourage innovation, collaboration, and leadership, preparing the next generation of professionals to drive impactful change in healthcare and AI worldwide.
          </p>

          <Link
            to="/services"
            className="bg-black text-white py-2 px-6 rounded shadow hover:bg-teal-500 transition w-40 text-center flex items-center justify-center"
          >
            {buttonText}
          </Link>
        </div>

        {/* Right: Cards */}
<div className="md:w-1/2 flex flex-col sm:flex-row sm:overflow-x-auto scrollbar-hide gap-6">
  {products.map((p) => (
    <div
      key={p.id}
      onClick={() => setActive(p.id)}
      className={`cursor-pointer transition duration-500 rounded-2xl shadow-md flex-shrink-0 flex flex-col justify-between
        ${
          active === p.id
            ? "sm:w-[400px] w-full bg-white p-3"
            : "sm:w-[220px] w-full bg-[#65B5A370] p-4 hover:bg-[#65B5A350]"
        }`}
    >
      <h2 className="text-2xl font-semibold mb-3">{p.title}</h2>

      {active === p.id && (
        <>
          {p.image && (
            <img
              src={p.image}
              alt={p.title}
              className="w-full h-40 object-cover rounded-lg mb-3"
            />
          )}
          <p className="text-gray-600 mb-4">{p.description}</p>
        </>
      )}

      <button className="flex items-center text-sm font-medium text-gray-700 mt-auto">
        Read More{" "}
        <span className="ml-1 bg-[#65B5A3] text-white rounded-full p-1">
          <ArrowRight className="w-4 h-4" />
        </span>
      </button>
    </div>
  ))}
</div>

      </div>
    </section>
  );
}
