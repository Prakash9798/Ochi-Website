import React from 'react'

function Cards() {
  return (
    <div className='w-full h-screen bg-zinc-900 flex items-center px-32 gap-5'>
      <div className='cardContainer w-1/2 h-[50vh]'>
      <div className='Card relative rounded-xl w-full h-full bg-[#004D43] flex items-center justify-center'>
        <img className='w-32' src="	https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" srcset="" />
        <button className='absolute px-5 py-1 rounded-full border-2 left-10 bottom-10'>&copy;2019</button>
      </div>
      </div>
  
      <div className='cardContainer w-1/2 h-[50vh] flex gap-5'>
      <div className='Card relative w-1/2 h-full bg-[#212121] rounded-xl flex items-center justify-center'>
      <img className='w-32' src="	https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" srcset="" />
      <button className='absolute px-5 py-1 rounded-full border-2 left-10 bottom-10'>&copy;2019</button>
      </div>
      <div className='Card relative w-1/2 h-full bg-[#212121] rounded-xl flex items-center justify-center'>
      <img className='w-32' src="	https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" srcset="" />
      <button className='absolute px-5 py-1 rounded-full border-2 left-10 bottom-10'>&copy;2019</button>
      </div>
      </div>
      </div>
     
  )
}

export default Cards
