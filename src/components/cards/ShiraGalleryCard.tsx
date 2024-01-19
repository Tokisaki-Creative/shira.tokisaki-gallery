import React from "react";

const ShiraGalleryCard = () => {
  return (
    <div className="flex flex-col gap-[32px]">
      <img src="gallery/thumbnail.jpg" alt="thumbnail" />
      <div className="flex flex-col gap-1 items-center px-[24px]">
        <p className="text-fontBlack">お隣の天使様にいつの間にか駄目人間に</p>
        <p className="text-[24px]">Integer: Joukouhougaku no Sekai</p>
      </div>
    </div>
  );
};

export default ShiraGalleryCard;
