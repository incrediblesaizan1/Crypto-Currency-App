import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';

export default function SelectDays({days, handleDaysChange}) {
 

  return (
    <div
      sx={{
        height: '2.5rem',
        minWidth: 120,
        color: 'var(--white)',
        background: 'linear-gradient(210deg, #000000 0%, #150c1d 94%);',
      }}
    >
      <FormControl sx={{
    width: {
      xs: "93px", 
      sm: "100px", 
      md: "120px", 
    }
  }}>
        <InputLabel
          sx={{
            color: 'var(--white)', // Default color
            '&.Mui-focused': {
              color: 'var(--blue)', // Blue on focus
            },
            '&:hover': {
              color: 'var(--blue)', // Blue on hover
            },
          }}
          id="demo-simple-select-label"
        >
          Days
        </InputLabel>
        <Select
          sx={{
            color: 'var(--white)',
            background: 'linear-gradient(315deg, #000000 0%, #212022 94%)',
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: 'var(--white)', // Default border color
              borderWidth: '2px',
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: 'var(--blue)', // Blue border on hover
            },
            '&:hover + label': {
              color: 'var(--blue)', // Make the label blue when hovering over the input
            },
          }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={days}
          label="Days"
          onChange={handleDaysChange}
        >
          <MenuItem value={"7d"}>7 Days</MenuItem>
          <MenuItem value={"30d"}>30 Days</MenuItem>
            <MenuItem value={"3m"}>3 Months</MenuItem>
          <MenuItem value={"1y"}>1 Year</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
