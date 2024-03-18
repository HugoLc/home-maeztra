"use client";
import { Product } from "@/typings/products";
import React, { useEffect } from "react";
import { ProductSummary } from "./items/ProductSummary";
import Slider, { Settings } from "react-slick";
import DemoSlider from "../carousel/Swipper";
import { SwiperSlide } from "swiper/react";

const ShelfSliderSwipper = ({ products }: { products: Product[] }) => {
 
  useEffect(() => console.log(products), [products]);

  return (
    <section id="shelf-slider">
        <DemoSlider data={{
            dots: {
                desktop: false,
                mobile: false
            },
            arrow: {
                desktop: true,
                mobile: false
            },
            swipperProps:{
                breakpoints: {
                    1050:{
                        slidesPerView: 5,
                    },
                    568: {
                        slidesPerView: 2.5,
                        pagination: false,
                        navigation: false
                    },
                    0: {
                        slidesPerView: 1.2,
                        pagination: false,
                        navigation: false
                    },
                },
                spaceBetween: 12,
            }
        }}>
            
        {products.map((product) => (
            <SwiperSlide key={product.productId}>
                <ProductSummary.Root
                className={"max-w-[307px] h-full"}
                product={product}
                key={product.productId}
                >
                <ProductSummary.Image />
                {/* <div className="grow" /> */}
                <div className="py-2 px-7 flex flex-col h-full">
                    <ProductSummary.SkuSelector />
                    <ProductSummary.Price className="mt-1 text-xl font-bold" />
                    <ProductSummary.Name className="mt-1 text-base text-black" />
                    <ProductSummary.Description className="mt-1 text-xs" />
                    <div className="grow" />
                    <ProductSummary.AddToCart className="bg-[#FAA500] text-white outline-none rounded-[4px] mt-2 w-full p-2" />
                </div>
                </ProductSummary.Root>
            </SwiperSlide>
        
        ))}
        </DemoSlider>
    </section>
  );
};

export default ShelfSliderSwipper;
