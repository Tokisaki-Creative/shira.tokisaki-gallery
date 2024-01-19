import React from "react";
import { format } from "date-fns";
import ShiraNewsTagLabel from "../label/ShiraNewsTagLabel";

interface ShiraNewsCardProps {
  newsTitle: string;
  newsSubtitle?: string;
  newsTags: string[];
  newsDate: Date;
}

const ShiraNewsCard = ({
  newsTitle,
  newsSubtitle,
  newsTags,
  newsDate,
}: ShiraNewsCardProps) => {
  const formattedDate = format(newsDate, "yyyy.MM.dd");

  return (
    <div className="flex gap-6 p-[24px] border-b border-dashed border-primary500 items-center">
      <p className="text-[20px] text-primary500">{formattedDate}</p>
      <div className="flex flex-col gap-2">
        {newsTags.map((tag, index) => (
          <ShiraNewsTagLabel key={index} type={tag} />
        ))}
      </div>
      <p className="text-fontBlack">{newsTitle}</p>
    </div>
  );
};

export default ShiraNewsCard;
