import React from "react";
import ShiraHeader from "../header/ShiraHeader";
import ShiraMoreButton from "../label/ShiraMoreButton";

const ShiraMerchIndex = () => {
  return (
    <>
      <ShiraHeader title="Merch" subtitle="マーク" />
      <div className="flex justify-between">
        <img src="gallery/merchthumb.jpg" width={"520px"} alt="merch1" />
        <img src="gallery/merchthumb.jpg" width={"520px"} alt="merch2" />
      </div>
      <ShiraMoreButton title="More Merch" />
    </>
  );
};

export default ShiraMerchIndex;
