import { Link } from 'react-router-dom';
import aboutmain_banner from '../../assets/aboutmain_banner.webm'
import {motion} from 'motion/react'
import { Headset, PhoneCall } from 'lucide-react';

const Section10 = () => {
  return (
    <div className='flex flex-col md:flex-row'>
       
            <div className="relative h-50 md:h-150 overflow-hidden w-full md:w-1/2">
                <motion.video
                    src={aboutmain_banner} autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover z-0"
                />
            </div>

            <div className='w-full md:w-1/2 bg-black text-white flex flex-col  justify-center items-center md:items-start gap-10 p-10'>
                <p className='text-xl'>LET'S KEEP IT SIMPLE.</p>
                <h1 className='text-3xl md:text-6xl'>We are the best when it.comes to exotic cars.</h1>
                <Link to='/contact-us'><button className='bg-white px-6 py-2 text-black inline-block w-fit rounded-lg cursor-pointer hover:bg-gray-100 hover:scale-105 transition duration-200'>Call Us</button></Link>
                <div className='flex gap-3'><PhoneCall className='text-blue-400'/><span className='text-sm text-white/80'>Need help? Our support team is here for you 24/7.</span></div>
            </div> 
      
    </div>
  );
};

export default Section10;
