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

        {/* Button */}
        <button className="bg-[#65B5A3] text-white px-6 py-3 rounded-lg shadow-md hover:bg-[#4A9E8B] transition">
          Get Started Now
        </button>
      </div>
    </section>
  );
}
