import React from "react";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';

const Grid = ({ coin, i }) => {
  return (
    <div className={` ${coin.price_change_percentage_24h > 0 ?"hover:border-2 hover:border-solid hover:border-[var(--green)]":"hover:border-2 hover:border-solid hover:border-[var(--red)]"} w-[342px]  h-[320px] bg-[var(--darkgrey)] border-2 border-solid border-[var(--darkgrey)] rounded-xl`} >
      <div className="flex m-6 justify-start items-center gap-4">
        <img className="h-14 w-14" src={coin.image} alt={coin.logo} />
        <div className="flex flex-col">
          <p className="text-[var(--white)] uppercase font-[600] text-lg m-0">
            {coin.symbol}
          </p>
          <p className="text-[var(--grey)] uppercase font-light text-base m-0">
            {coin.name}
          </p>
        </div>
      </div>

      
      { coin.price_change_percentage_24h > 0 ?(
        <div className="flex my-4 mx-6  justify-start gap-4 items-center">
        <div className="border-2 border-solid border-[var(--green)] hover:bg-[var(--green)] hover:text-white cursor-pointer rounded-3xl py-1 px-5 text-center font-[600] text-base text-[var(--green)]">
        {coin.price_change_percentage_24h.toFixed(2)}% 
        </div> 
        <div className="border-2 border-solid border-[var(--green)] hover:bg-[var(--green)] hover:text-white  rounded-full h-8 w-8 flex justify-center items-center text-[var(--green)] ">
        <TrendingUpIcon />
        </div>
        </div>):(
            <div className="flex my-4 mx-6  justify-start gap-4 items-center">
            <div className="border-2 hover:bg-[var(--red)] hover:text-white border-solid border-[var(--red)] rounded-3xl py-1 px-5 text-center font-[600] text-base text-[var(--red)]">
            {coin.price_change_percentage_24h.toFixed(2)}% 
            </div>
            <div className="border-2 hover:bg-[var(--red)] hover:text-white border-solid border-[var(--red)] rounded-full h-8 w-8 flex justify-center items-center text-[var(--red)]">
            <TrendingDownIcon />
            </div>
            </div>
        )}
       { coin.price_change_percentage_24h > 0 ?(
    <div className="m-6">
        <h3 className="text-[var(--green)] text-xl font[600]">₹{coin.current_price.toLocaleString()}</h3>
        </div>):(
            <div className="m-6">
                <h3 className="text-[var(--red)] text-xl font[600]">₹{coin.current_price.toLocaleString()}</h3>
                </div>
        )}
        <div className="relative bottom-1">
         <p className=" absolute top-1 left-4 text-[var(--grey)] text-sm font-[500]">Total Volume : ₹{coin.total_volume.toLocaleString()}</p>
         <p className="absolute top-8 left-4 text-[var(--grey)] text-sm font-[500]">Market Cap : ₹{coin.market_cap.toLocaleString()}</p>
        </div>
      </div>
  );
}

export default Grid;
