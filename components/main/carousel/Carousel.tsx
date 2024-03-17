"use client";
import React from "react";
import { CAROUSEL, CAROUSEL_MOBILE } from "./mock";
import Slider, { Settings } from "react-slick";
import Image from "next/image";
import "./styles.css";

const Carousel = () => {
  //TODO: arrumar usando uma fonte de dados e uma imagem do imageset
  const settings: Settings = {
    dots: true,
    arrows: true,
    lazyLoad: "anticipated",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <section className="main-carousel hidden md:block min-h-[600]">
        {CAROUSEL.length ? (
          <Slider {...settings}>
            {CAROUSEL.map((slide, index) => (
              <Image
                key={slide.key}
                src={slide.img}
                alt="Banner principal"
                loading={index === 0 ? "eager" : "lazy"}
                width={1920}
                height={600}
                priority={index === 0 ? true : false}
                placeholder="blur"
              />
            ))}
          </Slider>
        ) : (
          <></>
        )}
      </section>
      <section className="main-carousel block md:hidden min-h-[320]">
        <Slider {...settings}>
          {CAROUSEL_MOBILE.map((slide, index) => (
            <Image
              key={slide.key}
              src={slide.img}
              alt="Banner principal"
              loading={index === 0 ? "eager" : "lazy"}
              width={360}
              height={320}
              priority={index === 0 ? true : false}
              placeholder="blur"
            />
          ))}
        </Slider>
      </section>
    </>
  );
};

export default Carousel;
