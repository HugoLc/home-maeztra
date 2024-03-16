
"use client";

import React from "react";
import { useProductContext } from "../context/ProductContext";

const ShelfImage = () => {
  const {
    product: { selectedSku },
  } = useProductContext();
  return (
    <img
      src={selectedSku?.images[0].imageId}
      alt={selectedSku?.images[0].name}
    />
  );
};

export default ShelfImage;
