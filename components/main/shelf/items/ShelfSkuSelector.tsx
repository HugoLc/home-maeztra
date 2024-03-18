"use client";
import React from "react";
import { useProductContext } from "../context/ProductContext";
import SkuItem from "./sku-item/SkuItem";

const ShelfSkuSelector = () => {
  const { product } = useProductContext();
  return (
    <div className="flex gap-2 py-2 px-7">
      {product.skus.map((sku) => (
        <SkuItem sku={sku} key={sku.skuId} />
      ))}
    </div>
  );
};

export default ShelfSkuSelector;
