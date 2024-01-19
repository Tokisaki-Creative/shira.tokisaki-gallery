import React from "react";

interface ShiraGalleryCardProps {
  galleryId: string;
  title: string;
  subtitle: string;
  imageUrl: string;
}

const ShiraGalleryCard = ({
  galleryId,
  title,
  subtitle,
  imageUrl,
}: ShiraGalleryCardProps) => {
  return (
    <a href={"gallery/" + galleryId}>
      <div className="flex flex-col gap-[24px] w-[234px]">
        <img src={imageUrl} alt={"thumbnail" + galleryId} width={"234px"} />
        <div className="flex flex-col gap-1 items-center px-[12px]">
          <p className="text-fontBlack text-center text-[10px]">{subtitle}</p>
          <p className="text-center text-[16px]">{title}</p>
        </div>
      </div>
    </a>
  );
};

export default ShiraGalleryCard;
