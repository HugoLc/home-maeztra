"use client";

import React from "react";

const ShelfAddToCart = ({ ...props }: React.ComponentProps<"button">) => {
  return (
    <button {...props} aria-label="adicionar">
      Adicionar
    </button>
  );
};

export default ShelfAddToCart;
