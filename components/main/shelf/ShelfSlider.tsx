"use client";
import { Product } from "@/typings/products";
import React, { useEffect } from "react";
import { ProductSummary } from "./items/ProductSummary";
import Slider, { Settings } from "react-slick";

const ShelfSlider = ({ products }: { products: Product[] }) => {
  const settings: Settings = {
    dots: false,
    arrows: true,
    lazyLoad: "anticipated",
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1775,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 705,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  useEffect(() => console.log(products), [products]);

  return (
    <Slider {...settings}>
      {products.map((product) => (
        <ProductSummary.Root
          className={"max-w-[307px]"}
          product={product}
          key={product.productId}
        >
          <ProductSummary.Image />
          {/* <div className="grow" /> */}
          <div className="py-2 px-7 flex flex-col ">
            <ProductSummary.SkuSelector />
            <ProductSummary.Price className="mt-1 text-xl font-bold" />
            <ProductSummary.Name className="mt-1 text-base text-black" />
            <ProductSummary.Description className="mt-1 text-xs" />
            {/* <div className="grow" /> */}
            <ProductSummary.AddToCart className="bg-[#FAA500] text-white outline-none rounded-[4px] mt-2 w-full p-2" />
          </div>
        </ProductSummary.Root>
      ))}
    </Slider>
  );
};

export default ShelfSlider;
