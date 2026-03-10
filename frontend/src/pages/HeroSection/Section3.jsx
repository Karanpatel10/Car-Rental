import React from 'react'
import { assets } from '../../assets/assets'
import Title from '../../components/Title'

const Section3 = () => {
  return (
    <div className='p-8 md:px-16 lg:p-35'>
      <div className='flex flex-col md:flex-row justify-between bg-lightblack text-white rounded-4xl p-5 md:p-20  gap-20 md:gap-0 items-center'>
        <div className='grid gap-8 '>
            <h1 className='font-semibold text-2xl'>Do You Own a Luxary Car?</h1> 
            <p className='max-w-xl'>Monetize your vehicle effortlessly by listing it on CarRental.
            We take care of insurance. driver verification and secure payment -so you can earn passive income, stress-free.</p>
        <button className='bg-white text-black font-semibold rounded-lg px-7 py-3 max-w-45 cursor-pointer hover:bg-gray-200 transition-colors duration-300 scale-100 hover:scale-105'>List your Car</button>
        </div>
        <div className='w-70 md:w-100 lg:w-120'>
            <img src={assets.banner_car_image} alt='car_image_banner'/>
        </div>
    </div>
    </div>
  )
}

export default Section3