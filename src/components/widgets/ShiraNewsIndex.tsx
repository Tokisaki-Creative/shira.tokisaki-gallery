import React from "react";
import ShiraHeader from "../header/ShiraHeader";
import ShiraNewsCard from "../cards/ShiraNewsCard";

const ShiraNewsIndex = () => {
  const mockNewsDate = new Date(2023, 0, 1);
  return (
    <>
      <ShiraHeader title="News" subtitle="ヌス" />
      <div className="flex flex-col shadow-md p-[32px]">
        <ShiraNewsCard
          newsTitle="Die FrohDie Fröhliche『天使の聖域"
          newsDate={mockNewsDate}
          newsTags={["cosplay", "daily"]}
        />
      </div>
    </>
  );
};

export default ShiraNewsIndex;
