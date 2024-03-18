"use client";

import DemoSlider, { Slide } from "@/components/main/carousel/Swipper";
import { SwiperSlide } from "swiper/react";
import BANNER from "@/public/img/Banner.png";
import BANNER_MOBILE from "@/public/img/banner-mobile.png";
import Image from "next/image";

export const FullBanner = () => {
  const CAROUSEL = [
    {
      id: "image01",
      title: "d1",
      image_url: BANNER,
      image_url_mobile: BANNER_MOBILE,
    },
    {
      id: "image02",
      title: "d2",
      image_url: BANNER,
      image_url_mobile: BANNER_MOBILE,
    },
    {
      id: "image03",
      title: "d3",
      image_url: BANNER,
      image_url_mobile: BANNER_MOBILE,
    },
    {
      id: "image04",
      title: "d4",
      image_url: BANNER,
      image_url_mobile: BANNER_MOBILE,
    },
    {
      id: "image05",
      title: "d5",
      image_url: BANNER,
      image_url_mobile: BANNER_MOBILE,
    },
  ];

  return (
    <section id="fullbanner">
      <DemoSlider
        data={{
          dots: {
            desktop: true,
            mobile: true,
          },
          arrow: {
            desktop: true,
            mobile: true,
          },
        }}
      >
        {CAROUSEL.map((slider, index) => {
          return (
            <SwiperSlide key={slider.id}>
              <picture>
                <source
                  media="(min-width: 768px)"
                  srcSet={slider.image_url.src}
                />
                <source
                  media="(max-width: 767px)"
                  srcSet={slider.image_url_mobile.src}
                />
                <Image
                  src={slider.image_url}
                  alt="Descrição da imagem"
                  className="w-full"
                  loading={index == 0 ? "eager" : "lazy"}
                  priority={index == 0}
                />
              </picture>
            </SwiperSlide>
          );
        })}
      </DemoSlider>
    </section>
  );
};
