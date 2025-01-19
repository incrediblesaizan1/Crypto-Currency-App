import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, scales, Ticks } from "chart.js/auto"; //Dont get rid of this
import { callback } from "chart.js/helpers";
import { ConvertNumber } from "../../functions/ConvertNumber";

function LineChart({ chartData, multiAxis }) {
  const options = {
    plugins: {
      legend: {
        display: multiAxis ? true : false,
      },
    },
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    scales:{
      y:{
        ticks:{
          callback: function(value, index, ticks) {
     return "₹" + ConvertNumber(value).toLocaleString();
          }
        }
      }
    }
  };

  return <Line data={chartData} options={options} />;
}

export default LineChart;