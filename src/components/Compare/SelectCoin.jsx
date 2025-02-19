import { FormControl, MenuItem, Select } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const SelectCoin = ({crypto1,crypto2, handleCoinChange}) => {

    const [allCoin, setAllCoin] = useState([]) 
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        axios.get(`https://api.coinranking.com/v2/coins?limit=100&x-access-token=coinranking0d42595f0df39d313aa26e81a583600af7574cdbde528344`)
          .then(res => {
            setAllCoin(res.data.data.coins)
            setIsLoading(false)
          }).catch(error => {
            console.log("Some Error Occurred While Fetching Data", error)
            setIsLoading(false)
          })
    }, [])


  return (
    <div className='flex flex-row md:flex-row gap-4 md:gap-4 items-center text-white p-4'>

        <div className='flex flex-col items-start'>
            <p className="text-sm font-semibold">Crypto 1</p>
            <FormControl sx={{ width: 158 }}>
                <Select
                    sx={{
                        color: 'var(--white)',
                        background: 'linear-gradient(315deg, #000000 0%, #212022 94%)',
                        '& .MuiOutlinedInput-notchedOutline': {
                            borderColor: 'var(--white)', 
                            borderWidth: '2px',
                        },
                        '&:hover .MuiOutlinedInput-notchedOutline': {
                            borderColor: 'var(--blue)', 
                        },
                    }}
                    value={crypto1}
                    onChange={(e)=> handleCoinChange(e, false)}
                >
                    {!isLoading && allCoin.filter((coin)=> coin.uuid !== crypto2).map((coin) => (
                        <MenuItem key={coin.uuid} value={coin.uuid}><img src={coin.iconUrl} className='w-6 mr-3 inline' alt="img" />{coin.name}</MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>

        <div className='flex flex-col items-start'>
            <p className="text-sm font-semibold">Crypto 2</p>
            <FormControl sx={{ width: 160 }}>
                <Select
                    sx={{
                        color: 'var(--white)',
                        background: 'linear-gradient(315deg, #000000 0%, #212022 94%)',
                        '& .MuiOutlinedInput-notchedOutline': {
                            borderColor: 'var(--white)', 
                            borderWidth: '2px',
                        },
                        '&:hover .MuiOutlinedInput-notchedOutline': {
                            borderColor: 'var(--blue)', 
                        },
                    }}
                    value={crypto2}
                    onChange={(e) => handleCoinChange(e, true)}
                >
                    {!isLoading && allCoin.filter((coin)=> coin.uuid !== crypto1).map((coin) => (
                        <MenuItem key={coin.uuid} value={coin.uuid}><img src={coin.iconUrl} className='w-6 mr-3 inline' alt="img" />{coin.name}</MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
      
    </div>
  )
}

export default SelectCoin
