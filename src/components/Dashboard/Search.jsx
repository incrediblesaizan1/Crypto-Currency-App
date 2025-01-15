import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';

const Search = ({search, onSearchChange}) => {
  return (
    <div className='flex justify-start items-center gap-6 py-4 px-8 text-[var(--grey)] bg-[var(--darkgrey)] w-[80%] m-4 mx-auto rounded-[3rem]'>
<SearchIcon />
<input placeholder='Search' value={search} onChange={(e)=>onSearchChange(e)}  type="text" className='bg-[var(--darkgrey)] w-full text-xl text-[var(--grey)] border-none outline-none' />
    </div>
  )
}

export default Search
