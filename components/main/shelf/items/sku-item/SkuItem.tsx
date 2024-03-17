import { IProductContext, Sku } from "@/typings/products";
import React, { useMemo } from "react";
import { useProductContext } from "../../context/ProductContext";

interface Props extends React.ComponentProps<"button"> {
  sku: Sku;
}

const SkuItem = ({ sku, ...props }: Props) => {
  const { product, setProduct } = useProductContext();
  const isSelected = useMemo(
    () => product.selectedSku.skuId === sku.skuId,
    [sku, product.selectedSku]
  );
  const handleSkuSlection = () => {
    setProduct((prev) => {
      return { ...prev, selectedSku: sku };
    });
  };
  return (
    <button
      className={`w-7 h-7 ${isSelected ? "border" : ""} border-black rounded`}
      onClick={() => handleSkuSlection()}
      {...props}
      style={{ backgroundColor: sku.color }}
    ></button>
  );
};

export default SkuItem;
