import axios from "axios"

 export const getCoinPrices = (id, days,priceType)=>{
    const price =axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=inr&days=${days}&interval=daily`)
    .then(res => {
      console.log(res.data)
      return res.data[priceType]
    }).catch(error =>{
      console.log("Some Error Occured While Fetching Data", error)
    })
    return price
 }