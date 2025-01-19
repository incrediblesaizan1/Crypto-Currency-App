import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Common/Header";
import Loader from "../components/Common/Loader";
import { ConvertObject } from "../functions/ConvertObject";
import { GetCoinData } from "../functions/GetCoinData";
import { getCoinPrices } from "../functions/GetCoinPrice";
import LineChart from "../components/Coin/LineChart";
import "../components/Dashboard/style.css";
import { convertDate } from "../functions/ConvertDate";
import SelectDays from "../components/Coin/SelectDays";
import PriceType from "../components/Coin/PriceType";
import List from "../components/Dashboard/List";
import CoinInfo from "../components/Coin/CoinInfo";

const CoinPage = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [days, setDays] = useState(365);
  const [priceType, setPriceType] = useState("prices");
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        await getData();
      }
    };
    fetchData();
  }, [id, days, priceType]);

  const handleDaysChange = (event) => {
    setDays(event.target.value);
  };

  const handlePriceTypeChange = async (event, newType) => {
    setPriceType(newType);
    const prices = await getCoinPrices(id, days, newType);
    if (prices && coin) {
      setChartData({
        labels: prices.map((price) => convertDate(price[0])),
        datasets: [
          {
            label: "data",
            data: prices.map((price) => price[1]),
            borderColor:
              coin.market_data.price_change_percentage_24h > 0
                ? "#61c96f"
                : "#f94141",
            borderWidth: 2,
            fill: true,
            tension: 0.25,
            backgroundColor:
              coin.market_data.price_change_percentage_24h > 0
                ? "rgba(97, 201, 111, 0.1)"
                : "rgba(249, 65, 65, 0.1)",
            pointRadius: 0,
          },
        ],
      });
    }
  };

  async function getData() {
    const coinData = await GetCoinData(id);
    if (coinData) {
      ConvertObject(setCoin, coinData);
      const prices = await getCoinPrices(id, days, priceType);
      if (prices) {
        setChartData({
          labels: prices.map((price) => convertDate(price[0])),
          datasets: [
            {
              label: "data",
              data: prices.map((price) => price[1]),
              borderColor:
                coinData.market_data.price_change_percentage_24h > 0
                  ? "#61c96f"
                  : "#f94141",
              borderWidth: 2,
              fill: true,
              tension: 0.25,
              backgroundColor:
                coinData.market_data.price_change_percentage_24h > 0
                  ? "rgba(97, 201, 111, 0.1)"
                  : "rgba(249, 65, 65, 0.1)",
              pointRadius: 0,
            },
          ],
        });
        setIsLoading(false);
      }
    }
  }

  return (
    <div>
      <Header />
      <div className="mx-auto pl-3 my-5 md:my-0 rounded-3xl w-[94vw] md:w-[99vw]">
        {isLoading ? <Loader /> : <List coin={coin} />}
      </div>

      <div className="mx-auto md:p-6 mt-8 mb-12 md:mt-0 md:mb-0 bx rounded-3xl w-[92vw] md:w-[95vw]">
        <div className="mb-5 w-[8vw]">
          <SelectDays days={days} handleDaysChange={handleDaysChange} />
        </div>

        <div className="text-center mb-5">
          <PriceType priceType={priceType} handlePriceTypeChange={handlePriceTypeChange} />
        </div>

        {isLoading ? <Loader /> : <LineChart chartData={chartData} />}
      </div>

      {isLoading ? (
        <Loader />
      ) : (
        <CoinInfo heading={coin?.name} description={coin?.desc} />
      )}
    </div>
  );
};

export default CoinPage;
