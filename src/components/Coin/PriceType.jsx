import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useState } from 'react';

export default function ColorToggleButton() {
  const [alignment, setAlignment] = useState('price');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
    sx={{
        background: 'linear-gradient(315deg, #000000 0%, #212022 94%)',
        color: 'white',
    }}
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
    >
      <ToggleButton sx={{color: "white", height:{xs:"40px",md:"50px"} ,width:{xs:"90px", md: "150px"}}} value="price">PRICE</ToggleButton>
      <ToggleButton sx={{color: "white", height:{xs:"40px",md:"50px"} ,width:{xs:"90px", md: "150px"}}} value="android">MKT CAP</ToggleButton>
      <ToggleButton sx={{color: "white", height:{xs:"40px",md:"50px"} ,width:{xs:"90px", md: "150px"}}} value="ios">VOLUME</ToggleButton>
    </ToggleButtonGroup>
  );
}