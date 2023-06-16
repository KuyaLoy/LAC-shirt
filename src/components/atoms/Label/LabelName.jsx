import React from "react";

const LabelName = ({ className, content }) => {
  return (
    <>
      <h3 className={className}>{content}</h3>
    </>
  );
};

export default LabelName;
