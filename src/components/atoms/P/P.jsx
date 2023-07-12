import React from "react";

const P = ({ className, content }) => {
  return (
    <>
      <p className={className}>{content}</p>
    </>
  );
};

export default P;
