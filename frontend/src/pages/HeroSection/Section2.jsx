import Title from '../../components/Title'
import Card from '../../components/Card'
import { ArrowRight } from 'lucide-react'
import { useAppContext } from '../../AppContext'
import {motion} from 'motion/react'

const Section2 = () => {

  const {navigate,cars}=useAppContext();

  return (
    <motion.div initial={{opacity:0,y:40}} whileInView={{opacity:1,y:0}} viewport={{ once: true }} transition={{duration:1,ease:"easeOut"}} className='flex flex-col items-center py-24 px-6 md:px-16 lg:px-24 xl:px-32'>
      <motion.div initial={{y:20,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:1,delay:0.5,ease:"easeOut"}} className='flex flex-col max-w-125 items-center text-center'>
      <Title title="Featured Vehicles" subtitle="Explore our selection of premium vehicles available for your next adventure"/>
      </motion.div>
      {/* Cards */}
      <div className='mt-18 flex flex-wrap justify-center md:justify-between gap-20 focus:outline-none'>
        {cars?.slice(0,3).map((car)=>{
          return(
            <div role="button" key={car._id} onClick={()=>navigate(`/car-details/${car._id}`)}>
            <Card car={car}/>
           </div> 
          )
        })}
      </div>
      <div className=' mt-30 flex justify-center items-center'>
        <motion.button initial={{scale:1}} whileHover={{scale:1.05}} whileTap={{scale:0.95}} transition={{duration:0.1 ,ease:"easeOut"}} onClick={()=>navigate('/cars')} className='cursor-pointer flex flex-row gap-4 items-center active:scale-95 transition outline-gray-600 border rounded-xl px-8 py-2 hover:text-black'>Explore all Cars<ArrowRight/></motion.button>
      </div>
    </motion.div>
  )
}

export default Section2