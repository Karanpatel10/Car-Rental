import React from 'react'
import { assets } from '../../assets/assets'
import CountUp from 'react-countup'


function Section8() {
   
    return (
        <div className={`w-full bg-cover bg-center  gap-20 bg-fixed`} style={{ backgroundImage: `url(${assets.excusivecusotmer_bg})` }}>
            <div className='bg-black/30 w-full flex'>
                <div className='grid md:grid-cols-2 p-30 justify-items-center items-center gap-10 mx-auto'>
                    <div className='text-white rounded-3xl flex flex-col gap-15'>
                        <div>
                            <h2 className='text-4xl font-extrabold'>We give luxurious experience with our most exclusive cars</h2>
                            <p>Our esteemed clientele has enjoyed the unparalleled luxury and sophistication of our exclusive fleet. featuring a curated selection of luxary sedan, SUVs, and MUVs</p>
                        </div>
                        <div className='grid grid-cols-2 gap-5 text-xl'>
                            <div>
                               
                                <CountUp end={85} duration={10} enableScrollSpy scrollSpyOnce preserveValue scrollSpyDelay={100}  className='text-4xl font-bold'/><span className='text-4xl font-bold'>+</span>
                                <p>Owned Luxury Cars</p>
                            </div>
                            <div>
                                <CountUp end={103} duration={10} enableScrollSpy scrollSpyOnce preserveValue scrollSpyDelay={100}  className='text-4xl font-bold'/><span className='text-4xl font-bold'>+</span>
                                <p>Corporate Clients</p>
                            </div>
                            <div>
                                <CountUp end={15523} duration={10} enableScrollSpy scrollSpyOnce preserveValue scrollSpyDelay={100} className='text-4xl font-bold'/><span className='text-4xl font-bold'>+</span>
                                <p>Satisfied Customers</p>
                            </div>
                            <div>
                                <CountUp end={39} duration={7} enableScrollSpy scrollSpyOnce preserveValue scrollSpyDelay={100}  className='text-4xl font-bold'/><span className='text-4xl font-bold'>+</span>
                                <p>Years of Experience</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src={assets.excusive_mercedesfront} alt='Exclusive Customer' className='rounded-3xl' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Section8