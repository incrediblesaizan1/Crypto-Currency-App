import React, { useState } from 'react';
import "../Dashboard/style.css"

const CoinInfo = ({ heading, description }) => {

   const shortDesc = description.slice(0,400) + "<span style='color:var(--grey); cursor:pointer;' > Read More...</span>"
   const longDesc = description  + "<span style='color:var(--grey); cursor:pointer;' > Show Less...</span>"
   const longDesc2 = description 
   const [isExpanded, setIsExpanded] = useState(true);
  return (
    <div className='block w-[95vw] rounded-3xl bg-[var(--darkgrey)] my-5 mx-auto break-words py-4 px-6 text-justify tracking-tight'>
      <h2 className=' text-2xl md:text-3xl font-semibold'>{heading}</h2>
      {description.length > 200?<p 
      onClick={()=>setIsExpanded(!isExpanded)}
      className={`highlight-a pt-3 text-xs sm:text-sm md:text-base ${!isExpanded && "cursor-pointer"}`}
       dangerouslySetInnerHTML={{ __html: isExpanded?shortDesc:longDesc }}
       ></p>:<p 
       onClick={()=>setIsExpanded(!isExpanded)}
       className={`highlight-a pt-3 text-xs sm:text-sm md:text-base ${!isExpanded && "cursor-pointer"}`}
        dangerouslySetInnerHTML={{ __html: longDesc2 }}
        ></p>}
    </div>
  );
};

export default CoinInfo;
