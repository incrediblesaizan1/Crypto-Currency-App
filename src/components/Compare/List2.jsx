import React from 'react'
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import { motion } from "framer-motion";
import { Tooltip } from "@mui/material";
import {ConvertNumber} from "../../functions/ConvertNumber"
import { NavLink } from 'react-router-dom';
import "./../Dashboard/style.css"

const List = ({coin, i}) => {

  return (

     <NavLink to={`/coin/${coin.uuid}`} ><motion.div
    initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className=' m-2 px-2  w-[94vw] h-12 md:h-14 bx lg:h-20 xl:h-22  hover:bg-[var(--darkgrey)] rounded-2xl  sm:rounded-3xl flex items-center justify-start xl:gap-28 '
      >

<Tooltip title={`${coin.name} logo`}>
      <span className='w-16 sm:w-20'>
        <img className="w-8 md:w-8 lg:w-12 xl:w-16" src={coin.iconUrl} alt="coin image" />
      </span>
      </Tooltip>


      <Tooltip title={`Symbol`}>
      <div className=" w-16 sm:w-24 ">
        <div className=" text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl uppercase text-[var(--white)] font-semibold">
          {coin.symbol}
        </div>

        <Tooltip title={`Name`}>
        <div className=" text-[7px] sm:text-[10px] md:text-sm lg:text-sm xl:text-sm text-[var(--grey)] mt-[-3px] sm:mt-[-3px]">{coin.name}</div>
        </Tooltip>
      </div>
 </Tooltip>


 <Tooltip title={`Price Change In 24 Hours`}>
          {coin.change > 0 ? (
            <div className="flex my-4 w-24 sm:w-36 md:w-44 gap-2 justify-start  items-center">
              <div className="border-2 border-solid border-[var(--green)] hover:bg-[var(--green)] hover:text-white cursor-pointer rounded-3xl py-1 md:py-2 px-2 md:px-6 text-center font-[600] text-xs sm:text-sm md:text-base text-[var(--green)]">
                +{coin.change}%
              </div>
              <div className=" hidden border-2 w-24 mr-6  border-solid border-[var(--green)] hover:bg-[var(--green)] hover:text-white  rounded-full h-10 md:flex justify-center items-center text-[var(--green)] ">
                <TrendingUpIcon />
              </div>
            </div>
        ) : (
          <div className="flex my-4  w-24 sm:w-36 md:w-44 gap-2 justify-start items-center">
            <div className="border-2 border-solid border-[var(--red)] hover:bg-[var(--red)] hover:text-white cursor-pointer rounded-3xl py-1 md:py-2 px-2 md:px-6 text-center font-[600] text-xs sm:text-sm md:text-base text-[var(--red)]">
              {coin.change}%
            </div>
            <div className=" hidden border-2  w-24 mr-6 border-solid border-[var(--red)] hover:bg-[var(--red)] hover:text-white  rounded-full h-10  md:flex justify-center items-center text-[var(--red)] ">
              <TrendingDownIcon />
            </div>
          </div>
        )}
        </Tooltip>


        <Tooltip title={` Current Price `}>
      {coin.change > 0 ? (
        <div className=" w-24 sm:w-32 ml-4 md:w-44 ">
          <h3 className="text-[var(--green)] text-xs sm:text-base md:text-xl lg:text-3xl  text-start font[600]">
                ${Number(coin.price).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </h3>
        </div>
      ) : (
        <div className="w-24 sm:w-32 md:w-44 ">
          <h3 className="text-[var(--red)] text-xs sm:text-base md:text-xl lg:text-3xl text-start font[600]">
                ${Number(coin.price).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </h3>
        </div>
      )}
      </Tooltip>



    <div className='hidden lg:flex md:gap-32 '>

    <Tooltip title={` Total Volume `}>
      <div>
        <p className='text-[var(--white)] w-16  text-start text-[16px] md:text-[20px] font-math'>${Number(coin["24hVolume"] || 0).toLocaleString()}</p>
      </div>
      </Tooltip>

      <Tooltip title={` Market Cap `}>
        <div className="relative hidden  lg:block">
          <p className=" text-[var(--white)]  text-start text-[20px] font-math">
          ${Number(coin.marketCap || 0).toLocaleString()}
          </p>
        </div>
        </Tooltip>

    </div>



    <Tooltip title={` Total Volume `}>
      <div className='hidden sm:flex sm:w-36 lg:hidden'>
        <p className='text-[var(--white)]  text-start text-[16px] md:text-[20px] font-math'>${ConvertNumber(coin["24hVolume"])}</p>
      </div>
      </Tooltip>

          
    <Tooltip title={` Market Cap `}>
    <div className='flex lg:hidden'>
    <p className='text-[var(--white)]  text-start text-[16px] md:text-[20px] font-math'>${ConvertNumber(coin.marketCap)}</p>
        </div>
        </Tooltip>

    </motion.div></NavLink>
  )
}

export default List
