import Navbar from "@/components/Navbar";
import ShiraNewsCard from "@/components/cards/ShiraNewsCard";
import ShiraFooter from "@/components/footer/ShiraFooter";
import ShiraHeader from "@/components/header/ShiraHeader";
import ShiraNewsTagLabel from "@/components/label/ShiraNewsTagLabel";
import ShiraNewsIndex from "@/components/widgets/ShiraNewsIndex";
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
          <ShiraHeader title="Summary" subtitle="サマリー" />
          <p className="text-fontBlack leading-[150%]">
            韓ワヲヌ勝43練そク中残未佐億フヤトエ峰口フス女始んれ完豪ばッめた留京ゅど般痢ヨ速更まぜどは記止らあき携汚商負坊斉遣さリば。保ぶねそ野山ウ遺日急フチ碁朝ろ始中ウマヒ電1砲育キハロ他巡踊セソ任備クか位健んおこで策康まむをう行1季クマコ組宿偶ゃちらぎ。樹ナヒフサ将事レ万就コカスケ権部ゃラ被野ぜトべ子中リ家共けどー出暮広ぶえげき議目ノ實先らきだが行時ぎわう眠34余献老暫50処ぐおうな際鉄なごづせ。
          </p>

          {/* news section */}
          <ShiraNewsIndex />
          <ShiraHeader title="Merch" subtitle="マーク" />
          <ShiraHeader title="Gallery" subtitle="ギャレリー" />
          <div className="flex gap-[56px]">
            <div className="flex flex-col gap-[24px]">
              <img src="gallery/thumbnail.jpg" alt="thumbnail" />
              <div className="flex flex-col gap-1 items-center px-[12px]">
                <p className="text-fontBlack text-center text-[10px]">
                  お隣の天使様にいつの間にか駄目人間に
                </p>
                <p className="text-center text-[16px]">
                  Integer: Joukouhougaku no Sekai
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-[24px]">
              <img src="gallery/thumbnail.jpg" alt="thumbnail" />
              <div className="flex flex-col gap-1 items-center px-[12px]">
                <p className="text-fontBlack text-center text-[10px]">
                  お隣の天使様にいつの間にか駄目人間に
                </p>
                <p className="text-center text-[16px]">
                  Integer: Joukouhougaku no Sekai
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-[24px]">
              <img src="gallery/thumbnail.jpg" alt="thumbnail" />
              <div className="flex flex-col gap-1 items-center px-[12px]">
                <p className="text-fontBlack text-center text-[10px]">
                  お隣の天使様にいつの間にか駄目人間に
                </p>
                <p className="text-center text-[16px]">
                  Integer: Joukouhougaku no Sekai
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-[24px]">
              <img src="gallery/thumbnail.jpg" alt="thumbnail" />
              <div className="flex flex-col gap-1 items-center px-[12px]">
                <p className="text-fontBlack text-center text-[10px]">
                  お隣の天使様にいつの間にか駄目人間に
                </p>
                <p className="text-center text-[16px]">
                  Integer: Joukouhougaku no Sekai
                </p>
              </div>
            </div>
          </div>
        </div>
        <ShiraFooter />
      </div>
    </>
  );
}
