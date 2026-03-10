import React from 'react'
import Title from '../../components/Title'
import { assets } from "../../assets/assets";

const steps = [
  {'title': 'Choose Your Car', 'icon': assets.bookprocess_Step1},
  {'title': 'Book Online', 'icon': assets.bookprocess_Step2},
  {'title': 'Pick Up & Drive', 'icon': assets.bookprocess_Step3},
  {'title': 'Return the Car', 'icon': assets.bookprocess_Step4}
];



const Section6 = () => { 
  return (
  <div className='px-6 md:px-16 lg:px-35'>
    <div className='relative flex flex-col items-center text-center  gap-5 bg-cover bg-no-repeat p-10 lg:rounded-full' style={{ backgroundImage: `url(${assets.sheffer_banner})` }} >
     <div className="absolute inset-0 bg-black/70 lg:rounded-full"></div>
             <div className='flex flex-col items-center text-center text-white gap-5 z-10'>
                <Title title="How To Book a Self-Drive Car Online"
                  subtitle="You are Important to us. We believe in providing the best car rental experience for your ride. You can always Contact us for any queries."/>
              </div>
              
            <div className="bg-contain lg:bg-[url('/src/assets/booking_process.png')] bg-center w-auto h-auto lg:h-[400px] bg-no-repeat flex flex-row gap-3 lg:gap-10   lg:px-25 items-center justify-center flex-wrap z-10 "
            >
              {
                steps.map((step,index)=>(
                    <div key={index} className='flex flex-col text-white  items-center justify-center font-bold p-9 sm:p-15 text-md bg-no-repeat bg-contain bg-center hover:scale-105 transition-transform duration-300' style={{backgroundImage:`url(${step.icon})`}}>{`0${index+1}`}
                        <p className=' font-medium '>{step.title}</p>
                    </div>
                ))}
          </div>
    </div>
  </div>
  );
} 
export default Section6;