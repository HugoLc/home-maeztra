import Branner from "@/components/main/banner/Branner";
import Brands from "@/components/main/brands/Brands";
import Carousel from "@/components/main/carousel/Carousel";
import Shelf from "@/components/main/shelf/Shelf";
import TipBar from "@/components/main/tipbar/TipBar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PopUp } from "@/components/pop-ups/newsletter";

export default function Home() {
  return (
    <>
      <PopUp />
      <Carousel />
      <TipBar />
      <Brands />
      <Shelf />
      <Branner />
    </>
  );
}
