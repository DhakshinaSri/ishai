import { Link } from "react-router-dom";

export default function AboutUs({ title, description, buttonText }) {
  return (
    <div className="flex flex-col justify-center text-center md:text-left max-w-md">
      <h2 className="text-5xl text-black font-bold mb-4 text-center md:text-left">
        {title}
      </h2>
      <p className="text-gray-600 mb-6 text-center md:text-left">
        {description}
      </p>

      <Link
        to="/about"
        className="bg-black text-white py-2 px-6 rounded shadow hover:bg-teal-500 transition w-40 
                   mx-auto md:mx-0 text-center"
      >
        {buttonText}
      </Link>
    </div>
  );
}
