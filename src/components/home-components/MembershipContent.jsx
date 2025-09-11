import { Link } from "react-router-dom";

export default function MembershipContent({ imageUrl }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 w-full">
      {/* Image */}
      <div className="order-2 md:order-1 flex justify-center md:justify-end relative z-0">
        <img
          src={imageUrl}
          alt="Membership"
          className="block w-full max-w-[330px] sm:max-w-[400px] md:max-w-[420px] lg:max-w-none object-contain"
        />
      </div>

      {/* Text */}
      <div className="order-1 md:order-2 text-center md:text-left max-w-xl mx-auto md:mx-0 -mt-6 md:-mt-20">
        <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-2">
          Membership
        </h2>
        <h3 className="text-lg md:text-xl font-semibold text-gray-600 mb-4">
          Welcome to the Membership Program of ISHAI!
        </h3>
        <p className="text-gray-600 mb-6">
          Join the International Society for Healthcare & AI Innovators (ISHAI) and be part of a global network shaping the future of healthcare and artificial intelligence. Our membership connects you with exclusive resources, global collaborations, industry experts, and career opportunities.
        </p>
        <Link
        to="/membership"
        className="mt-6 inline-block px-6 py-3 bg-black text-white font-semibold rounded-lg shadow hover:bg-[#56a9a1] transition"
      >
        Get Started
      </Link>
      </div>
    </div>
  );
}
