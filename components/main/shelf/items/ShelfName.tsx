"use client";

import React from "react";
import { useProductContext } from "../context/ProductContext";

const ShelfName = () => {
  const {
    product: { selectedSku },
  } = useProductContext();
  return <div>{selectedSku.name}</div>;
};

export default ShelfName;
