"use client";

import React from "react";
import { useProductContext } from "../context/ProductContext";
import Image from "next/image";

const ShelfImage = () => {
  const {
    product: { selectedSku },
  } = useProductContext();
  return (
    <Image
      src={selectedSku?.images[0].image_url}
      alt={selectedSku?.images[0].name}
      width={308}
      height={381}
      loading="lazy"
    />
  );
};

export default ShelfImage;
