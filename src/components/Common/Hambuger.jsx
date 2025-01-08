import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { IconButton } from '@mui/material';
import Button from "../Common/Button"

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
        <a href="/" className="font-semibold p-[4px]  text-[var(--grey)] hover:text-[var(--white)] hover:transition-all"><p>Home</p></a>
        <a href="/" className="font-semibold p-[4px]  text-[var(--grey)] hover:text-[var(--white)] hover:transition-all"><p>Compare</p></a>
        <a href="/" className="font-semibold p-[4px] text-[var(--grey)] hover:text-[var(--white)] hover:transition-all"><p>WatchList</p></a>
        <a href="/" className="font-semibold p-[4px] text-[var(--grey)] hover:text-[var(--white)] hover:transition-all relative left-[-17px] "><Button text="Dashboard" /></a>
        </div>
      </Drawer>
    </div>
  );
};

export default Hamburger;
