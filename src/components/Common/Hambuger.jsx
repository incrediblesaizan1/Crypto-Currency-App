import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { IconButton } from '@mui/material';
import Button from "../Common/Button"
import { NavLink } from 'react-router-dom';

const Hamburger = () => {
  const [state, setState] = useState(false);

  return (
    <div>
      <IconButton 
      onClick={() => setState(true)}
      >
     <MenuRoundedIcon className='font-semibold text-[var(--grey)] hover:text-[var(--white)] hover:transition-all' />
     </IconButton>
      <Drawer
        anchor="right"
        open={state}
        onClose={() => setState(false)}
      >
        <div className='w-[50vw] bg-[var(--black)] h-full p-6' >
        <NavLink to="/"  className={(e)=>e.isActive?"font-semibold p-[4px] text-[var(--white)] hover:text-[var(--white)] hover:transition-all": "font-semibold p-[4px] text-[var(--grey)] hover:text-[var(--white)] hover:transition-all"}><p>Home</p></NavLink>
        <NavLink to="/compare"  className={(e)=>e.isActive?"font-semibold p-[4px] text-[var(--white)] hover:text-[var(--white)] hover:transition-all": "font-semibold p-[4px] text-[var(--grey)] hover:text-[var(--white)] hover:transition-all"}><p>Compare</p></NavLink>
        <NavLink to="/watchlist"  className={(e)=>e.isActive?"font-semibold p-[4px] text-[var(--white)] hover:text-[var(--white)] hover:transition-all": "font-semibold p-[4px] text-[var(--grey)] hover:text-[var(--white)] hover:transition-all"}><p>WatchList</p></NavLink>
        <NavLink to="/dashboard" className="font-semibold p-[4px] text-[var(--grey)] hover:text-[var(--white)] hover:transition-all relative left-[-17px] "><Button text="Dashboard" /></NavLink>
        </div>
      </Drawer>
    </div>
  );
};

export default Hamburger;
