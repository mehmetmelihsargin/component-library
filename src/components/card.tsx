import React from 'react'
import Star from '../../public/assets/star';
import Orange from '../../public/assets/orange';
import Sales from '../../public/assets/sales';
import View from '../../public/assets/view';
import { useEffect, useState } from 'react';
import { Data } from './data';
import Link from 'next/link';
// const [data, setData] = ([]);

// useEffect (() => {
//     fetch('../components/data')
//     .then((data) => setData(data));
// })

type CardProps = {
    item?: any
}

const Card = ({ item }: CardProps) => {
    return (

        <div>
            <div className='flex sm:flex-row flex-col p-6 gap-6'>
                <img src={item?.image} className='w-full object-cover sm:max-w-[278px]' alt="" />
                <div className='flex flex-col w-full'>
                    <div className='h-8 font-medium text-2xl leading-8 tracking-widest text-[#252B42]'>{item?.title}</div>
                    <div className='flex mt-4 h-6'>
                        <p className='text-sm font-semibold leading-6 tracking-wide text-[#737373]'>By</p>
                        <p className='text-sm font-semibold leading-6 tracking-wider ml-1 text-[#23A6F0]'>Jane Cooper</p>
                        <p className='text-sm font-semibold leading-6 tracking-wide ml-1 text-[#737373]'>in Tech , Products</p>
                    </div>
                    <div className='flex  mt-4'>
                        <Star />
                        <Star />
                        <Star />
                        <Star />
                        <Orange />
                        <p className='ml-[10px] text-sm font-semibold leading-6 tracking-wide text-[#737373]'>10 Reviews</p>
                    </div>
                    <div className='flex items-center w-[71px] h-[34px] gap-[10px] sm:hidden mt-4 rounded-md border border-solid border-gray-300 '>
                        <p className='text-lg font-bold leading-6 tracking-wide'>{item?.amount}</p>
                    </div>
                    <div className='flex mt-4 items-center'>
                        <Sales />
                        <p className='text-sm font-semibold leading-6 tracking-wide ml-[10px] text-[#737373]'>{item?.sales}</p>
                    </div>
                    <div className='flex items-center mt-4 sm:hidden'>
                        <div className='border border-solid border-gray-300 w-9 items-center'>
                            <p className='ml-2 text-xs font-bold leading-7 text-[#737373]'>XL</p>
                        </div>
                        <div className='border border-solid border-gray-300 w-9 items-center ml-2'>
                            <p className='ml-2 text-xs font-bold leading-7 text-[#737373]'>L</p>
                        </div>
                        <div className='border border-solid border-gray-300 w-9 items-center ml-2'>
                            <p className='ml-2 text-xs font-bold leading-7 text-[#737373]'>M</p>
                        </div>
                        <div className='border border-solid border-gray-300 w-9 items-center ml-2'>
                            <p className='ml-2 text-xs font-bold leading-7 text-[#737373]'>S</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col  sm:justify-between sm:items-end w-full'>
                    <div className='hidden sm:flex flex-col items-end'>
                        <div className='text-lg font-bold leading-6 tracking-wide rounded-md flex items-center justify-center h-11 w-[81px] text-white bg-[#40BB15]'>{item.amount}</div>
                        <p className='text-sm font-semibold leading-6 tracking-wide text-[#737373]'>Starting cost</p>
                    </div>
                    <div className='flex justify-center rounded-md h-10 sm:w-32 items-center  bg-[#23A6F0]'>
                        <p className='text-base font-semibold leading-6 text-white sm:hidden'>Select option</p>
                       {/*ÖNEMLİ */} 
                        <Link href={{ pathname: `product/${item.id}` }} className='text-sm font-semibold leading-6 text-white hidden sm:block'>View profile</Link>
                    </div>
                    <div className='flex items-center justify-center mt-6 w-full sm:hidden'>
                        <View />
                        <p className='text-sm font-semibold leading-6 tracking-wide text-[#737373] ml-2 h-6'>Quick View</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Card
