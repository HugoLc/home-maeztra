"use client"; // <===== REQUIRED

import React, { ReactNode } from "react";
import "./styles.css";

// Swiper components, modules and styles
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperProps } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Our custom button component
import SliderButtons from "./SliderButtons";
import { NextArrowGrey, PrevArrowGrey } from "./Arrows";
import { useMediaQuery } from "@/components/hooks/useMediaQuery";

export interface Slide {
  id: string;
  title: string;
  image_url: string;
}

interface DemoSliderProps {
  data: {
    arrow?: {
      desktop: boolean;
      mobile: boolean;
    };
    dots?: {
      desktop: boolean;
      mobile: boolean;
    };
    swipperProps?: SwiperProps;
  };
  children: ReactNode[];
}

const DemoSlider: React.FC<DemoSliderProps> = ({ data, children }) => {
  let modules = [Autoplay, Navigation, Pagination];

  // const breakiPoint = useMediaQuery("(max-width: 778px)")

  // if(breakiPoint && !data.arrow?.mobile){
  //     console.log("mobile")
  //     modules = modules.filter((module) => module !== Navigation);
  // }
  // if(!breakiPoint && !data.arrow?.desktop){
  //     modules= modules.filter((module) => module !== Navigation);
  // }
  // if(breakiPoint && !data.dots?.mobile){
  //     modules =modules.filter((module) => module !== Pagination);
  // }
  // if(!breakiPoint && !data.dots?.desktop){
  //     modules = modules.filter((module) => module !== Pagination);
  // }

  return (
    <section className="relative">
      <div className="">
        <div className="prev-arrow absolute left-0 z-10 top-2/4 translate-y-[-50%]">
          <PrevArrowGrey
            role="button"
            aria-label="Previous slide"
            className={`carousel-previous`}
          />
        </div>
        <ul className="">
          <Swiper
            modules={modules}
            navigation={{
              nextEl: ".carousel-next",
              prevEl: ".carousel-previous",
            }}
            pagination={{ type: "bullets", clickable: true }}
            autoplay={false}
            loop={false}
            {...data.swipperProps}
          >
            {children}
          </Swiper>
        </ul>
        <div className="next-arrow absolute right-0 z-10 top-2/4 translate-y-[-50%]">
          <NextArrowGrey
            role="button"
            aria-label="Previous slide"
            className={`carousel-next`}
          />
        </div>
      </div>
    </section>
  );
};

export default DemoSlider;
