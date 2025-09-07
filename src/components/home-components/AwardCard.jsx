export default function AwardCard({ title, description, bgColor }) {
  return (
    <div className="relative flex items-center justify-center w-56 h-56">
      {/* Colored background shape */}
      <div
        className={`absolute w-52 h-52 rounded-lg transform rotate-12 ${bgColor}`}
      ></div>

      {/* White Card */}
      <div className="relative bg-white shadow-md rounded-lg w-48 h-48 flex flex-col items-center justify-center text-center p-4">
        <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-sm text-gray-600 font-medium">{description}</p>
      </div>
    </div>
  );
}
