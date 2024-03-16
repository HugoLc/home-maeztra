"use client";
import { IProductContext, Product } from "@/typings/products";
import React, { createContext, useContext, useState } from "react";

type ProductContextType = {
  product: IProductContext;
  setProduct: (product: IProductContext) => void;
};

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error(
      "useProductContext deve ser usado dentro de um ProductProvider"
    );
  }
  return context;
};

export const ProductProvider = ({
  children,
  productData,
}: {
  children: React.ReactNode;
  productData: Product;
}) => {
  const [product, setProduct] = useState<IProductContext>({
    ...productData,
    selectedSku: productData.skus[0],
  } as IProductContext);

  return (
    <ProductContext.Provider value={{ product, setProduct }}>
      {children}
    </ProductContext.Provider>
  );
};
