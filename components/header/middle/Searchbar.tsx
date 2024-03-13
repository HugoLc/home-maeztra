import React from "react";

const Searchbar = () => {
  return (
    <div className="flex flex-1 items-center relative w-2/4 mx-5">
      <input
        type="text"
        placeholder="O Que Você Busca?"
        className="bg-[#EFEFEF] border-0 outline-none rounded-l-lg px-4 h-10 text-sm font-normal text-gray w-full"
      />

      <button className="bg-[#FAA500] border-0 rounded-lg h-10 w-28 cursor-pointer text-white text-sm font-normal ml-[-8px]">
        Buscar
      </button>
    </div>
  );
};

export default Searchbar;
