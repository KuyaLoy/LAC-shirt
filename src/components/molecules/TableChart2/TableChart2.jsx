import React from "react";
import "./TableChart2.scss";
import H2 from "../../atoms/H2/H2";

const TableChart2 = ({ TableChart }) => {
  return (
    <div className="TableChartWrapper2">
      <H2 content={TableChart.attributes.product_impormation.title} />

      <div className="ChartWrapper2">
        <div className="grid4">
          <p>{TableChart.attributes.product_impormation.item[0]}</p>
          <p>{TableChart.attributes.product_impormation.item[1]}</p>
          <p>{TableChart.attributes.product_impormation.item[2]}</p>
          <p>{TableChart.attributes.product_impormation.item[3]}</p>
        </div>
        <div className="grid4">
          <p>{TableChart.attributes.product_impormation.item[4]}</p>
          <p>{TableChart.attributes.product_impormation.item[5]}</p>
          <p>{TableChart.attributes.product_impormation.item[6]}</p>
          <p>{TableChart.attributes.product_impormation.item[7]}</p>
        </div>
        <div className="grid4">
          <p>{TableChart.attributes.product_impormation.item[8]}</p>
          <p>{TableChart.attributes.product_impormation.item[9]}</p>
        </div>
      </div>
    </div>
  );
};

export default TableChart2;
