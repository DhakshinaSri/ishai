// src/components/Testimonials.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function Testimonials() {
  const testimonials = [
    {
      name: "John Doe",
      role: "Entrepreneur",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsam temporibus quidem magni qui doloribus quasi natus inventore nisi.",
    },
    {
      name: "Jane Smith",
      role: "Designer",
      image: "https://randomuser.me/api/portraits/women/45.jpg",
      text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    },
    {
      name: "Michael Lee",
      role: "Developer",
      image: "https://randomuser.me/api/portraits/men/65.jpg",
      text: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.",
    },
  ];

  return (
    <div className="w-full">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        centeredSlides={true}
        slidesPerView={"auto"}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        speed={4000}
        className="pb-10"
        breakpoints={{
          0: { slidesPerView: 1, centeredSlides: false },
          768: { slidesPerView: "auto", centeredSlides: true },
        }}
      >
        {testimonials.map((t, index) => (
          <SwiperSlide
            key={index}
            className="w-[80%] md:w-[60%] lg:w-[70%] xl:w-[50%]"
          >
            <div className="bg-black shadow-lg rounded-xl p-6 flex flex-col items-center text-center pt-10 h-72">
              <img
                src={t.image}
                alt={t.name}
                className="w-16 h-16 rounded-full mb-4"
              />
              <h3 className="text-lg font-semibold">{t.name}</h3>
              <p className="text-sm text-gray-500">{t.role}</p>
              <p className="text-white mt-4 line-clamp-4">{t.text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
