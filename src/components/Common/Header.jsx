import React from 'react';
import Hambuger from './Hambuger';
import Button from './Button';
import { Flag } from '@mui/icons-material';

const Header = () => {
  return (
    <div className="flex justify-between items-center py-6 px-12 bg-[var(--black)] sticky top-0 left-0 z-50">
      <h1 className="relative left-[-35px] md:left-0 lg:left-0 text-3xl md:text-3xl lg:text-3xl">CryptoTracker<span className="text-[var(--blue)]">.</span></h1>



<div>
<div className="hidden justify-end items-center gap-6 md:flex lg:flex ">
        <a href="/" className="font-semibold text-[var(--grey)] hover:text-[var(--white)] hover:transition-all"><p>Home</p></a>
        <a href="/" className="font-semibold text-[var(--grey)] hover:text-[var(--white)] hover:transition-all"><p>Compare</p></a>
        <a href="/" className="font-semibold text-[var(--grey)] hover:text-[var(--white)] hover:transition-all"><p>WatchList</p></a>
        <a href="#"><Button text="Dashboard" /></a>
      </div>
      <div className='sm:flex md:hidden lg:hidden w-full mr-[-50px] '>
       <Hambuger />
      </div>
</div>
     
    </div>
  );
};

export default Header;
