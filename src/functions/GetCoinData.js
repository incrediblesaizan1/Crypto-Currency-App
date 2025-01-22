import axios from "axios";

export const GetCoinData = (uuid) =>{
//  const myData = axios.get(`https://api.coingecko.com/api/v3/coins/${id}`)
 const myData = axios.get(`https://api.coinranking.com/v2/coin/${uuid}`)
    .then(res => {
        return res.data;
    }).catch(error =>{
      console.log("Some Error Occured While Fetching Data", error)
    })
  return myData
}