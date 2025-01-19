import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useState } from 'react';

export default function TogglePriceType({priceType,handlePriceTypeChange}) {
 

  return (
    <ToggleButtonGroup
    sx={{
        background: 'linear-gradient(315deg, #000000 0%, #212022 94%)',
        color: 'white',
    }}
      color="primary"
      value={priceType}
      exclusive
      onChange={handlePriceTypeChange}
      aria-label="Platform"
    >
      <ToggleButton sx={{color: "white", height:{xs:"40px",md:"50px"} ,width:{xs:"90px", md: "150px"}}} value="prices">PRICE</ToggleButton>
      <ToggleButton sx={{color: "white", height:{xs:"40px",md:"50px"} ,width:{xs:"90px", md: "150px"}}} value="market_caps">MKT CAP</ToggleButton>
      <ToggleButton sx={{color: "white", height:{xs:"40px",md:"50px"} ,width:{xs:"90px", md: "150px"}}} value="total_volumes">VOLUME</ToggleButton>
    </ToggleButtonGroup>
  );
}