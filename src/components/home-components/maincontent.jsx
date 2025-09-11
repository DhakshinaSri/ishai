import { Link } from "react-router-dom";

export default function HeroContent() {
  return (
    <div className="text-center md:text-left mt-3">
      <h2 className="text-4xl md:text-4xl font-bold text-[#64BFB6] leading-tight">
        <span className="text-black text-7xl font-semibold">Shaping the Future of</span><br/>Healthcare with AI, Innovation, and Collaboration.
      </h2>
      <p className="mt-4 text-xl text-black font-bold">
        International Society for Healthcare & AI Innovators (ISHAI)
      </p>
      <p className="mt-2 text-gray-600">
        a global non-profit dedicated to connecting academia, industry, and research.
      </p>
      <Link
        to="/membership"
        className="mt-6 inline-block px-6 py-3 bg-black text-white font-semibold rounded-lg shadow hover:bg-[#56a9a1] transition"
      >
        Get Started
      </Link>
    </div>
  );
}
