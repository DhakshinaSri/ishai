import React from "react";

export default function ImageCircle({ images }) {
  return (
    <div className="relative w-[350px] h-[350px] flex items-center justify-center">
      {/* Center image */}
      <div className="absolute w-28 h-28 rounded-2xl overflow-hidden shadow-lg z-10">
        <img
          src={images[0]}
          alt="center"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Rotating container for outer images */}
      <div className="absolute w-full h-full animate-spin-slow">
        {images.slice(1).map((img, i) => {
          const angle = (i / (images.length - 1)) * 2 * Math.PI; // distribute evenly
          const radius = 140; // distance from center
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          return (
            <div
              key={i}
              className="absolute w-16 h-16 rounded-2xl overflow-hidden shadow-md"
              style={{
                top: "50%",
                left: "50%",
                transform: `translate(${x - 32}px, ${y - 32}px)`, // offset by half size
              }}
            >
              <img
                src={img}
                alt={`img-${i}`}
                className="w-full h-full object-cover"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
