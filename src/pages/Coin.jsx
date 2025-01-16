import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/Common/Header'
import Loader from '../components/Common/Loader'
import {ConvertObject} from "../functions/ConvertObject"
import axios from 'axios'
import List from '../components/Dashboard/List'
import CoinInfo from '../components/Coin/CoinInfo'

const CoinPage = () => {
  const {id} = useParams()
  const [coin, setCoin] = useState(null)
  const [ isLoading , setIsLoading] = useState(true)

  useEffect(() => {
    if(id){
      axios.get(`https://api.coingecko.com/api/v3/coins/${id}`)
    .then(res => {
      ConvertObject(setCoin, res.data)
      setIsLoading(false)
    }).catch(error =>{
      console.log("Some Error Occured While Fetching Data", error)
      setIsLoading(false)
    })
    }
  }, [id])

  return (
    <div>
      <Header />
      <div className=' mx-auto pl-3 rounded-3xl w-[94vw] md:w-[99vw]'>
      {isLoading? <Loader />: <List  coin={coin} />}
      </div>
      {isLoading? <Loader />: <CoinInfo heading={coin.name} description={coin.desc} />}
    </div>
  )
}

export default CoinPage
