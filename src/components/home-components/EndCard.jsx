import { Link } from "react-router-dom";

export default function EndCard() {
  return (
    <section className="w-full py-30 flex justify-center items-center">
      <div className="text-center max-w-2xl px-6">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-[#65B5A3] mb-4">
          Ready to Upskill?
        </h2>

        {/* Subheading */}
        <p className="text-base md:text-lg text-gray-600 mb-6 leading-relaxed">
          Start your learning journey today and join a community of lifelong learners
        </p>

        <Link
        to="/membership"
        className="mt-6 inline-block px-6 py-3 bg-black text-white font-semibold rounded-lg shadow hover:bg-[#56a9a1] transition"
      >
        Get Started
      </Link>
      </div>
    </section>
  );
}
