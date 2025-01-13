import React, { useEffect, useState } from 'react'
import Header from '../components/Common/Header'
import Tabs from '../components/Dashboard/Tabs'
import axios from 'axios'

const Dashboard = () => {

  const [coins, setCoins] = useState([])
  const [currency, setCurrency] = useState("inr")
 
 useEffect(() => {
   axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`)
  .then(res => {
    setCoins(res.data)
    console.log("api ran")
  }).catch(error =>{
    console.log("Some Error Occured While Fetching Data", error)
    console.log("api ran")
  })
 }, [])
 

  return (
    <div>
      <Header />
      <Tabs coins={coins} />
    </div>
  )
}

export default Dashboard
