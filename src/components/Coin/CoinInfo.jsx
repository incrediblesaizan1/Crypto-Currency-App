import React from 'react';
import "../Dashboard/style.css"

const CoinInfo = ({ heading, description }) => {
  return (
    <div className='block w-[95vw] rounded-3xl bg-[var(--darkgrey)] my-5 mx-auto break-words py-4 px-6 text-left'>
      <h2 className='text-3xl font-semibold'>{heading}</h2>
      <p className='highlight-a pt-3' dangerouslySetInnerHTML={{ __html: description }}></p>
    </div>
  );
};

export default CoinInfo;
