import React from "react";

import "./SizeChart.scss";
import P from "../../atoms/P/P";

const SizeChart = ({ data }) => {
  return (
    <div className="SizeTableWrapper">
      <div className="grid5x6">
        <p>In CM</p>
        {data.attributes.size_chart.table_title.map((data) => (
          <P content={data} />
        ))}
      </div>
      <div className="grid5x6">
        <p>XS</p>
        <p>64.5</p>
        <p>37.5</p>
        <p>91</p>
        <p>91</p>
      </div>
      <div className="grid5x6">
        <p>S</p>
        <p>66.5</p>
        <p>39.9</p>
        <p>96</p>
        <p>96</p>
      </div>
      <div className="grid5x6">
        <p>M</p>
        <p>69</p>
        <p>46</p>
        <p>105.5</p>
        <p>105</p>
      </div>
      <div className="grid5x6">
        <p>L</p>
        <p>71</p>
        <p>47.7</p>
        <p>109.5</p>
        <p>109</p>
      </div>
      <div className="grid5x6">
        <p>XL</p>
        <p>73</p>
        <p>49.5</p>
        <p>114.5</p>
        <p>114</p>
      </div>
    </div>
  );
};

export default SizeChart;
