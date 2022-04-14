import React from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Line } from "react-chartjs-2";

const LineChart = ({ coinHistory, currentPrice, coinName }) => {
  const coinPrice = [];
  const coinTimestamp = [];

  for (let i = coinHistory?.data?.history.length - 1; i >= 0; i -= 1) {
    coinPrice.push(coinHistory.data.history[i].price);
    coinTimestamp.push(new Date(coinHistory?.data?.history[i].timestamp * 1000).toLocaleDateString());
  }
  //   for (let i = 0; i < coinHistory?.data?.history.length; i += 1) {
  //     console.log(coinTimestamp[i]);
  //   }

  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: "Price in USD",
        data: coinPrice,
        fill: false,
        backgroundColor: "#06b6d4",
        borderColor: "#06b6d4",
      },
    ],
  };

  return (
    <>
      <div className="text-center">
        <span className="text-3xl my-2 font-medium  bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500">
          {coinName} Price Chart
        </span>
      </div>
      <div className="text-center my-2 font-medium ">
        Current change
        <span className={coinHistory?.data?.change > 0 ? "text-green-500 p-2" : "text-red-500 p-2"}>
          {coinHistory?.data?.change}%
        </span>
      </div>
      <div className="text-center my-2 font-medium mb-5">
        Current {coinName} price $ <span className="font-bold">{currentPrice}</span>
      </div>
      {/* <Line data={data} options={options} /> */}
      <Line data={data} />
    </>
  );
};

export default LineChart;
