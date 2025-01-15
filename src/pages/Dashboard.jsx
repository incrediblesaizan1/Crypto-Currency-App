import React, { useEffect, useState } from 'react'
import Header from '../components/Common/Header'
import Loader from '../components/Common/Loader'
import Tabs from '../components/Dashboard/Tabs'
import axios from 'axios'
import Search from '../components/Dashboard/Search'
import "../components/Dashboard/style.css"
import PaginationControll from "../components/Dashboard/Pagination"

const Dashboard = () => {
const [search, setSearch] = useState("")
  const [coins, setCoins] = useState([])
  const [paginatedCoin, setPaginatedCoin] = useState([])
   const [currency, setCurrency] = useState("inr")
    const [page, setPage] = useState(1)
    const [isLoading, setIsLoading] = useState(true)

    const handlePageChange = (event, value) =>{
      setPage(value)
      let previousIndex = (value - 1) * 10
      setPaginatedCoin(coins.slice(previousIndex, previousIndex + 10))
    }

  const onSearchChange = (e) =>{
    setSearch(e.target.value)
  }

  const filterCoin = coins.filter((item)=>(
    item.name.toLowerCase().includes(search.toLowerCase()) || item.symbol.toLowerCase().includes(search.toLowerCase())
  ))
 
 useEffect(() => {
   axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=250&page=1&sparkline=false`)
  .then(res => {
    setCoins(res.data)
    setPaginatedCoin(res.data.slice(0, 10))
    setIsLoading(false)
  }).catch(error =>{
    console.log("Some Error Occured While Fetching Data", error)
    setIsLoading(false)

  })
 }, [])
 

  return (
   <>
    <Header />
   {isLoading?<Loader />: <div>
      < Search onSearchChange={onSearchChange} search={search} />
      <Tabs coins={search?filterCoin:paginatedCoin} />
     { !search && <PaginationControll page={page} handlePageChange={handlePageChange} />}
    </div>}
   </>
  )
}

export default Dashboard
