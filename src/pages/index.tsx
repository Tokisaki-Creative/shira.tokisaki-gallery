import Navbar from "@/components/Navbar";
import ShiraHeader from "@/components/header/ShiraHeader";
import Image from "next/image";
// import { Noto_Serif_JP } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-[88px] py-[88px]">
        <Navbar />
        <img src="assets/carousel/carousel1.jpg" />

        <div className="flex flex-col gap-[44px] container">
          <ShiraHeader />
          <p>
            韓ワヲヌ勝43練そク中残未佐億フヤトエ峰口フス女始んれ完豪ばッめた留京ゅど般痢ヨ速更まぜどは記止らあき携汚商負坊斉遣さリば。保ぶねそ野山ウ遺日急フチ碁朝ろ始中ウマヒ電1砲育キハロ他巡踊セソ任備クか位健んおこで策康まむをう行1季クマコ組宿偶ゃちらぎ。樹ナヒフサ将事レ万就コカスケ権部ゃラ被野ぜトべ子中リ家共けどー出暮広ぶえげき議目ノ實先らきだが行時ぎわう眠34余献老暫50処ぐおうな際鉄なごづせ。
          </p>
        </div>
      </div>
    </>
  );
}
