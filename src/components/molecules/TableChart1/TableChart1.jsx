import React from "react";
import "./TableChart1.scss";
import H2 from "../../atoms/H2/H2";

const TableChart1 = ({ TableChart }) => {
  return (
    <div className="TableChartWrapper">
      <H2 content={TableChart.attributes.material_information.title} />

      <div className="ChartWrapper">
        <div className="grid5">
          <p>{TableChart.attributes.material_information.item[0]}</p>
          <p className="WithBox">
            {TableChart.attributes.material_information.item[1]}
          </p>
          <p className="WithBox">
            {TableChart.attributes.material_information.item[2]}
          </p>
          <p className="WithBox active">
            {TableChart.attributes.material_information.item[3]}
          </p>
          <p>{TableChart.attributes.material_information.item[4]}</p>
        </div>
        <div className="grid5">
          <p>{TableChart.attributes.material_information.item[5]}</p>
          <p className="WithBox">
            {TableChart.attributes.material_information.item[6]}
          </p>
          <p className="WithBox active">
            {TableChart.attributes.material_information.item[7]}
          </p>
          <p className="WithBox">
            {TableChart.attributes.material_information.item[8]}
          </p>
          <p>{TableChart.attributes.material_information.item[9]}</p>
        </div>
        <div className="grid5">
          <p>{TableChart.attributes.material_information.item[10]}</p>
          <p className="WithBox">
            {TableChart.attributes.material_information.item[11]}
          </p>
          <p className="WithBox active">
            {TableChart.attributes.material_information.item[12]}
          </p>
          <p className="WithBox">
            {TableChart.attributes.material_information.item[13]}
          </p>
          <p className="WithBox">
            {TableChart.attributes.material_information.item[14]}
          </p>
        </div>
        <div className="grid5x2">
          <p className="div1">
            {TableChart.attributes.material_information.item[15]}
          </p>
          <p className="WithBox active">
            {TableChart.attributes.material_information.item[16]}
          </p>
          <p className="WithBox">
            {TableChart.attributes.material_information.item[17]}
          </p>
          <p className="WithBox">
            {TableChart.attributes.material_information.item[18]}
          </p>
          <p className="WithBox">
            {TableChart.attributes.material_information.item[19]}
          </p>
          <p className="div1">
            {TableChart.attributes.material_information.item[20]}
          </p>
          <p className="WithBox active">
            {TableChart.attributes.material_information.item[21]}
          </p>
          <p className="WithBox">
            {TableChart.attributes.material_information.item[22]}
          </p>
          <p className="WithBox active">
            {TableChart.attributes.material_information.item[23]}
          </p>
          <p className="WithBox active">
            {TableChart.attributes.material_information.item[24]}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TableChart1;
