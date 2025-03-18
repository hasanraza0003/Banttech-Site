import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'

const TopSection = () => {
  return (
    <div className='w-full bg-black flex justify-center items-center gap-3 p-1'>
        <div>
        <img src="assets\images\mvp-img.webp" alt="MVP_LOGO" className='w-[52px]' />

        </div>
        <div className='flex gap-4 items-center justify-center'>
                <h2 className='text-secondary text-lg '>MVP Development Services For Startups and Enterprises </h2>
                <button className='bg-secondary px-3 py-1 flex justify-center items-center gap-2 font-semibold rounded-md'>Connect Now <FaArrowRight stroke={5} /> </button>
        </div>
    </div>
  )
}

export default TopSection