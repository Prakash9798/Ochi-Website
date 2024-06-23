import { motion } from 'framer-motion';
import React from 'react'
import { FaLongArrowAltUp } from "react-icons/fa";
function LandingPage() {
 
  return (
    <div data-scroll data-scroll-speed="-.3" className='w-full h-screen bg-zinc-900 border-t-2'>
      <div className='text-structure mt-40 px-20'>
           {["We Create","Eye Opening","Presentations"].map((item,index)=>(
             <div className="masker">
                <div className='w-fit flex'>
                    {index===1 && (<motion.div initial={{width:0}} animate={{width:"9vw"}} transition={{ease:[0.76, 0, 0.24, 1],duration:1}} className='w-[9vw] h-[6vw] 
                    relative top-[1vw] mr-3 '> <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQF40ydSAUKhbnwHY4iudDqvmTnEWCmXEAO6ZHojpbWW-HWH2Ji" alt="" srcset="" /></motion.div>)}
                
             <h1 className="flex items-center uppercase text-[9vw] h-full leading-[9vw] tracking-tighter font-semibold"> {item}</h1>
         </div>
         </div>
           ))}
      
       
       
      </div>
      <div className=' border-t-2 border-zinc-800 mt-3 flex justify-between items-center py-5 px-20'>
        
      {["For Public and Private Companies","From the First Pitch to IPO"].map((item,index)=>(
     <p className='text-md font-light tracking-tighter leading-none'>{item}</p>
       ))}
       <div className="start flex items-center gap-3">
        
        <div className=' px-5 py-2 border-[2px] border-zinc-800 rounded-full font-light text-md  uppercase'>
          start the project
          
        </div>
          <div className='w-10 h-10 flex items-center justify-center border-[2px] border-zinc-800  rounded-full'>
            <span className='rotate-[45deg]'>
            <FaLongArrowAltUp />
            </span>
            </div>
       </div>
      </div>
    </div>
  )
}

export default LandingPage
