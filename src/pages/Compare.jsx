import React, { useEffect, useState } from "react";
import Header from "../components/Common/Header";
import SelectCoin from "../components/Compare/SelectCoin";
import SelectDays from "../components/Coin/SelectDays"
import axios from "axios";
import {ConvertObject}  from "../functions/ConvertObject"
import Loader from "../components/Common/Loader"
import List from "../components/Compare/List2";
import CoinDescription from "../components/Coin/CoinDescription" 
import MultiLineChart from "../components/Compare/MultiLineChart"
import {convertDate} from "../functions/ConvertDate"
import "../components/Dashboard/style.css"

const Compare = () => {
  const [crypto1, setCrypto1] = useState("Qwsogvtv82FCd");
  const [crypto2, setCrypto2] = useState("razxDUgYGNAdQ");
  const [days, setDays] = useState("1y");
  const [isLoading, setIsLoading] = useState(true)
  const [coin1Data, setCoin1Data] = useState(null)
  const [coin2Data, setCoin2Data] = useState(null)
  const [chartData, setChartData] = useState(null)
  const [coinChangePercentage1, setCoinChangePercentage1] = useState(null);
  const [coinChangePercentage2, setCoinChangePercentage2] = useState(null);
  

  const handleDaysChange = (e) =>{
    setDays(e.target.value)
  }

  useEffect(() => {
    coinData()
  }, [])
  

  const coinData = async() =>{
    setIsLoading(true)
    const data1 = await axios.get(
      `https://api.coinranking.com/v2/coin/${crypto1}?x-access-token=coinranking0d42595f0df39d313aa26e81a583600af7574cdbde528344`
    );
 ConvertObject(setCoin1Data,data1.data.data.coin)
 setCoinChangePercentage1(data1.data.data.coin.change)
 const data2 =  await axios.get(
   `https://api.coinranking.com/v2/coin/${crypto2}?x-access-token=coinranking0d42595f0df39d313aa26e81a583600af7574cdbde528344`
  );
  ConvertObject(setCoin2Data , data2.data.data.coin)
  setCoinChangePercentage2(data2.data.data.coin.change)
  setIsLoading(false)
}


  const handleCoinChange = (e, isCoin2) =>{
    setIsLoading(true)
    if(isCoin2){
      setCrypto2(e.target.value)
      const fetchCoinData = async () => {
        try {
          const coinResponse = await axios.get(
            `https://api.coinranking.com/v2/coin/${e.target.value}?x-access-token=coinranking0d42595f0df39d313aa26e81a583600af7574cdbde528344`
          );
          ConvertObject(setCoin2Data ,coinResponse.data.data.coin)
        } catch (error) {
          console.error("Error fetching coin data:", error);
        }
      };
      fetchCoinData();
    }else{
      setCrypto1(e.target.value)
      const fetchCoinData = async () => {
        try {
          const coinResponse = await axios.get(
            `https://api.coinranking.com/v2/coin/${e.target.value}?x-access-token=coinranking0d42595f0df39d313aa26e81a583600af7574cdbde528344`
          );
          ConvertObject(setCoin1Data ,coinResponse.data.data.coin)
        } catch (error) {
          console.error("Error fetching coin data:", error);
        }
      };
      fetchCoinData();
    }
    setIsLoading(false)
  }
  
  useEffect(() => {
    const fetchChartData = async () => {
      setIsLoading(true);
      try {
        const historyResponse1 = await axios.get(
          `https://api.coinranking.com/v2/coin/${crypto1}/history?timePeriod=${days}&x-access-token=coinranking89d7a9bd15dd4dd6d83655cf39431d73fe014a7f50a22727`
        );
        const historyResponse2 = await axios.get(
          `https://api.coinranking.com/v2/coin/${crypto2}/history?timePeriod=${days}&x-access-token=coinranking89d7a9bd15dd4dd6d83655cf39431d73fe014a7f50a22727`
        );
  
        const priceHistory1 = historyResponse1.data.data.history;
        const priceHistory2 = historyResponse2.data.data.history;
  
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
  
        const uniqueDailyData1 = filterUniqueByDate(priceHistory1);
        const uniqueDailyData2 = filterUniqueByDate(priceHistory2);
  
        setChartData({
          labels: uniqueDailyData1.map((data) => convertDate(data.timestamp * 1000)),
          datasets: [
            {
              label: "Crypto 1",
              data: uniqueDailyData1.map((data) => data.price), 
              borderWidth: 1,
              fill: false,
              backgroundColor: "rgba(58, 128, 233, 0.1)",
              tension: 0.25,
              borderColor: coinChangePercentage1 !== null && coinChangePercentage1 > 0 ? "#3a80e9" : "#f94141" ,
              pointRadius: 0,
              yAxisID: "crypto1", 
            },
            {
              label: "Crypto 2",
              data: uniqueDailyData2.map((data) => data.price), 
              borderWidth: 1,
              fill: false,
              tension: 0.25,
              borderColor: coinChangePercentage2 !== null && coinChangePercentage2 > 0 ? "#61c96f" : "#f94141",
              pointRadius: 0,
              yAxisID: "crypto2", 
            },
          ],
        });
      } catch (error) {
        console.error("Error fetching chart data:", error);
      } finally {
        setIsLoading(false);
      }
    };
  if(coinChangePercentage2 !== null && coinChangePercentage1 !== null){
    fetchChartData();
  }
  }, [crypto1, crypto2, days, coin1Data, coin2Data, coinChangePercentage1, coinChangePercentage2]);
  
console.log(coin2Data)

  return (
    <div>
    {isLoading && coinChangePercentage1 !== null && coinChangePercentage2 !== null ? <Loader /> :(<div>
      <Header />
      <div className=" flex items-center justify-between mt-3 gap-2  w-[95vw] mx-auto ">
        <SelectCoin
          crypto1={crypto1}
          crypto2={crypto2}
        handleCoinChange={handleCoinChange}
        />
      </div>
      <div className="  w-[95vw] mx-auto">
        {coin1Data?<List coin={coin1Data} i={coin1Data.uuid} />:<Loader/>}
        {coin2Data?<List coin={coin2Data} i={coin2Data.uuid} />:<Loader />}
      </div>
      <div className=" bx p-0 md:p-5 rounded-3xl pt-4 w-[95vw] text-center mx-auto  ">
          <div className="mb-3 w-[8vw]">
                  <SelectDays days={days} handleDaysChange={handleDaysChange} />
                </div>
      {chartData && coinChangePercentage1 !== null && coinChangePercentage2 !== null ? <MultiLineChart chartData={chartData} /> : <Loader />}
      </div>
       <div className=" w-[95vw] mx-auto text-center">
      {coin1Data?<CoinDescription heading={coin1Data.name} description={coin1Data.desc} />:<Loader />}
      {coin2Data? <CoinDescription heading={coin2Data.name} description={coin2Data.desc} />:<Loader />}
      </div>
    </div>)}
    </div>
  );
};

export default Compare;
