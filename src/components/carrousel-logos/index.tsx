"use client";

import { Swiper, SwiperSlide } from "swiper/react";

interface IProps {}

// Idea 2: carrousel auto repeat stop-on-hover + show text

export const CarrouselLogos: React.FC<IProps> = ({}) => {
  return (
    <Swiper
      slidesPerView={5}
      spaceBetween={30}
      autoplay={true}
      loop={true}
      navigation={false}
      className="mySwiper"
    >
      <SwiperSlide className="bg-blue-200 hover:bg-yellow-400">
        Slide 1
      </SwiperSlide>
      <SwiperSlide className="bg-blue-200 hover:bg-yellow-400">
        Slide 2
      </SwiperSlide>
      <SwiperSlide className="bg-blue-200 hover:bg-yellow-400">
        Slide 3
      </SwiperSlide>
      <SwiperSlide className="bg-blue-200 hover:bg-yellow-400">
        Slide 4
      </SwiperSlide>
      <SwiperSlide className="bg-blue-200 hover:bg-yellow-400">
        Slide 5
      </SwiperSlide>
      <SwiperSlide className="bg-blue-200 hover:bg-yellow-400">
        Slide 6
      </SwiperSlide>
    </Swiper>
  );
};
