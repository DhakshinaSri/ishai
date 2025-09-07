import { Link } from "react-router-dom";

export default function HeroContent() {
  return (
    <div className="text-center md:text-left">
      <h1 className="text-4xl md:text-5xl font-bold text-black leading-tight">
        <span className="text-[#64BFB6]">Achieve</span> your <br />
        career goals
      </h1>
      <p className="mt-4 text-lg text-black font-semibold">
        30 Days Money Back Guarantee.
      </p>
      <p className="mt-2 text-gray-600">
        Enroll yourself now. Just drop your email-id here and our team will
        contact you with class details.
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
