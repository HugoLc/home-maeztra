"use client";

import React from "react";
import { useProductContext } from "../context/ProductContext";

const ShelfPrice = ({ ...props }: React.ComponentProps<"img">) => {
  const {
    product: { selectedSku },
  } = useProductContext();
  return <div {...props}>{`R$ ${selectedSku.price}`.replace(".", ",")}</div>;
};

export default ShelfPrice;
