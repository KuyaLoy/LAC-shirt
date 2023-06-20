import React from "react";
import Image from "../../Image/Image";

import "./ButtonTooltipImage.scss";

const ButtonTooltipImage = ({ buttonClassName, content, image }) => {
  const insertClassName = `ButtonTooltipWrapper ${buttonClassName}`;
  return (
    <>
      <button className={insertClassName}>
        {content}
        <div className="HoverWrapper">
          <Image src={image} />
        </div>
      </button>
    </>
  );
};

export default ButtonTooltipImage;
