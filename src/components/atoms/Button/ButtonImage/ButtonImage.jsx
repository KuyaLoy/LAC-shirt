import React from "react";

const ButtonImage = ({ className, src, alt, onClick }) => {
  return (
    <>
      <button className={className} onClick={onClick}>
        <img src={src} alt={alt} />
      </button>
    </>
  );
};

export default ButtonImage;
