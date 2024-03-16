import { Product } from "@/typings/products";
import React from "react";
import { ProductSummary } from "./items/ProductSummary";

const Shelf = async () => {
  const products = await getProductsData();
  return products.map((product) => (
    <ProductSummary.Root product={product}>
      <ProductSummary.Image />
      <ProductSummary.SkuSelector />
      <ProductSummary.Price />
      <ProductSummary.Name />
      <ProductSummary.Description />
      <ProductSummary.AddToCart />
    </ProductSummary.Root>
  ));
};

export default Shelf;

async function getProductsData(): Promise<Product[]> {
  const res = await fetch("http://localhost:3000/api/products");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
