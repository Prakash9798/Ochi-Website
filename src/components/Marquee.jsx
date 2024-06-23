import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
  
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className='w-full py-10 bg-[#004D43] rounded-tl-1.5xl rounded-tr-1.5xl'>
      <div className="text border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap overflow-hidden  ">

         <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ ease:"linear",repeat:Infinity,duration:5}} className='text-9xl leading-none font-mono font-semibold uppercase pt-6 pr-20'>We are ochi</motion.h1>
         <motion.h1  initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:5}} className='text-9xl leading-none font-mono font-semibold  uppercase pt-6 pr-20'>We are ochi</motion.h1>
         <motion.h1  initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:5}} className='text-9xl leading-none font-mono font-semibold  uppercase pt-6 pr-20'>We are ochi</motion.h1>
        
      </div>
    </div>
  )
}

export default Marquee
