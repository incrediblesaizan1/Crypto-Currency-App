import React from 'react';
import Hambuger from './Hambuger';
import Button from './Button';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className="flex justify-between items-center py-6 px-12 backdrop-blur-sm sticky top-0 left-0 z-50">
       <NavLink to={`/dashboard`} ><h1 className="relative left-[-35px] md:left-0 lg:left-0 text-3xl md:text-3xl lg:text-3xl">CryptoTracker<span className="text-[var(--blue)]">.</span></h1></NavLink>
<div>
<div className="hidden justify-end items-center gap-6 md:flex lg:flex ">
        <NavLink to="/"  className={(e)=>e.isActive?"font-semibold text-[var(--white)] hover:text-[var(--white)] hover:transition-all": "font-semibold text-[var(--grey)] hover:text-[var(--white)] hover:transition-all"}><p>Home</p></NavLink>
        <NavLink to="/dashboard"><Button text="Dashboard" /></NavLink>
      </div>
      <div className='sm:flex md:hidden lg:hidden w-full mr-[-50px] '>
       <Hambuger />
      </div>
</div>
     
    </div>
  );
};

export default Header;
