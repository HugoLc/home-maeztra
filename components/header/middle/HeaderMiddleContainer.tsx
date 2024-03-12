import Image from "next/image";
import React from "react";

const HeaderMiddleContainer = () => {
  return (
    <div className="flex justify-center items-center h-20 shadow-md">
      <div className="max-w-screen-2xl w-full flex items-center justify-between w-[90vw]">
        <div className="medium-header-logo">
          <Image
            alt="Logo Maeztra"
            src="/img/logo-maeztra.png"
            loading="eager"
            width={147}
            height={18}
          />
        </div>

        <div className="flex items-center relative w-2/4 mx-5">
          <input
            type="text"
            placeholder="O Que Você Busca?"
            className="bg-[#EFEFEF] border-0 outline-none rounded-l-lg px-4 h-10 text-sm font-normal text-gray w-full"
          />

          <button className="bg-[#FAA500] border-0 rounded-lg h-10 w-28 cursor-pointer text-white text-sm font-normal ml-[-8px]">
            Buscar
          </button>
        </div>

        <div className="flex items-center">
          <section className="flex items-center">
            <div>icon user</div>
            <a href="#" className="text-gray font-normal text-sm pl-2">
              Minha Conta
            </a>
          </section>

          <section className="flex items-center">
            <div>icon heart</div>
            <a href="#" className="text-gray font-normal text-sm pl-2">
              Minha Conta
            </a>
          </section>

          <section className="flex items-center">
            <div>icon bag</div>
            <a href="#" className="text-gray font-normal text-sm pl-2">
              Meu Carrinho
            </a>
          </section>
        </div>
      </div>
    </div>
  );
};

export default HeaderMiddleContainer;
