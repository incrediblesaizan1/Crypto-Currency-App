import React from 'react'
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import { motion } from "framer-motion";
import { Tooltip } from "@mui/material";
import {ConvertNumber} from "../../functions/ConvertNumber"
import { NavLink } from 'react-router-dom';

const List = ({coin, i}) => {

  return (

     <NavLink to={`/coin/${coin.id}`} ><motion.div
    initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className='ml-[-0.94rem] m-2 px-4  w-[98vw] h-12 md:h-20 lg:h-28 xl:h-32 hover:bg-[var(--darkgrey)] rounded-2xl  sm:rounded-3xl flex items-center gap-4 '
      >

<Tooltip title={`${coin.name} logo`}>
      <span>
        <img className="w-6 md:w-8 lg:w-12 xl:w-16" src={coin.image} alt="coin image" />
      </span>
      </Tooltip>


      <Tooltip title={`Symbol`}>
      <div className=" ml-1 sm:ml-6 md:ml-8 lg:ml-10 xl:ml-12 w-10 sm:w-12 md:w-16 lg:w-20 xl:w-24">
        <div className=" text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl uppercase text-[var(--white)] font-semibold">
          {coin.symbol}
        </div>

        <Tooltip title={`Name`}>
        <div className=" text-[8px] sm:text-[10px] md:text-sm lg:text-sm xl:text-sm text-[var(--grey)] mt-[-6px] sm:mt-[-3px]">{coin.name}</div>
        </Tooltip>
      </div>
 </Tooltip>


 <Tooltip title={`Price Change In 24 Hours`}>
          {coin.price_change_percentage_24h > 0 ? (
            <div className="flex my-4 mx-2 sm:mx-16 md:mx-24 lg:mx-36 w-50  justify-start gap-4 items-center">
              <div className="border-2 border-solid border-[var(--green)] hover:bg-[var(--green)] hover:text-white cursor-pointer rounded-3xl py-1 md:py-2 px-2 md:px-6 text-center font-[600] text-xs sm:text-sm md:text-base text-[var(--green)]">
                +{coin.price_change_percentage_24h.toFixed(2)}%
              </div>
              <div className=" hidden border-2 border-solid border-[var(--green)] hover:bg-[var(--green)] hover:text-white  rounded-full h-10 w-10 md:flex justify-center items-center text-[var(--green)] ">
                <TrendingUpIcon />
              </div>
            </div>
        ) : (
          <div className="flex my-4 mx-2 sm:mx-16 md:mx-24 lg:mx-36 w-50  justify-start gap-4 items-center">
            <div className="border-2 border-solid border-[var(--red)] hover:bg-[var(--red)] hover:text-white cursor-pointer rounded-3xl py-1 md:py-2 px-2 md:px-6 text-center font-[600] text-xs sm:text-sm md:text-base text-[var(--red)]">
              {coin.price_change_percentage_24h.toFixed(2)}%
            </div>
            <div className=" hidden border-2 border-solid border-[var(--red)] hover:bg-[var(--red)] hover:text-white  rounded-full h-10 w-10 md:flex justify-center items-center text-[var(--red)] ">
              <TrendingDownIcon />
            </div>
          </div>
        )}
        </Tooltip>


        <Tooltip title={` Current Price `}>
      {coin.price_change_percentage_24h > 0 ? (
        <div className=" md:m-4 lg:m-6 w-20 sm:w-24 md:w-32 lg:w-40">
          <h3 className="text-[var(--green)] text-xs sm:text-base md:text-xl lg:text-3xl w-10 sm:w-24 md:w-32 lg:w-44 text-start font[600]">
            ₹{coin.current_price.toLocaleString()}
          </h3>
        </div>
      ) : (
        <div className=" md:m-4 lg:m-6 w-20 sm:w-24 md:w-32 lg:w-40">
          <h3 className="text-[var(--red)] text-xs sm:text-base md:text-xl lg:text-3xl w-10 sm:w-24 md:w-32 lg:w-44 text-start font[600]">
            ₹{coin.current_price.toLocaleString()}
          </h3>
        </div>
      )}
      </Tooltip>



    <div className='hidden lg:flex md:ml-6 md:gap-16'>

    <Tooltip title={` Total Volume `}>
      <div>
        <p className='text-[var(--white)] w-16 sm:w-24 lg:w-56 text-start text-[16px] md:text-[20px] font-math'>₹{coin.total_volume.toLocaleString()}</p>
      </div>
      </Tooltip>

      <Tooltip title={` Market Cap `}>
        <div className="relative hidden lg:block">
          <p className=" text-[var(--white)] w-56 text-start text-[20px] font-math">
            ₹{coin.market_cap.toLocaleString()}
          </p>
        </div>
        </Tooltip>

    </div>



    <Tooltip title={` Total Volume `}>
      <div className='hidden sm:flex lg:hidden'>
        <p className='text-[var(--white)] w-16 sm:w-24 lg:w-56 text-start text-[16px] md:text-[20px] font-math'>₹{ConvertNumber(coin.total_volume)}</p>
      </div>
      </Tooltip>

          
    <Tooltip title={` Market Cap `}>
    <div className='flex lg:hidden'>
    <p className='text-[var(--white)] w-16 sm:w-24 lg:w-56 text-start text-[16px] md:text-[20px] font-math'>₹{ConvertNumber(coin.market_cap)}</p>
        </div>
        </Tooltip>

    </motion.div></NavLink>
  )
}

export default List
