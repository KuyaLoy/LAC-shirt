import React from "react";

const LinkImage = ({ className, src, alt, link, target, onclick }) => {
  return (
    <>
      <a href={link} className={className} target={target} onClick={onclick}>
        <img src={src} alt={alt} />
      </a>
    </>
  );
};

export default LinkImage;
