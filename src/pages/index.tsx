import Navbar from "@/components/Navbar";
import Image from "next/image";
// import { Noto_Serif_JP } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-[88px] pt-[88px]">
        <Navbar />
        <img src="assets/carousel/carousel1.jpg" />
        <div className="container">
          <div className="flex gap-4 items-center">
            <p className="text-[32px]">Summary</p>
            <p className="text">/ポートフォリオ</p>
          </div>
        </div>
      </div>
    </>
  );
}
