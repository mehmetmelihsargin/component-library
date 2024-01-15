import React from 'react'

const illustrated = () => {
  return (
    <div className="relative">
      <img
        src="../assets/cover.png"
        alt=""
        className='sm:max-w-[331px] sm:max-h-[452px]'  
      />
      <div className="absolute top-0 w-full h-full flex flex-col justify-end items-end bg-black bg-opacity-25">
        <div className="gap-4 p-7 flex flex-col">
        <p className='text-2xl font-bold md:font-semibold lg:font-bold leading-8 tracking-tighter text-white'>Life Tips From Top Ten Adventure Travelers</p>
        <p className='text-base font-medium md:font-medium lg:font-semibold  tracking-wider text-white'>Slate helps you see how many more days you need to work to reach.</p>
        </div>
        <div className='flex gap-4 mr-40'>
            <p className='text-[#8EC2F2] text-sm font-semibold leading-6 tracking-wider'>Google</p>
            <p className='text-[#8EC2F2] text-sm font-semibold leading-6 tracking-wider'>Trending</p>
            <p className='text-[#8EC2F2] text-sm font-semibold leading-6 tracking-wider'>New</p>
        </div>
      </div>
    </div>
  )
}

export default illustrated