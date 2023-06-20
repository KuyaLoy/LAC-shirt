import React from "react";
import "./TableChart.scss";
import H2 from "../../atoms/H2/H2";
import Image from "../../atoms/Image/Image";

const TableChart = ({ TableChart, Title }) => {
  return (
    <div className="TableChartWrapper">
      <H2 content={Title} />
      <Image src={TableChart} className="TableChartImg" />
    </div>
  );
};

export default TableChart;
