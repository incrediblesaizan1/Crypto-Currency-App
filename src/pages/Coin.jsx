import React, { useEffect, useState } from "react";
import Header from "../components/Common/Header";
import { useParams } from "react-router-dom";
import axios from "axios";
import List from "../components/Dashboard/List";
import { ConvertObject } from "../functions/ConvertObject";
import Loader from "../components/Common/Loader";
import CoinDescription from "../components/Coin/CoinDescription";
import LineChart from "../components/Coin/LineChart";
import { convertDate } from "../functions/ConvertDate";
import { convertDate2 } from "../functions/ConvertDate";
import SelectDays from "../components/Coin/SelectDays";
import TogglePriceType from "../components/Coin/PriceType";
import { fetchCoinBySymbol } from "../functions/fetchCoinBySymbol";

const Coin = () => {
  const { uuid } = useParams();
  const [coin, setCoin] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [chartData, setChartData] = useState(null);
  const [days, setDays] = useState("1y");
  const [coinChangePercentage, setCoinChangePercentage] = useState(null);
  const [priceType, setPriceType] = useState("prices");
  const [coinVolume, setCoinVolume] = useState(null);

  // Fetch initial coin data
  useEffect(() => {
    const fetchCoinData = async () => {
      try {
        const coinResponse = await axios.get(
          `https://api.coinranking.com/v2/coin/${uuid}?x-access-token=coinranking0d42595f0df39d313aa26e81a583600af7574cdbde528344`
        );
        ConvertObject(setCoin, coinResponse.data.data.coin);
        setCoinChangePercentage(coinResponse.data.data.coin.change);
      } catch (error) {
        console.error("Error fetching coin data:", error);
      }
    };
    fetchCoinData();
  }, [uuid]);

  // Fetch chart data
  useEffect(() => {
    const fetchChartData = async () => {
      if (!coin) return; 
      setIsLoading(true)
      try {
        if (priceType === "prices") {
          const historyResponse = await axios.get(
            `https://api.coinranking.com/v2/coin/${uuid}/history?timePeriod=${days}&x-access-token=coinranking89d7a9bd15dd4dd6d83655cf39431d73fe014a7f50a22727`
          );

          const priceHistory = historyResponse.data.data.history;

          const filterUniqueByDate = (priceHistory) => {
            const dateMap = new Map();
            priceHistory.forEach((item) => {
              const date = convertDate(item.timestamp * 1000);
              if (!dateMap.has(date) || item.timestamp > dateMap.get(date).timestamp) {
                dateMap.set(date, item);
              }
            });
            return Array.from(dateMap.values()).sort((a, b) => a.timestamp - b.timestamp);
          };

          const uniqueDailyData = filterUniqueByDate(priceHistory);

          setChartData({
            labels: uniqueDailyData.map((item) => convertDate(item.timestamp * 1000)),
            datasets: [{
              label: "Price",
              data: uniqueDailyData.map((item) => item.price),
              borderColor: coinChangePercentage > 0 ? "#61c96f" : "#f94141",
              borderWidth: 2,
              fill: true,
              tension: 0.25,
              backgroundColor: coinChangePercentage > 0 ? "rgba(97, 201, 111, 0.1)" : "rgba(249, 65, 65, 0.1)",
              pointRadius: 0,
            }],
          });
        } else if (priceType === "total_volumes") {
          const volumeData = await fetchCoinBySymbol(coin.symbol, days);
          if (volumeData && volumeData.total_volumes) {
            const filteredVolumes = volumeData.total_volumes
            
            setChartData({
              labels: filteredVolumes.map((item) => convertDate2(item[0])),
              datasets: [{
                label: "Volume",
                data: filteredVolumes.map((item) => item[1]),
                borderColor: coinChangePercentage > 0 ? "#61c96f" : "#f94141",
                borderWidth: 2,
                fill: true,
                tension: 0.25,
                backgroundColor: coinChangePercentage > 0 ? "rgba(97, 201, 111, 0.1)" : "rgba(249, 65, 65, 0.1)",
                pointRadius: 0,
              }],
            });
          }
        }else if(priceType == "market_caps"){

          const marketCapsData = await fetchCoinBySymbol(coin.symbol, days);
          if(marketCapsData && marketCapsData.market_caps){
            const filteredMarketCaps = marketCapsData.market_caps
            setChartData({
              labels: filteredMarketCaps.map((item) => convertDate2(item[0])),
              datasets: [{
                label: "Volume",
                data: filteredMarketCaps.map((item) => item[1]),
                borderColor: coinChangePercentage > 0 ? "#61c96f" : "#f94141",
                borderWidth: 2,
                fill: true,
                tension: 0.25,
                backgroundColor: coinChangePercentage > 0 ? "rgba(97, 201, 111, 0.1)" : "rgba(249, 65, 65, 0.1)",
                pointRadius: 0,
              }],
            })
          }
        }
      } catch (error) {
        console.error("Error fetching chart data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchChartData();
  }, [uuid, days, priceType, coin, coinChangePercentage]);

  const handleDaysChange = (event) => {
    setDays(event.target.value);
  };

  const handlePriceTypeChange = (event) => {
    setPriceType(event.target.value);
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      <Header />
      <div className="mx-auto pl-3 my-5 md:my-0 rounded-3xl w-[94vw] md:w-[99vw]">
        <List coin={coin} />
      </div>
      <div className="mx-auto md:p-6 mt-8 mb-12 md:mt-0 md:mb-0 bx rounded-3xl w-[92vw] md:w-[95vw]">
        <div className="mb-5 w-[8vw]">
          <SelectDays days={days} handleDaysChange={handleDaysChange} />
        </div>
        <div className="text-center mb-5">
          <TogglePriceType
            priceType={priceType}
            handlePriceTypeChange={handlePriceTypeChange}
          />
        </div>
        <LineChart chartData={chartData} />
      </div>
      <div>
        <CoinDescription heading={coin.name} description={coin.desc} />
      </div>
    </div>
  );
};

export default Coin;