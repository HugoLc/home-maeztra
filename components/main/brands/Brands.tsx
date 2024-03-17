import DraggableScroll from "@/components/general/DraggableScroll";
import Image from "next/image";
import React from "react";

const Brands = () => {
  //TODO: mudar imagens
  const data = [
    { id: Math.random(), img: "/icons/brand-comma.svg" },
    { id: Math.random(), img: "/icons/brand-melissa.svg" },
    { id: Math.random(), img: "/icons/brand-forever.svg" },
    { id: Math.random(), img: "/img/brand-zara.png" },
    { id: Math.random(), img: "/icons/brand-ann-taylor.svg" },
  ];
  return (
    <section className="container-brands mx-auto mt-16">
      <h3 className="text-2xl font-bold text-gray-700 text-center mb-6 md:text-3xl md:mb-8">
        Marcas Parceiras
      </h3>

      <DraggableScroll>
        {data.map((item) => (
          <div
            className="min-w-[307px] w-[307px] flex justify-center"
            key={item.id}
          >
            <Image
              src={item.img}
              loading="lazy"
              alt="brand"
              width={308}
              height={64}
              className="w-full"
            />
          </div>
        ))}
      </DraggableScroll>
    </section>
  );
};

export default Brands;
