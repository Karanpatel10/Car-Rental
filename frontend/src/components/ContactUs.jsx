import React from 'react'
import Title from './Title'
import { assets } from "../assets/assets";

const ContactUs = () => {
  return (
    <div>
          <div className="relative w-full aspect-[4/1] overflow-hidden ">
                    <img
                      src={assets.contact_banner}
                      alt="contact_us_banner"
                      className="w-full h-full object-cover filter  contrast-150"
                    />
                    {/* <div className="absolute inset-0 bg-black/60" /> */}

          </div>

   
            <section className="min-h-screen px-4 md:px-16 lg:px-24 xl:px-32 w-full py-25">
              <h1  className='mx-auto text-center text-black font-extrabold text-2xl'>Contact Us</h1>
            
            <h1 className="text-4xl font-bold text-primary text-center mx-auto mt-4">Rent Your Ride Today</h1>
            <p className="text-black text-center mt-2 max-w-md mx-auto"> Have questions about our car rentals? Let’s connect and help you find the perfect vehicle for your journey.</p>
        
            <form className="grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl mx-auto text-black mt-16 w-full">
                <div>
                    <p className="mb-2 font-medium">Your name</p>
                    <div className="flex items-center pl-3 rounded-lg overflow-hidden border border-slate-700 focus-within:border-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user size-5" aria-hidden="true">
                            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                        <input placeholder="Enter your name" className="w-full p-3 bg-transparent outline-none" type="text" name="name" />
                    </div>
                </div>
                <div>
                    <p className="mb-2 font-medium">Email id</p>
                    <div className="flex items-center pl-3 rounded-lg overflow-hidden border border-slate-700 focus-within:border-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail size-5" aria-hidden="true">
                            <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                            <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                        </svg>
                        <input placeholder="Enter your email" className="w-full p-3 bg-transparent outline-none" type="email" name="email" />
                    </div>
                </div>
                <div className="sm:col-span-2">
                    <p className="mb-2 font-medium">Message</p>
                    <textarea name="message" rows="8" placeholder="Enter your message" className="focus:border-primary resize-none w-full p-3 bg-transparent outline-none rounded-lg overflow-hidden border border-slate-700"></textarea>
                </div>
                <button type="submit" className="w-max justify-start flex  gap-2 bg-primary hover:bg-primary-dull text-white px-10 py-3 rounded-full">
                    Submit
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right size-5" aria-hidden="true">
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                    </svg>
                </button>
            </form>
        </section>

    </div>
  )
}

export default ContactUs

