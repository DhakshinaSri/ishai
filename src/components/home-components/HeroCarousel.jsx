import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import MainSection1 from "./mainsection1";
import MainSection2 from "./mainsection2";

export default function HeroCarousel() {
  return (
    <section className="w-full">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop
        className="w-full"
      >

        {/* Slide 2 */}
        <SwiperSlide>
          <MainSection1 />
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <MainSection2 />
        </SwiperSlide>

      </Swiper>

      {/* Pagination style override */}
      <style jsx global>{`
  .swiper {
    width: 100%;
  }
  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: stretch;
  }
  .swiper-pagination {
    bottom: 10px !important; 
  }
  .swiper-pagination-bullet {
    background: #9ca3af !important; /* gray-400 */
    opacity: 0.7;
    width: 10px;
    height: 10px;
  }
  .swiper-pagination-bullet-active {
    background: #14b8a6 !important; /* teal-500 */
    opacity: 1;
    width: 12px;
    height: 12px;
  }
`}</style>

    </section>
  );
}
