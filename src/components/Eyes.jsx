import React, { useEffect, useState } from 'react'

function Eyes() {
    const [rotate, setRotate] = useState(0);

  useEffect(()=>{
    window.addEventListener("mousemove",(e)=>{
    let mousex= e.clientX;
    let mousey= e.clientY

    let deltax= mousex- window.innerWidth/2;
    let deltay= mousey- window.innerWidth/2;

    var angle =   Math.atan2(deltay,deltax) *(180/Math.PI);
    setRotate(angle)
    })
  })
  return (
    <div className='w-full h-screen overflow-hidden '>
      <div data-scroll data-scroll-speed="-.7" className=' relative w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")]'>
      <div className='absolute flex gap-8 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
       <div className='w-[13vw] h-[13vw] bg-zinc-100 rounded-full flex items-center justify-center'>
        <div className='w-1/2 h-1/2 bg-zinc-900 rounded-full  relative '>
          <div  style={{ transform:`translate(-50%,-50%) rotate(${rotate}deg)`}} className='line  w-full h-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                <div className='w-8 h-8 rounded-full bg-zinc-100'></div>
          </div>
      
        </div>
       </div>
       <div className='w-[13vw] h-[13vw] bg-zinc-100 rounded-full flex items-center justify-center'>
       <div className='w-1/2 h-1/2 bg-zinc-900 rounded-full relative '>
        
       <div  style={{ transform:`translate(-50%,-50%) rotate(${rotate}deg)`}}className='line  w-full h-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                <div className='w-8 h-8 rounded-full bg-zinc-100'></div>
          </div>
       </div>
       </div>
      </div>
      </div>
    </div>
  )
}

export default Eyes
