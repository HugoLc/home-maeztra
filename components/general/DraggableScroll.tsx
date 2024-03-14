"use client";
import React, { useEffect, useRef, useState } from "react";
import { useBreakpoints } from "../hooks/useBreakpoints";

const DraggableScroll = ({
  children,
  ...props
}: React.ComponentProps<"div">) => {
  const scrollableDivRef = useRef<HTMLDivElement>(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState<number | null>(null);
  const [scrollLeft, setScrollLeft] = useState<number | null>(null);
  const [isScrollBarVisible, setIsScrollBarVisible] = useState(false);

  useEffect(() => {
    function handleResize() {
      const scrollableDiv = scrollableDivRef.current;
      if (scrollableDiv) {
        setIsScrollBarVisible(
          scrollableDiv.scrollWidth > scrollableDiv.clientWidth
        );
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsMouseDown(true);
    setStartX(e.pageX - scrollableDivRef.current!.offsetLeft);
    setScrollLeft(scrollableDivRef.current!.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsMouseDown(false);
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isMouseDown) return;
    e.preventDefault();
    if (startX !== null && scrollLeft !== null && scrollableDivRef.current) {
      const x = e.pageX - scrollableDivRef.current.offsetLeft;
      const walk = (x - startX) * 2;
      scrollableDivRef.current.scrollLeft = scrollLeft - walk;
    }
  };
  return (
    <div
      className={`${
        isScrollBarVisible
          ? isMouseDown
            ? "cursor-grabbing"
            : "cursor-grab"
          : "cursor-default"
      } flex items-center ${
        isScrollBarVisible ? "justify-left" : "justify-center"
      } w-[90vw] m-auto  scrollbar-hidden gap-4`}
      ref={scrollableDivRef}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      {...props}
    >
      {children}
    </div>
  );
};

export default DraggableScroll;
