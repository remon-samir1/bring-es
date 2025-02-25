import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Slider.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function SliderOfAuth() {
  return (
    <>
      <Swiper
        spaceBetween={10}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src={require("../../../images/delicious-burger-with-fresh-ingredients 1.png")}
            loading="lazy"
            alt="food-slider"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={require("../../../images/auth-slider2.png")}
            loading="lazy"
            alt="food-slider"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={require("../../../images/auth-slider3.png")}
            loading="lazy"
            alt="food-slider"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
