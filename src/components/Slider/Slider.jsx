import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./Slider.css";

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import img1 from "../../assets/image/slideImg/studio_status_-200.jpg";
import img2 from "../../assets/image/slideImg/studio_status_-235.jpg";
import img3 from "../../assets/image/slideImg/studio_status_-244.jpg";
import img4 from "../../assets/image/slideImg/studio_status_-249.jpg";
import img5 from "../../assets/image/slideImg/studio_status_-180 (3).jpg";

export default function Slider() {
  return (
    <div className="sliderBlock">
      <div className="container">
        <h1 className="headText">Love story:</h1>
        <div className="slider">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            modules={[Autoplay, EffectCoverflow, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img className="slide" src={img1} />
            </SwiperSlide>
            <SwiperSlide>
              <img className="slide" src={img2} />
            </SwiperSlide>
            <SwiperSlide>
              <img className="slide" src={img3} />
            </SwiperSlide>
            <SwiperSlide>
              <img
                style={{ height: 450, objectFit: "cover" }}
                className="slide"
                src={img4}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img className="slide" src={img5} />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
