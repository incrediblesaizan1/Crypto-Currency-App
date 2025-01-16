import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/Common/Header'
import Loader from '../components/Common/Loader'
import {ConvertObject} from "../functions/ConvertObject"
import axios from 'axios'
import List from '../components/Dashboard/List'

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

  console.log(coin)
  

  return (
    <div>
      <Header />
      <div className=' mx-auto pl-3 rounded-3xl bg-[var(--darkgrey)] w-[96vw]'>
      {isLoading? <Loader />: <List  coin={coin} />}
      </div>
    </div>
  )
}

export default CoinPage
