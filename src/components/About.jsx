import React from 'react'

function About() {
    return (
        <div className='w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'>
            <h1 className='font-mono text-[3vw] leading-[3vw]'>Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>
            <div className='w-full flex gap-20 mt-10 pt-10  border-t-[1px] border-[#c1d66c]'>
                <div className='w-1/2 '>
                 <h1 className='text-4xl'>Our Approach:</h1>
                 <button className='px-5  flex items-center gap-5 py-3 mt-5 ml-2 bg-zinc-900 rounded-full text-white'>Read More
                      <div className='w-2 h-2  bg-zinc-100 rounded-full'></div>

                 </button>
                </div>
                <div className='w-1/3 h-[60vh] bg-[#978776] rounded-3xl '>
                   <img className='h-full w-full bg-cover bg-center' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="" srcset="" />
                </div>
            </div>
        </div>
    )
}

export default About
