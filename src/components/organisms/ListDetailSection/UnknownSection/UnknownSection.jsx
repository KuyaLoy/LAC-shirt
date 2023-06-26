import React from "react";

import "./UnknownSection.scss";
import H2 from "../../../atoms/H2/H2";

const UnknownSection = ({ data }) => {
  return (
    <div className="UnknownWrapper">
      <H2 content={data.attributes.packages.title} />

      <div className="emptyContainer">coming soon</div>
    </div>
  );
};

export default UnknownSection;
