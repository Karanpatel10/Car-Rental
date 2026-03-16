import Title from './Title'
 import React from "react";
import { assets } from "../assets/assets"; // your icons/images

const About=()=>{
    return(

        
        <div className='flex flex-col '>
            <section className='grid grid-cols-1 md:grid-cols-2 bg-black text-white p-10 md:p-30 gap-15 md:gap-35'>
                <div className='flex flex-col justify-center gap-10'>
                    <h1 className='text-3xl md:text-6xl'>Experience Premium Luxury Car Rentals Today</h1>
                    <p className='text-lg md:text-2xl'>Exclusive luxury, wedding, corporate, and event car rentals with personalized packages and 24/7 support</p>
                </div>
                <div className='flex flex-col'>
                        <div className='flex flex-row justify-center gap-2'>
                           <span className='inline-block w-50 h-50  bg-white rounded-bl-[50px] rounded-tr-[50px]'/>
                          <span className='inline-block w-50 h-50 rounded-full ring-5 ring-offset-amber-50'/>
                        </div>
                        <div className='max-h-85'>
                            <img src={assets.about_top} alt='about top banner' className='w-full h-full object-cover rounded-br-[125px] rounded-tl-[125px]'/>
                        </div>
                        <div className='flex flex-row justify-end gap-2'>
                          <span className='w-50 h-50 rounded-full ring-5 ring-offset-amber-50'/> 
                           <span className='w-50 h-50 bg-white rounded-br-[50px] rounded-tl-[50px]'/>
                        </div>
                        
                </div>
            </section>
           
    <section className="text-black rounded-2xl shadow-lg hover:shadow-xl transition px-16 md:px-16 lg:px-35 py-10 md:py-35">
      
      {/* Intro */}
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold">
          About Our Car Rentals
        </h1>
        <p className="text-lg sm:text-xl mt-4 text-gray-500">
          At SafeRide, we believe that renting a car should be simple, 
          affordable, and fun. From compact cars to luxury vehicles, we provide 
          the perfect ride for every journey — whether it’s a business trip, 
          weekend getaway, or long adventure.
        </p>
      </div>

      {/* Our Mission */}
      <div className="mt-16 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
        <p className="text-gray-500 text-lg">
          We strive to make your travel seamless and enjoyable by offering a wide 
          selection of well-maintained vehicles, transparent pricing, and 
          exceptional customer support 24/7. Your journey is our priority.
        </p>
      </div>

      {/* Features / Highlights */}
      <div className="m-16 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Fleet */}
        <div className="flex flex-col items-center text-center p-6 bg-white ring-1 ring-gray-200 rounded-2xl shadow-lg hover:scale-105 transform transition">
          <img src={assets.fleetIcon} alt="Fleet" className="w-16 h-16 mb-4"/>
          <h3 className="text-xl font-semibold mt-2">Wide Fleet</h3>
          <p className="mt-2 text-gray-500">
            From compact cars to SUVs and luxury rides, we have the perfect vehicle 
            for any occasion.
          </p>
        </div>

        {/* Affordable Prices */}
        <div className="flex flex-col items-center text-center p-6 bg-white  ring-1 ring-gray-200 rounded-2xl shadow-lg hover:scale-105 transform transition">
          <img src={assets.priceIcon} alt="Affordable Prices" className="w-16 h-16 mb-4"/>
          <h3 className="text-xl font-semibold mt-2">Affordable Prices</h3>
          <p className="mt-2 text-gray-500">
            Transparent pricing with no hidden fees. Rent by the day, week, or month 
            without surprises.
          </p>
        </div>

        {/* 24/7 Support */}
        <div className="flex flex-col items-center text-center p-6 bg-white  ring-1 ring-gray-200 rounded-2xl shadow-lg hover:scale-105 transform transition">
          <img src={assets.supportIcon} alt="Reliable Support" className="w-16 h-16 mb-4"/>
          <h3 className="text-xl font-semibold mt-2">24/7 Support</h3>
          <p className="mt-2 text-gray-500">
            Our friendly team is always available to assist with bookings, queries, 
            or travel tips — anytime, anywhere.
          </p>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="mt-20 max-w-5xl mx-auto  flex justify-center flex-col items-center">
        <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
        <ul className="text-gray-500 text-lg list-disc list-inside space-y-2">
          <li>Well-maintained, fully insured vehicles for a safe journey</li>
          <li>Flexible rental periods to suit your schedule</li>
          <li>Easy online booking and quick pickup/drop-off process</li>
          <li>Special offers and discounts for loyal customers</li>
          <li>Trusted by thousands of happy travelers every year</li>
        </ul>
      </div>

      {/* Optional Image
      <div className="mt-20 max-w-5xl mx-auto">
        <img
          src={assets.aboutCar}
          alt="Car Rental"
          className="w-full rounded-2xl shadow-2xl object-cover"
        />
      </div> */}

      {/* Call-to-Action
      <div className="mt-16 text-center">
        <a
          href="#contact"
          className="inline-block bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-10 py-4 rounded-full transition"
        >
          Book Your Ride Now
        </a>
      </div> */}
    </section>
  



         </div>   
    )
}

export default About