import { User } from "lucide-react";

export default function Comments() {
  return (
    <div
      className="
        flex items-center gap-3 
        bg-white shadow-md 
        rounded-[30px] 
        px-4 py-3
        w-full max-w-[260px] sm:max-w-[280px] md:max-w-[300px] 
        min-h-[55px]
      "
    >
      {/* Profile Icon */}
      <div className="flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 flex items-center justify-center bg-gray-200 rounded-full">
        <User className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
      </div>

      {/* Comment Text */}
      <p className="text-xs sm:text-sm md:text-base font-medium text-gray-700 leading-snug">
        The beginner courses are helpful
      </p>
    </div>
  );
}
