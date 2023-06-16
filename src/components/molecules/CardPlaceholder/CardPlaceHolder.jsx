import React from "react";
import Image from "../../atoms/Image/Image";
import LabelCategory from "../../atoms/Label/LabelCategory";
import LabelName from "../../atoms/Label/LabelName";

const CardPlaceHolder = ({ key, className, src, alt, label, nftName }) => {
  return (
    <div className={className}>
      <div className="nftImageWrapper">
        <Image src={src} alt={alt} />
      </div>
      <LabelCategory className="LabelName" content={label} />
      <LabelName className="LabelName" content={nftName} />
    </div>
  );
};

export default CardPlaceHolder;
