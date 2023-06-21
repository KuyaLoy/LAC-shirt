import React from "react";

const LinkImage = ({ className, src, alt, link }) => {
  return (
    <>
      <a href={link} className={className}>
        <img src={src} alt={alt} />
      </a>
    </>
  );
};

export default LinkImage;
