import { assets } from "../../assets/assets";
import Marquee from "react-fast-marquee";
import Title from '../../components/Title'
import {motion} from 'motion/react'
import { useAppContext } from "../../AppContext";

const Section5 = () => {

  const {cars,setFilterCar,navigate,setHassearch}=useAppContext();

  const handleClick=(brand)=>{
    console.log(brand);
    console.log(cars);
    const brandFilter=cars.filter(car=>car.brand.toLowerCase().includes(brand.toLowerCase()));
    console.log(brandFilter);
    setFilterCar(brandFilter);
    setHassearch(true);
    navigate('/cars');
  }

  return (
    <div className="flex flex-col items-center text-center pt-15"> 

      <motion.div initial={{y:20,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:1,delay:0.5,ease:"easeOut"}} className='flex flex-col max-w-125 items-center text-center '>
          <Title title="Brands we work with" subtitle="We cater to all your luxury car needs, Be it for any Brand of preference. Explore our range of premium vehicles and choose the one that suits you best."/>
      </motion.div>
      <Marquee gradient={true} pauseOnHover={false} speed={60} className="py-15 flex items-center">
        {assets.car_logos.map((img, index) => (
          <img
            key={index}
            src={img.logo} // Assuming 5 different logos named logo1.png to logo5.png
            alt={img.name}
            onClick={()=>handleClick(img.name)}
            className="w-[150px] md:w-[200px] h-auto object-contain mx-25 cursor-pointer"
          />
        ))}
      </Marquee>
    </div>
  )
};

export default Section5;
