"use client";

import React from "react";
import { useProductContext } from "../context/ProductContext";

const ShelfName = ({ ...props }: React.ComponentProps<"img">) => {
  const {
    product: { selectedSku },
  } = useProductContext();
  return <div {...props}>{selectedSku.name}</div>;
};

export default ShelfName;
