import React from 'react'
import { assets } from '../../assets/assets'
import Title from '../../components/Title'

const Section7 = () => {
  return (
    <div className='px-6 md:px-16 lg:px-35 pt-20 pb-30'>
        <div className='bg-lightblack flex flex-col md:flex-row justify-between rounded-4xl'>
            <div className='text-white flex flex-col gap-5  lg:w-1/2 justify-center items-start px-10 xl:px-30 py-10'>
            <Title title='Download the app for smoother travel' subtitle='Download the Hertz app to book, modify, and extend rentals, track your points, find support resources, and more.'/>
            <div className='flex flex-row flex-wrap justify-center gap-8 md:gap-10 md:justify-start'>
                <img src={assets.applogo1} alt='applogo1' className='w-40'/>
                <img src={assets.applogo2} alt='applogo2' className='w-40'/>
            </div>
             </div>
            <div className='lg:w-1/2 flex justify-end'>
                <img src={assets.appsection2} alt='banner2 image' className='rounded-4xl'/>
            </div>
        </div>
    </div>
  )
}

export default Section7