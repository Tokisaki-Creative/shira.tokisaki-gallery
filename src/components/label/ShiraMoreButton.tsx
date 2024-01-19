import React from "react";

interface ShiraMoreButtonProps {
  url?: string;
  title: string;
}

const ShiraMoreButton = ({ url, title }: ShiraMoreButtonProps) => {
  return (
    <div className="flex items-center justify-end pt-[32px]">
      <a href={url}>
        <div className="flex gap-6">
          <p className="text-primary700 text-[16px] font-bold">{title}</p>
          <img src="assets/svg/morebutton.svg" alt="more button" />
        </div>
      </a>
    </div>
  );
};

export default ShiraMoreButton;
