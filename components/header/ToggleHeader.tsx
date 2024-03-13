"use client";
import React, { Suspense, lazy } from "react";
import { useBreakpoints } from "../hooks/useBreakpoints";
const HeaderMobile = lazy(() => import("./middle/mobile/HeaderMobile"));
const Menu = lazy(() => import("./bottom/Menu"));
const HeaderMiddleContainer = lazy(
  () => import("./middle/HeaderMiddleContainer")
);

const ToggleHeader = () => {
  //TODO: revisar performance com media query
  const { isXs } = useBreakpoints();
  if (isXs === undefined) return <div className="w-full h-20" />;
  return (
    <>
      {isXs ? (
        <Suspense fallback={<div className="w-full h-20" />}>
          <HeaderMobile />
        </Suspense>
      ) : (
        <Suspense fallback={<div className="w-full h-20" />}>
          <HeaderMiddleContainer />
          <Menu />
        </Suspense>
      )}
    </>
  );
};

export default ToggleHeader;
