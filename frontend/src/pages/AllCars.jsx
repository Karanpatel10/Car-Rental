import { Search } from "lucide-react";
import Card from "../components/Card";
import Title from "../components/Title";
import { useAppContext } from "../AppContext";
import { useState } from "react";
import { TypeAnimation } from 'react-type-animation';
import { motion } from "motion/react";
 

const Allcars = () => {
    const {cars,setCars,navigate,filterCar,hassearch} = useAppContext();
    const [searchItem,setSearchItem]=useState("");
    let listtoshow=cars;

    if(hassearch)
    {
        listtoshow=filterCar
    }else{
        listtoshow=cars
    }
    
    const finalCars=listtoshow.filter((car)=>`${car.brand} ${car.model} ${car.category} ${car.fuelType} ${car.location} ${car.feature||""}`.toLowerCase().includes(searchItem.toLowerCase()))

    return (
    <div className="flex flex-col flex-wrap items-center gap-20 justify-center">

        {/* Search bar for Cars */}
        <div className="bg-light w-full py-20 flex flex-col gap-6 items-center px-16 lg:px-24 xl:px-32">
            <span className="text-center max-w-125">
                <Title title="All Cars" subtitle="Browse our selection of premium vehicles available for your next adventure"/>
            </span>
           <div className="flex relative w-full max-w-xl group">
             <input type="text" className="w-full max-w-full h-14 px-10 bg-white rounded-2xl focus:ring-2 focus:ring-blue-500 focus:outline-none"  value={searchItem} onChange={(e)=>setSearchItem(e.target.value)}/>
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none"/>
            {!searchItem &&(<TypeAnimation sequence={['Search by Brand ... ', 1000,'Search by Model ... ',2000,'Search by Location ... ',3000]}wrapper="span" cursor={true} repeat={Infinity} className='text-gray-500 pointer-events-none absolute left-11 top-1/2 -translate-y-1/2 group-focus-within:hidden'/>)}
           </div>
        </div>

        {/* All Cars show */}
        <motion.div initial={{ opacity: 0,scale: 0.8,y: 20 }} animate={{ opacity: 1, scale: 1,y: 0 }} transition={{duration:0.5,ease:'easeOut'}} viewport={{once:true}} className="flex flex-row gap-20 flex-wrap justify-center px-6 md:px-16 lg:px-24 xl:px-32 pb-15">
            {
            finalCars.map((car) => (
                <div key={car._id} onClick={() => navigate(`/car-details/${car._id}`)}>
                    <Card car={car} />
                </div>
            ))
        }
        </motion.div>

    </div>);
}
export default Allcars;