import { Link } from "react-router-dom";

export default function ServiceContent({ title, description, buttonText }) {
  return (
    <div className="flex flex-col justify-center max-w-md">
      <h2 className="text-5xl text-black font-bold mb-4">{title}</h2>
      <p className="text-gray-600 mb-6">{description}</p>
      
      <Link
        to="/services"
        className="bg-black text-white py-2 px-6 rounded shadow hover:bg-teal-500 transition w-40 text-center"
      >
        {buttonText}
      </Link>
    </div>
  );
}
