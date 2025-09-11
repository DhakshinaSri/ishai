import React from "react";
import ImageCircle from "./ImageCircle";

// import your images
import img1 from "@assets/img1.jpg";
import img2 from "@assets/img2.jpg";
import img3 from "@assets/img3.jpg";
import img4 from "@assets/img4.jpg";
import img5 from "@assets/img5.jpg";
import img6 from "@assets/img6.jpg";
import img7 from "@assets/img7.jpg";
import img8 from "@assets/img8.jpg";
import img9 from "@assets/img9.jpg";
import img10 from "@assets/img10.jpg";
import img11 from "@assets/img11.jpg";

export default function MainSection4() {
  const images = [
    img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11,
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left - Image Circle */}
        <div className="flex justify-center">
          <ImageCircle images={images} />
        </div>

        {/* Right - Text */}
        <div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Connect with the World
          </h1>
          <p className="text-lg text-gray-600">
            Showcase your work, share your ideas, and build meaningful
            connections with a global community of creative professionals.
          </p>
        </div>
      </div>
    </section>
  );
}
