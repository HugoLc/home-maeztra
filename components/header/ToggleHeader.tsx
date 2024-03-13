"use client";
import React from "react";
import HeaderMiddleContainer from "./middle/HeaderMiddleContainer";
import Menu from "./bottom/Menu";
import { useBreakpoints } from "../hooks/useBreakpoints";
import HeaderMobile from "./middle/HeaderMobile";

const ToggleHeader = () => {
  const { isSm } = useBreakpoints();
  //TODO: usar suspense
  return (
    <>
      {isSm ? (
        <HeaderMobile />
      ) : (
        <>
          <HeaderMiddleContainer />
          <Menu />
        </>
      )}
    </>
  );
};

export default ToggleHeader;
