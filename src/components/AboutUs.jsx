export default function AboutUs({ title, description, buttonText }) {
  return (
    <div className="flex flex-col justify-center text-center md:text-left max-w-md">
      <h2 className="text-5xl text-black font-bold mb-4">{title}</h2>
      <p className="text-gray-600 mb-6">{description}</p>
      <button className="bg-[#64BFB6] text-white py-2 px-6 rounded shadow hover:bg-teal-500 transition">
        {buttonText}
      </button>
    </div>
  );
}
