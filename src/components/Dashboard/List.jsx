import React from "react";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import { motion } from "framer-motion";
import { Tooltip } from "@mui/material";

const List = ({ coin, i }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className=" px-12 hover:bg-[var(--darkgrey)] rounded-3xl flex items-center gap-4 h-32  w-[98vw]"
    >
      
      <Tooltip title={`${coin.name} logo`}>
      <span>
        <img className="w-16" src={coin.image} alt="coin image" />
      </span>
      </Tooltip>

      <Tooltip title={`Symbol`}>
      <div className=" ml-12 w-24">
        <div className="text-3xl uppercase text-[var(--white)] font-semibold">
          {coin.symbol}
        </div>

        <Tooltip title={`Name`}>
        <div className="text-sm text-[var(--grey)] mt-[-3px]">{coin.name}</div>
        </Tooltip>
      </div>
 </Tooltip>


 <Tooltip title={`Price Change In 24 Hours`}>
        {coin.price_change_percentage_24h > 0 ? (
        <div className="flex my-4 mx-36 w-40  justify-start gap-4 items-center">
          <div className="border-2 border-solid border-[var(--green)] hover:bg-[var(--green)] hover:text-white cursor-pointer rounded-3xl py-2 px-6 text-center font-[600] text-base text-[var(--green)]">
            {coin.price_change_percentage_24h.toFixed(2)}%
          </div>
          <div className="border-2 border-solid border-[var(--green)] hover:bg-[var(--green)] hover:text-white  rounded-full h-10 w-10 flex justify-center items-center text-[var(--green)] ">
            <TrendingUpIcon />
          </div>
        </div>
      ) : (
        <div className="flex my-4 mx-36 w-40  justify-start gap-4 items-center">
          <div className="border-2 hover:bg-[var(--red)] hover:text-white border-solid border-[var(--red)] rounded-3xl py-2 px-6 text-center font-[600] text-base text-[var(--red)]">
            {coin.price_change_percentage_24h.toFixed(2)}%
          </div>
          <div className="border-2 hover:bg-[var(--red)] hover:text-white border-solid border-[var(--red)] rounded-full h-10 w-10 flex justify-center items-center text-[var(--red)]">
            <TrendingDownIcon />
          </div>
        </div>
      )}
      </Tooltip>

      <Tooltip title={` Current Price `}>
      {coin.price_change_percentage_24h > 0 ? (
        <div className="m-6 w-40">
          <h3 className="text-[var(--green)] text-2xl w-44 text-start font[600]">
            ₹{coin.current_price.toLocaleString()}
          </h3>
        </div>
      ) : (
        <div className="m-6 w-40">
          <h3 className="text-[var(--red)] text-2xl w-44 text-start font[600]">
            ₹{coin.current_price.toLocaleString()}
          </h3>
        </div>
      )}
      </Tooltip>

      <div className="flex ml-6 gap-16">

      <Tooltip title={` Total Volume `}>
        <div className="relative">
         
          <p className="  text-[var(--white)] w-56 text-start text-[20px] font-math">
            ₹{coin.total_volume.toLocaleString()}
          </p>
        </div>
 </Tooltip>

 <Tooltip title={` Market Cap `}>
        <div className="relative">
         
          <p className=" text-[var(--white)] w-56 text-start text-[20px] font-math">
            ₹{coin.market_cap.toLocaleString()}
          </p>
        </div>
        </Tooltip>
      </div>
    </motion.div>
  );
};

export default List;
