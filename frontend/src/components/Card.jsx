import { Car, Fuel, MapPin, Users } from 'lucide-react'
import React from 'react'
import { useAppContext } from '../AppContext';

const Card = ({car}) => {
  
  const{hassearch}=useAppContext();
  return (
       
        <div className="group rounded-3xl w-100 relative overflow-hidden  hover:-translate-y-2 transition-transform duration-200  cursor-pointer  shadow-md ring-2 ring-gray-300">
            
                 <img className="rounded-t-3xl h-60 w-full object-cover group-hover:scale-120 transition-all duration-200" src={car.image} alt="officeImage" />
            
                {car.isAvaliable && <p className='bg-blue-500 text-white rounded-lg px-3 py-1 font-medium absolute top-6 left-5 z-50 text-sm'>Available</p>}
            
               <div className='p-2 bg-gray-100/10 backdrop-blur-sm rounded-b-3xl'>
               
                    <p className="text-black text-xl font-semibold ml-2 mt-6">{car.brand}&nbsp;{car.model}</p>
                    <div className='ml-2 text-gray-800 flex flex-between'><span>{car.category}&nbsp;{car.year}</span>{hassearch && <span className='text-green-900 bg-green-200 ml-auto text-sm p-2 rounded-md w-fit'>Avalible</span>}</div>
                     

                    <div className='grid grid-cols-2 text-gray-800 gap-2 p-2 mt-6 mb-6'>
                        <p className='flex flex-row gap-3'><Users/>{car.seating_capacity} Seats</p>
                        <p className='flex flex-row gap-3'><Fuel/>{car.fuelType}</p>
                        <p className='flex flex-row gap-3'><Car/>{car.transmission}</p>
                        <p className='flex flex-row gap-3'><MapPin/>{car.location}</p>
                    </div>
                </div> 
            
        </div>
    
  )
} 

export default Card