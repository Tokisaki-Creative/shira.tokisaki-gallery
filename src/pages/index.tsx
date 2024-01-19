import Navbar from "@/components/Navbar";
import ShiraFooter from "@/components/footer/ShiraFooter";
import ShiraGalleryIndex from "@/components/widgets/ShiraGalleryIndex";
import ShiraMerchIndex from "@/components/widgets/ShiraMerchIndex";
import ShiraNewsIndex from "@/components/widgets/ShiraNewsIndex";
import ShiraSummaryIndex from "@/components/widgets/ShiraSummaryIndex";
import Image from "next/image";
// import { Noto_Serif_JP } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-[88px] py-[88px]">
        <div className="flex justify-center items-center">
          <img src="assets/logo/lipsum.svg" alt="logo-lipsum" width={"215px"} />
        </div>
        <Navbar />
        <img src="assets/carousel/carousel1.jpg" />

        <div className="flex flex-col gap-[44px] container">
          <ShiraSummaryIndex />
          <ShiraNewsIndex />
          <ShiraMerchIndex />
          <ShiraGalleryIndex />
        </div>

        <ShiraFooter />
      </div>
    </>
  );
}
