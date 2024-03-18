import Branner from "@/components/main/banner/Branner";
import Brands from "@/components/main/brands/Brands";
import Shelf from "@/components/main/shelf/Shelf";
import TipBar from "@/components/main/tipbar/TipBar";
import { PopUp } from "@/components/pop-ups/newsletter";
import DemoSlider, { Slide } from "@/components/main/carousel/Swipper";
import { Product } from "@/typings/products";
import BANNER from "@/public/img/Banner.png";
import { FullBanner } from "@/components/main/fullBanner";

async function getProductsData(): Promise<Product[]> {
  const res = await fetch("https://ecommerce-study.onrender.com/products/productByCategoryId/855ea256-a205-4b7f-91ed-747de6d351f3");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {

  const CAROUSEL: Slide[] = [
    { id: "image01", title: "d1", image_url: BANNER.src },
    { id: "image02", title: "d2", image_url: BANNER.src },
    { id: "image03",title: "d3", image_url: BANNER.src },
    { id: "image04",title: "d4", image_url: BANNER.src },
    { id: "image05",title: "d5", image_url: BANNER.src },
  ];

  return (
    <>
      <PopUp />
      <FullBanner/>
      <TipBar />
      <Brands />
      <Shelf />
      <Branner />
    </>
  );
}
