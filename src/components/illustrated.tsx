import React from 'react'

const illustrated = () => {
  return (
    <div className="relative">
      <img
        src="../assets/cover.png"
        alt=""
        className=' sm:hidden w-full'  
      />
      <img src="../assets/side.png" 
         alt=""
         className='w-full hidden sm:block ' />
      <div className="absolute top-0 w-full  flex flex-col justify-end  sm:justify-end sm:items-start  bg-gradient-to-b from-transparent via-[#383838] opacity-85 to-[#383838] h-full">
        <div className="gap-4 p-7 flex flex-col sm:p-6 h-[207px]">
        <p className='text-2xl font-bold md:font-semibold lg:font-bold leading-8 tracking-tighter text-white'>Life Tips From Top Ten Adventure Travelers</p>
        <p className='text-base font-medium md:font-medium lg:font-semibold  tracking-wider text-white'>Slate helps you see how many more days you need to work to reach.</p>
        <div className='flex gap-4'>
            <p className='text-[#8EC2F2] text-sm font-semibold leading-6 tracking-wider sm:hidden'>Google</p>
            <p className='text-white text-sm font-semibold leading-6 tracking-wider hidden sm:block'>Google</p>
            <p className='text-[#8EC2F2] text-sm font-semibold leading-6 tracking-wider sm:hidden'>Trending</p>
            <p className='text-white text-sm font-semibold leading-6 tracking-wider hidden sm:block'>Trending</p>
            <p className='text-[#8EC2F2] text-sm font-semibold leading-6 tracking-wider sm:hidden'>New</p>
            <p className='text-white text-sm font-semibold leading-6 tracking-wider hidden sm:block'>New</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default illustrated