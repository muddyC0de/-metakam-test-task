"use client";

import React from "react";
import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import { sneakers } from "@/constants/sneakers";

interface Props {
  color: "white" | "black" | "red";
  className?: string;
}

export const Slider: React.FC<Props> = ({ color }) => {
  return (
    <Swiper
      modules={[Pagination, Navigation]}
      className="w-[500px] rounded-lg "
      spaceBetween={10} // расстояние между слайдами
      slidesPerView={1} // количество слайдов, видимых одновременно
      navigation
      pagination={{ clickable: true }}
    >
      {sneakers[color].map((image, index) => (
        <SwiperSlide key={index}>
          <Image
            alt={"sneakers"}
            width={500}
            height={500}
            sizes="100vw"
            src={image}
            className="object-cover w-full h-auto"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
