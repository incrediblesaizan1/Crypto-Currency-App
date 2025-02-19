import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { ConvertNumber } from "../../functions/ConvertNumber";

function MultiLineChart({ chartData, multiAxis }) {
  const options = {
    plugins: {
      legend: {
        display: true,
      },
    },
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    scales: {
      crypto1: {
        type: "linear",
        position: "left", 
        title: {
          display: true,
          text: "Crypto 1 Price",
        },
        grid: {
          drawOnChartArea: true,
        },
        ticks:{
          callback: function(value, index, ticks) {
               return "$" + ConvertNumber(value).toLocaleString();
                    }
        }
      },
      crypto2: {
        type: "linear",
        position: "right", 
        title: {
          display: true,
          text: "Crypto 2 Price",
        },
        grid: {
          drawOnChartArea: false, 
        },
        ticks:{
          callback: function(value, index, ticks) {
               return "$" + ConvertNumber(value).toLocaleString();
                    }
        }
      },
    },
  };
  
  return <Line data={chartData} options={options} />;
}

export default MultiLineChart;
