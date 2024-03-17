import Image from "next/image";
import React from "react";
import ButtonsContainer from "./buttons/ButtonsContainer";
import Logo from "./Logo";
import Searchbar from "./Searchbar";

const HeaderMiddleContainer = () => {
  return (
    <div className="flex justify-center items-center h-20 shadow-md">
      <div className="max-w-[1596px] flex items-center justify-between w-[90vw]">
        <Logo />
        <Searchbar />
        <ButtonsContainer />
      </div>
    </div>
  );
};

export default HeaderMiddleContainer;
