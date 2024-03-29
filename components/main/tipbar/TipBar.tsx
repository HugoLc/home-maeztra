import React, { useRef, useState } from "react";
import { dataTipbar } from "./mock";
import "../../general/styles.css";
import DraggableScroll from "@/components/general/DraggableScroll";
import Image from "next/image";

const TipBar = () => {
  return (
    <section>
      <h3 className="text-base font-bold text-gray-700 py-6 text-center">
        Por que comprar na Maeztra?
      </h3>
      <DraggableScroll>
        {dataTipbar.map((tip) => (
          <div className="" key={tip.id}>
            <div className=" max-w-screen-xl w-full mx-auto">
              <div className=" flex items-center justify-center">
                <div className="min-w-[307px] flex items-center bg-gray-200 rounded-md flex-none h-16 px-7 max-w-xs">
                  <Image
                    src={tip.img}
                    alt="Banner principal"
                    width={32}
                    height={32}
                    loading="lazy"
                  />
                  <section className="container-advantagens-slider-item-texts ml-5">
                    <p className="text-sm font-bold text-gray-700">
                      {tip.title}
                    </p>
                    <span className="text-xs font-medium text-black">
                      {tip.subTitle}
                    </span>
                  </section>
                </div>
              </div>
            </div>
          </div>
        ))}
      </DraggableScroll>
    </section>
  );
};

export default TipBar;
