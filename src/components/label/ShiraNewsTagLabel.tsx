import React from "react";

interface ShiraNewsTagType {
  type: string;
}

const ShiraNewsTagLabel = ({ type }: ShiraNewsTagType) => {
  return (
    <a href={"news/" + type}>
      <p className="bg-primary500 text-white px-4 py-1 rounded-[16px] capitalize hover:bg-primary700">
        {type}
      </p>
    </a>
  );
};

export default ShiraNewsTagLabel;
