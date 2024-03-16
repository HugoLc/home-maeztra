"use client";
import React from "react";
import { ProductProvider } from "../context/ProductContext";
import { Product } from "@/typings/products";

interface ShelfRootProps extends React.ComponentProps<"div"> {
  product: Product;
}

const ShelfRoot = ({
  product,
  className,
  children,
  ...props
}: ShelfRootProps) => {
  return (
    <ProductProvider productData={product}>
      <div className={`flex flex-col ${className}`} {...props}>
        {children}
      </div>
    </ProductProvider>
  );
};

export default ShelfRoot;
