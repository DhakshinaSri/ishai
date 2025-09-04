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
          Welcome to the Membership Program of our Learning Platform!
        </h3>
        <p className="text-gray-600 mb-6">
          We believe in building a strong network of institutions, industry
          professionals, and students/job seekers who are passionate about
          learning, career growth, and collaboration.
        </p>
        <button className="bg-black text-white px-6 py-3 rounded-lg shadow hover:opacity-90">
          Get Started
        </button>
      </div>
    </div>
  );
}
