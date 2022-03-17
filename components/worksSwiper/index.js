import react from "react";
import scss from "./style.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectCoverflow } from "swiper";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

SwiperCore.use([EffectCoverflow]);

export default function worksSwiper(){
  return (
    <div className={scss.container}>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        centeredSlidesBounds={true}
        spaceBetween={0}
        slidesPerView={3}
        // slidesOffsetBefore={"5rem"}
        loop={true}
        coverflowEffect={{
          rotate: 25,
          stretch: 50,
          depth: 333,
          modifier: 1,
          slideShadows: false,
        }}
        modules={EffectCoverflow}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://placekitten.com/400/525" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://placekitten.com/400/525" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://placekitten.com/400/525" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}