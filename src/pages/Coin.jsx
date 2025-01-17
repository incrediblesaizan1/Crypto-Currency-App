import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Common/Header";
import Loader from "../components/Common/Loader";
import { ConvertObject } from "../functions/ConvertObject";
import axios from "axios";
import List from "../components/Dashboard/List";
import CoinInfo from "../components/Coin/CoinInfo";
import { GetCoinData } from "../functions/GetCoinData";
import { getCoinPrices } from "../functions/GetCoinPrice";
import LineChart from "../components/Coin/LineChart";
import { label } from "framer-motion/client";
import { Dataset } from "@mui/icons-material";
import "../components/Dashboard/style.css"
import { convertDate } from "../functions/ConvertDate";

const CoinPage = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [days, setDays] = useState(30);
  const [chartData, setChartData] = useState({})

  useEffect(() => {
    if (id) {
      getData();
    }
  }, [id]);

  async function getData() {
    const coinData = await GetCoinData(id);
    if (coinData) {
      ConvertObject(setCoin, coinData);
      const prices = await getCoinPrices(id, days);
      if (prices) {
        console.log(prices)
        setChartData({
          labels: prices.map((price)=> convertDate(price[0])),
          datasets: [
            {
              label:"data",
              data: prices.map((price)=> price[1]),
             borderColor: coinData.market_data.market_cap_change_percentage_24h > 0 ? "#61c96f":"#f94141",
             borderWidth: 2,
             fill: true,
             tension: 0.25,
             backgroundColor: coinData.market_data.market_cap_change_percentage_24h > 0 ? "rgb(97, 201, 111,0.1)":"rgb(249, 65, 65,0.1)",
              pointRadius:0,
              pointBackgroundColor:"#f94141",
              yAxisID: 'y',
            }]})
        setIsLoading(false);
      }
    }
  }

  return (
    <div>
      <Header />
      <div className=" mx-auto pl-3 rounded-3xl w-[94vw] md:w-[99vw]">
        {isLoading ? <Loader /> : <List coin={coin} />}
      </div>
      <div className=" mx-auto p-6 bx rounded-3xl w-[92vw] md:w-[95vw]">
      {isLoading ? <Loader /> : <LineChart chartData={chartData} /> }
      </div>
      {isLoading ? (
        <Loader />
      ) : (
        <CoinInfo heading={coin.name} description={coin.desc} />
      )}
    </div>
  );
};

export default CoinPage;
