import { convertDate } from "./ConvertDate"

export const settingChartData = (setChartData, prices) =>{
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
            pointRadius:2,
            pointBackgroundColor:"#3a80e9",
            yAxisID: 'y',
          }]})
}