import React from "react";
import ShiraHeader from "../header/ShiraHeader";
import ShiraGalleryCard from "../cards/ShiraGalleryCard";
import ShiraMoreButton from "../label/ShiraMoreButton";

const ShiraGalleryIndex = () => {
  return (
    <>
      <ShiraHeader title="Gallery" subtitle="ギャレリー" />
      <div className="flex justify-between">
        <ShiraGalleryCard
          galleryId="92034"
          title="Integer: Joukouhougaku no Sekai"
          subtitle="お隣の天使様にいつの間にか駄目人間に"
          imageUrl="gallery/thumbnail.jpg"
        />
        <ShiraGalleryCard
          galleryId="92034"
          title="Integer: Joukouhougaku no Sekai"
          subtitle="お隣の天使様にいつの間にか駄目人間に"
          imageUrl="gallery/thumbnail.jpg"
        />
        <ShiraGalleryCard
          galleryId="92034"
          title="Integer: Joukouhougaku no Sekai"
          subtitle="お隣の天使様にいつの間にか駄目人間に"
          imageUrl="gallery/thumbnail.jpg"
        />
        <ShiraGalleryCard
          galleryId="92034"
          title="Integer: Joukouhougaku no Sekai"
          subtitle="お隣の天使様にいつの間にか駄目人間に"
          imageUrl="gallery/thumbnail.jpg"
        />
      </div>
      <ShiraMoreButton title="More Gallery" />
    </>
  );
};

export default ShiraGalleryIndex;
