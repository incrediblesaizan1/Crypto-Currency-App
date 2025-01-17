import axios from "axios"

 export const getCoinPrices = (id, days)=>{
    const price =    axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=inr&days=${days}&interval=daily`)
    .then(res => {
      return res.data.prices
    }).catch(error =>{
      console.log("Some Error Occured While Fetching Data", error)
    })
    return price
 }