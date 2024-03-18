import Branner from "@/components/main/banner/Branner";
import Brands from "@/components/main/brands/Brands";
import Shelf from "@/components/main/shelf/Shelf";
import TipBar from "@/components/main/tipbar/TipBar";
import { PopUp } from "@/components/pop-ups/newsletter";
import { FullBanner } from "@/components/main/fullBanner";

export default async function Home() {
  return (
    <>
      <PopUp />
      <FullBanner />
      <TipBar />
      <Brands />
      <Shelf />
      <Branner />
    </>
  );
}
