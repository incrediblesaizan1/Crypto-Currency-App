import React from 'react'
import Button from "../Common/Button"
import iPhone from "../../assets/iphone.png"
import gradient from "../../assets/gradient.png"
import {motion} from "framer-motion"

const MainComponents = () => {
  return (
    <div className=' flex flex-col md:flex-row lg:flex-row xl:flex-row justify-between w-full items-start py-2 px-12 leading-tight'>
       <div>
      <motion.h1
      initial={{opacity:0 , translateY:30, }}
      animate={{opacity:1, translateY:0,}}
      transition={{duration:1}}
      className=' text-[2.8rem] sm:text-[5rem]  md:text-[4rem] lg:text-[5rem] xl:text-[6rem] margin-0 font-bold text-[var(--white)] text-stroke-1 md:text-stroke-2 lg:text-stroke-2 xl:text-stroke-2 text-stroke-white hover:text-[var(--black)] hover:transition-all hover:duration-200'>Track Crypto</motion.h1>
      <motion.h1
      initial={{opacity:0 , translateY:30, }}
      animate={{opacity:1, translateY:0, }}
      transition={{duration:1, delay:0.5}}
      className=' text-[2.8rem] sm:text-[5rem]  md:text-[4rem] lg:text-[5rem] xl:text-[6rem] margin-0 font-bold text-[var(--blue)]'>Real Time
      <span style={{display: "inline-block",width: "8px", height: "8px",backgroundColor: "var(--blue)",borderRadius: "50%",marginLeft: "5px",}}></span>
      </motion.h1>
      <motion.p
       initial={{opacity:0 , translateY:30, }}
       animate={{opacity:1, translateY:0, }}
       transition={{duration:1, delay:1}}
      className='text-[var(--grey)] text-[1rem]'>Track crypto through a public api in real time. Visit the dashboard to do so!</motion.p>
      <motion.div 
      initial={{opacity:0 , translateX:30, }}
      animate={{opacity:1, translateX:0, }}
      transition={{duration:1, delay:1.5}}
      className='flex justify-start items-center gap-6 mt-8'>
        <Button onclick={()=>{
          window.location.href = "/dashboard"
        }} text="Dashboard" />
        <Button text="Share" outline={true} />
      </motion.div>
       </div>

       <div className=' block my-8 sm:my-0 md:my-0 lg:my-0 xl:my-0 mx-auto w-2/4 relative p-4'>
   <motion.img 
   initial={{y: -10}}
   animate={{y: 10}}
   transition={{
    type:"smooth",
    repeatType: "mirror",
    duration: 2,
    repeat: Infinity
   }}
   src={iPhone} alt="Phone Img" className=' absolute   left-[-20%] sm:left-[15%] min-w-[250px] md:min-w-[250px] md:w-[50%] lg:min-w-[250px] xl:min-w-[300px]   right-0 z-10 ' />
   <img src={gradient} alt="Phone Img" className=' absolute left-[15%] sm:left-[27%]  min-w-[200px] top-20 md:min-w-[200px] md:top-20 lg:min-w-[200px] xl:min-w-[250px] w-[40%] right-0 xl:top-24 ' />
       </div>
    </div>
  )
}

export default MainComponents
