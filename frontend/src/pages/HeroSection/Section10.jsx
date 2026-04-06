import { Link } from 'react-router-dom';
import aboutmain_banner from '../../assets/aboutmain_banner.webm';
import { motion } from 'motion/react';
import { PhoneCall } from 'lucide-react';
import { FlipWords } from "../../components/ui/flip-words";

const Section10 = () => {

  const firstWords = [
    "LET'S KEEP IT SIMPLE",
    "STAY FOCUSED",
    "EASY AND ELEGANT",
    "SIMPLICITY WINS"
  ];
  const secondWords = ["exotic cars", "supercars", "dream rides"];

  return (
    <div className='flex flex-col md:flex-row h-auto md:h-[600px] overflow-hidden w-full'>
      
      {/* Left Side - Video */}
      <div className="relative h-[220px] md:h-full w-full md:w-1/2 overflow-hidden">
        <motion.video
          src={aboutmain_banner}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Right Side - Text */}
      <div className='w-full md:w-1/2 bg-black text-white flex flex-col justify-center items-center md:items-start gap-6 md:gap-10 px-4 py-6 md:px-10 md:py-10'>
        
        {/* First FlipWords */}
        <div className="w-full min-h-[50px] md:min-h-[40px] flex items-center">
          <FlipWords words={firstWords} className='text-white text-2xl md:text-3xl' />
        </div>

        {/* Main Heading + Second FlipWords */}
        <h1 className='text-3xl md:text-5xl leading-tight min-h-[120px]'>
          We are the <span className='text-blue-400'>best.</span><br/>
          When it comes to{" "}
          <span className="inline-block min-w-[160px] h-[40px]">
            <FlipWords words={secondWords} className='text-blue-400 text-3xl md:text-4xl' />
          </span>
        </h1>

        {/* Call to Action */}
        <Link to='/contact-us'>
          <button className='bg-white px-6 py-2 text-black rounded-lg hover:bg-gray-100 hover:scale-105 transition duration-200'>
            Call Us
          </button>
        </Link>

        {/* Support Info */}
        <div className='flex gap-3 items-center'>
          <PhoneCall className='text-blue-400' />
          <span className='text-sm text-white/80'>
            Need help? Our support team is here for you 24/7.
          </span>
        </div>

      </div>
    </div>
  );
};

export default Section10;