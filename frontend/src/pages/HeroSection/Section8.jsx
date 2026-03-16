import React from 'react'
import { assets } from '../../assets/assets'
import CountUp from 'react-countup'



function Section8() {

    const dataCounter = [
        {id: 1,end: 85,label: "Owned Luxury Cars"},
        {id: 2,end: 103,label: "Corporate Clients"},
        {id: 3,end: 15523,label: "Satisfied Customers"},
        {id: 4,end: 39,label: "Years of Experience"}
    ];

    return (
        <div className={`w-full bg-cover bg-center  gap-20 bg-fixed`} style={{ backgroundImage: `url(${assets.excusivecusotmer_bg})` }}>
            <div className='bg-black/30 w-full flex'>
                <div className='grid md:grid-cols-2 p-10 md:p-30 justify-items-center items-center gap-10 mx-auto'>
                    <div className='text-white rounded-3xl flex flex-col gap-15'>
                        <div>
                            <h2 className='text-4xl font-extrabold'>We give luxurious experience with our most exclusive cars</h2>
                            <p>Our esteemed clientele has enjoyed the unparalleled luxury and sophistication of our exclusive fleet. featuring a curated selection of luxary sedan, SUVs, and MUVs</p>
                        </div>
                        <div className='grid grid-cols-2 gap-5 text-xl'>
                            {
                                dataCounter.map((counter) => (
                                    <div key={counter.id}>
                                        <CountUp end={counter.end} duration={10} enableScrollSpy scrollSpyOnce preserveValue scrollSpyDelay={100} className='text-4xl font-bold' /><span className='text-4xl font-bold'>+</span>
                                        <p>{counter.label}</p>
                                    </div>
                                ))
                            }
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