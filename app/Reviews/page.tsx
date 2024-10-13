import SectionHeading from '@/Components/Helper/SectionHeading'
import React from 'react'
import Slider from './Slider'

const Reviews = () => {
  return (
    <div className='pt-16 pb-16 bg-[#050709]'>
        <SectionHeading>Client Reviews</SectionHeading>
        <div className='w-[90%] sm:w-[80%] m-auto mt-20'>
            {/* Slider */}
            <Slider/>
        </div>
    </div>
  )
}

export default Reviews