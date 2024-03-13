"use client";
import React, { Suspense, lazy } from "react";
import HeaderMobile from "./middle/mobile/HeaderMobile";
import HeaderMiddleContainer from "./middle/HeaderMiddleContainer";
import Menu from "./bottom/Menu";
// import { useBreakpoints } from "../hooks/useBreakpoints";
// const HeaderMobile = lazy(() => import("./middle/mobile/HeaderMobile"));
// const Menu = lazy(() => import("./bottom/Menu"));
// const HeaderMiddleContainer = lazy(
//   () => import("./middle/HeaderMiddleContainer")
// );

const ToggleHeader = () => {
  return (
    <>
      <div className="block sm:hidden">
        <HeaderMobile />
      </div>
      <div className="hidden sm:block">
        <HeaderMiddleContainer />
        <Menu />
      </div>
    </>
  );

  /* A abordagem abaixo traz problemas de CLS e FID */

  // const { isXs } = useBreakpoints();
  // if (isXs === undefined) return <div className="w-full h-20" />;
  // return (
  //   <>
  //     {isXs ? (
  //       <Suspense fallback={<div className="w-full h-20" />}>
  //         <HeaderMobile />
  //       </Suspense>
  //     ) : (
  //       <Suspense fallback={<div className="w-full h-20" />}>
  //         <HeaderMiddleContainer />
  //         <Menu />
  //       </Suspense>
  //     )}
  //   </>
  // );
};

export default ToggleHeader;
