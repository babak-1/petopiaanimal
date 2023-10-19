import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./PhotoSlider.css";

import { FreeMode, Navigation, Thumbs } from "swiper/modules";

const PhotoSlider = ({ photos }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "black",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiperDetails2"
      >
        {photos?.response?.map((res) => {
          return (
            <SwiperSlide key={res?.id}>
              <img src={res?.url} />
            </SwiperSlide>
          );
        })}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={3}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiperDetails"
      >
        {photos?.response?.map((res) => {
          return (
            <SwiperSlide key={res?.id}>
              <img src={res?.url} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default PhotoSlider;
