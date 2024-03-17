import DraggableScroll from "@/components/general/DraggableScroll";
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
    <section className="container-brands m-auto">
      <p className="text-2xl font-bold text-gray-700 text-center mb-6 md:text-3xl md:mb-8">
        Marcas Parceiras
      </p>

      <DraggableScroll>
        {data.map((item) => (
          <div
            className="min-w-[307px] w-[307px] flex justify-center"
            key={item.id}
          >
            <img src={item.img} alt="brand" className="w-full" />
          </div>
        ))}
      </DraggableScroll>
    </section>
  );
};

export default Brands;
