import React from "react";
import Image from "../../atoms/Image/Image";
import LabelCategory from "../../atoms/Label/LabelCategory";
import LabelName from "../../atoms/Label/LabelName";

const CardPlaceHolder = ({link, className, src, alt, label, nftName }) => {
  return (
    <a href={link} className={className}>
      <div className="nftImageWrapper">
        <Image src={src} alt={alt} />
      </div>
      <LabelCategory className="LabelName" content={label} />
      <LabelName className="LabelName" content={nftName} />
    </a>
  );
};

export default CardPlaceHolder;
