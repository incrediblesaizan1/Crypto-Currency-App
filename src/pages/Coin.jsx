import React, { useEffect, useState } from 'react'
import {useParams } from 'react-router-dom';
import Loader from '../components/Common/Loader';
import Header from '../components/Common/Header';
import List from "../components/Dashboard/List"

const Coin = ({}) => {
    const {id} = useParams()
    const [coinData, setCoinData] = useState(null)

     useEffect(() => {
       const fetchCoin = async () => {
        const a = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`)
        const data = await a.json()
  setCoinData(data)
       }
       fetchCoin()
     }, [id])
    

  return (
    <div>
        <Header />
        {coinData?`hello ${coinData.name}`:<Loader />}
    </div>
  )
}

export default Coin
