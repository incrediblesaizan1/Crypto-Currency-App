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
  const [isLoading, setIsLoading] = useState(true)
  const [paginatedCoin, setPaginatedCoin] = useState([])
  const [page, setPage] = useState(1)

  const onSearchChange = (e) => {
    setSearch(e.target.value)
  }

  const handlePageChange = (event, value) => {
    setPage(value)
  }

  const filterCoin = coins.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()) || 
    item.symbol.toLowerCase().includes(search.toLowerCase())
  )

  useEffect(() => {
    axios.get(`https://api.coinranking.com/v2/coins?limit=100&x-access-token=coinranking0d42595f0df39d313aa26e81a583600af7574cdbde528344`)
      .then(res => {
        setCoins(res.data.data.coins)
        setIsLoading(false)
      }).catch(error => {
        console.log("Some Error Occurred While Fetching Data", error)
        setIsLoading(false)
      })
  }, [])

  useEffect(() => {
    const filteredCoins = filterCoin

    const indexOfLast = page * 10
    const indexOfFirst = indexOfLast - 10

    setPaginatedCoin(filteredCoins.slice(indexOfFirst, indexOfLast))
  }, [page, search, coins]) 
  return (
    <>
      <Header />
      {isLoading ? <Loader /> : (
        <div>
          <Search onSearchChange={onSearchChange} search={search} />
          <Tabs coins={paginatedCoin} /> 
          { !search && <PaginationControll page={page} handlePageChange={handlePageChange} /> }
        </div>
      )}
    </>
  )
}

export default Dashboard
