import { motion } from 'framer-motion'
import {  Power4 } from 'gsap';
import React, { useState } from 'react'


function Feature() {
   const [ishovering,sethovering] = useState(false);
   const handleHover=()=>{
      sethovering(true)
   }

   
    return (
        <div className=' w-full py-10 bg-zinc-800'>
            <div className='w-full px-10 border-b-2 pb-6 border-zinc-700'>
                <h1 className='text-8xl font-mono tracking-tight '>Featured Projects</h1>
            </div>
            <div className='px-20'>
                <div className='cards w-full flex gap-10 mt-10 '>
                   
                    <div onMouseEnter={()=>sethovering(true)} onMouseLeave={()=>sethovering(false)} className="cardcontainer relative  w-1/2 h-[75vh]">
                    <h1 className='absolute  text-[#CDEA68] left-full -translate-x-1/2 top-1/2 -translate-y-1/2  z-[9] text-8xl font-mono leading-none tracking-tighter'>
                      <h1 className='absolute flex text-[#CDEA68] overflow-hidden right-full translate-x-1/2 top-1/2 -translate-y-1/2  z-[9] text-8xl font-mono leading-none tracking-tighter'>
                      {"FYDE".split("").map((item,index)=>(
                        <motion.span initial={{y:"100%"}} animate={ishovering ?  {y:"0"} : {y:"100%"}} transition={{ease:[0.22, 1, 0.36, 1],delay: index*.06}} className='inline-block ' >{item}</motion.span>
                      ))}
                        </h1>
                        </h1>
                        <div className=' card w-full h-full rounded-xl overflow-hidden '>
                            <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" srcset="" />
                        </div>
                    </div>
                    <div className="cardcontainer w-1/2  h-[75vh] relative">
                    
                        <div className=' card w-full h-full rounded-xl  overflow-hidden '>
                        <h1 className='absolute flex overflow-hidden  text-[#CDEA68] right-full translate-x-1/2 top-1/2 -translate-y-1/2  z-[9] text-8xl font-mono leading-none tracking-tighter'>
                        {"VISE".split("").map((item,index)=>(
                        <motion.span initial={{y:"100%"}} animate={ishovering ?  {y:"0"} : {y:"100%"}} transition={{ease:[0.22, 1, 0.36, 1],delay: index*.06}} className='inline-block ' >{item}</motion.span>
                      ))}
                        </h1>
                            <img  className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" srcset="" />
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Feature
