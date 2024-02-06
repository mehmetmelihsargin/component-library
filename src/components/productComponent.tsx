import React from 'react'
import Rating from '../../public/assets/rating'
import Color from '../../public/assets/Color'
import Count from '../../public/assets/Count'
import Wishlist from '../../public/assets/Wishlist'
import Social from '../../public/assets/Social'

const ProductComponent = () => {
    return (
        <div className='flex'>
            <div className='flex flex-col px-20 mt-[200px] gap-6'>
                <p className='font-semibold text-4xl line-[56px]'>Meryl Lounge Chair</p>
                <div className='flex justify-between '>
                    <p className='font-medium text-24 leading-[32px] tracking-[0.15px]'>$149.99</p>
                    <div>
                        <Rating />
                    </div>
                </div>
                <p className='font-normal text-base leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste assumenda rerum delectus tempora odio iure nulla eveniet nemo. Iusto consectetur eius cum quia ipsam ad minus numquam eos, soluta error!</p>
                <div>
                    <Color />
                </div>
                <div className='flex justify-between w-[348px]'>
                    <Count />
                    {/* <div className='flex justify-center rounded-sm h-12 w-40 items-center border border-[#A2A3B1] text-white'>count</div> */}
                    <button className='flex justify-center rounded-sm h-12 w-40 items-center bg-[#3AA39F] text-white'>Add to Cart</button>
                </div>
                <div className='flex w-[430px] justify-between'>
                    <p className='font-normal text-base leading-6'>Free 3-5 day shipping</p>
                    <p className='font-normal text-base leading-6'>Tool-free assembly</p>
                    <p className='font-normal text-base leading-6'>30-day trial</p>
                </div>
                <div className='flex justify-between mt-4'>
                    <Wishlist />
                    <Social />
                </div>

            </div>
            <img src="../assets/Product.png" alt="" className='mt-[200px] w-[844px] h-[470px]' />
        </div>
    )
}

export default ProductComponent