"use client";
import React from "react";
import { useProductContext } from "../context/ProductContext";

const ShelfDescription = () => {
  const { product } = useProductContext();
  return <div>{product.description}</div>;
};

export default ShelfDescription;
