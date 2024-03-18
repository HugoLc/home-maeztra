import { Product } from "@/typings/products";
import React from "react";
import ShelfSliderSwipper from "./ShelfSliderSwipper";

const Shelf = async () => {
  const products = await getProductsData();

  return (
    <section className="shelf-container m-auto max-w-[1596px] w-[90vw] mb-12 mt-16">
      <h3 className="text-2xl font-bold text-gray-700 text-center mb-6 md:text-3xl md:mb-8">
        As Mais Pedidas
      </h3>
      <ShelfSliderSwipper products={products} />
    </section>
  );
};

export default Shelf;

async function getProductsData(): Promise<Product[]> {
  const res = await fetch(
    "https://ecommerce-study.onrender.com/products/productByCategoryId/855ea256-a205-4b7f-91ed-747de6d351f3"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
