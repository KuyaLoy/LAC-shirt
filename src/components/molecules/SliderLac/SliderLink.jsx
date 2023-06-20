import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import P from "../../atoms/P/P";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./SliderLink.scss";

// import required modules
import { Navigation } from "swiper";

export default function SliderLink({
  slidesPerView,
  spaceBetween,
  className,
  data,
}) {
  return (
    <>
      <Swiper
        loop={true}
        slidesPerView={2}
        spaceBetween={"10%"}
        navigation={true}
        modules={[Navigation]}
        className={className}
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: "10%",
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: "7.5%",
          },
        }}
      >
        {data.map((data) => (
          <SwiperSlide key={data.id}>
            <a href={`/details/${data.category}/${data.id}`}>
              <img src={data.main_image_path} alt={""} />
              <span>{data.category}</span>
              <P content={data.name} />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
