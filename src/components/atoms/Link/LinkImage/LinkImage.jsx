import React from "react";

const LinkImage = ({ className, src, alt, link, target }) => {
  return (
    <>
      <a href={link} className={className} target={target}>
        <img src={src} alt={alt} />
      </a>
    </>
  );
};

export default LinkImage;
