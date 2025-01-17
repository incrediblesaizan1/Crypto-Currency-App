import axios from "axios";

export const GetCoinData = (id) =>{
 const myData = axios.get(`https://api.coingecko.com/api/v3/coins/${id}`)
    .then(res => {
        return res.data;
    }).catch(error =>{
      console.log("Some Error Occured While Fetching Data", error)
    })
  return myData
}