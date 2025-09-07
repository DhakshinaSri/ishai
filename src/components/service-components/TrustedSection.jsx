// TrustedService.jsx
import TrustImg from "@assets/TrustedService.png";

export default function TrustedSection() {
  return (
    <section className="pt-28 sm:pt-24 lg:pt-28 pb-12 bg-white text-center relative">
      <div className="max-w-10xl mx-auto px-4">
        {/* Image */}
        <div className="flex justify-center relative">
          <img
            src={TrustImg}
            alt="Trusted Section"
            className="w-full max-w-20xl object-contain"
          />
        </div>

        {/* Heading & Subheading (overlapping upwards) */}
        <div className="max-w-3xl mx-auto -mt-8 sm:-mt-16 lg:-mt-24 relative z-10">
          <h1 className="mt-10 text-2xl sm:text-3xl lg:text-[48px] font-bold text-black leading-snug">
            <span className="text-[#64BFB6]">Trusted</span> by <br /> 1500+ people
          </h1>

          <p className="mt-4 text-base sm:text-lg lg:text-[20px] font-medium text-gray-700">
            Welcome to the Membership Program of our Learning Platform!
          </p>
          <p className="mt-9 text-2xl sm:text-lg lg:text-[24px] font-bold text-black">
            Services offered by ISHAI
          </p>
          <p className="mt-3 text-base sm:text-lg lg:text-[16px] font-medium text-gray-600">
            We provide a wide range of academic, professional, and industry-driven opportunities designed to empower students, faculty, and researchers. From skill development to research collaborations, our services aim to bridge the gap between learning and real-world impact.
          </p>
          <button className="mt-10 bg-black text-white py-2 px-6 rounded shadow hover:bg-teal-500 transition">
            Get Started Now
          </button>
        </div>
      </div>
    </section>
  );
}
