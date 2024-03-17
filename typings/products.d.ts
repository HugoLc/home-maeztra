export interface Product {
  productId: string;
  name: string;
  description: string;
  created_at: string;
  skus: Sku[];
}
export interface Sku {
  skuId: string;
  productId: string;
  name: string;
  price: number;
  listprice: number;
  color: string;
  size: string;
  isAvailable: number;
  created_at: string;
  images: Image[];
}
export interface Image {
  imageId: string;
  name: string;
  skuId: string;
  created_at: string;
  image_url: string;
}

export interface IProductContext extends Product {
  selectedSku: Sku;
}
