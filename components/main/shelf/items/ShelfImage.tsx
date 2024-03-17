"use client";

import React from "react";
import { useProductContext } from "../context/ProductContext";

const ShelfImage = ({ ...props }: React.ComponentProps<"img">) => {
  const {
    product: { selectedSku },
  } = useProductContext();
  return (
    <img
      src={selectedSku?.images[0].imageId}
      alt={selectedSku?.images[0].name}
      {...props}
    />
  );
};

export default ShelfImage;
