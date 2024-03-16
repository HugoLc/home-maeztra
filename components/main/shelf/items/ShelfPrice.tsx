"use client";

import React from 'react'
import { useProductContext } from '../context/ProductContext';

const ShelfPrice = () => {
    const {
        product: { selectedSku },
      } = useProductContext();
  return (
    <div>{selectedSku.price}</div>
  )
}

export default ShelfPrice