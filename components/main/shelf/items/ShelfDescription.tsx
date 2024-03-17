"use client";
import React from "react";
import { useProductContext } from "../context/ProductContext";

const ShelfDescription = ({ ...props }: React.ComponentProps<"img">) => {
  const { product } = useProductContext();
  return <p {...props}>{product.description}</p>;
};

export default ShelfDescription;
