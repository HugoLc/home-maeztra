import { IProductContext, Sku } from "@/typings/products";
import React, { useMemo } from "react";
import { useProductContext } from "../../context/ProductContext";

interface Props extends React.ComponentProps<"button"> {
  sku: Sku;
}

const SkuItem = ({ sku, ...props }: Props) => {
  const { product, setProduct } = useProductContext();
  console.log(sku.color);
  const color = useMemo(() => {
    if (sku.color === "Amarelo") {
      return "bg-amber-400";
    } else if (sku.color === "Azul") {
      return "bg-cyan-600";
    } else {
      return "";
    }
  }, [sku]);
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
      className={`${color} w-7 h-7 ${
        isSelected ? "border" : ""
      } border-black rounded`}
      onClick={() => handleSkuSlection()}
      {...props}
    ></button>
  );
};

export default SkuItem;
