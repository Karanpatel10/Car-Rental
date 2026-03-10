import { Car, Fuel, MapPin, Users } from 'lucide-react'
import React from 'react'

const Card = ({car}) => {
  return (
       
        <div className="p-4 bg-white rounded-3xl w-90 relative hover:scale-105 transition-shadow cursor-pointer hover:-translate-y-2 shadow-2xl ring-2 ring-gray-300">
            <img className="rounded-md max-h-40 w-full object-cover overflow-hidden" src={car.image} alt="officeImage" />
            
                {car.isAvaliable && <p className='bg-blue-500 text-white rounded-lg px-3 py-1 font-medium absolute top-6 left-5 z-50 text-sm'>Available</p>}
           
            <p className="text-gray-900 text-xl font-semibold ml-2 mt-6">{car.brand}&nbsp;{car.model}</p>
            <p className='ml-2 text-gray-600'>{car.category}&nbsp;{car.year}</p>
            <div className='grid grid-cols-2 text-gray-600 gap-2 py-8'>
                <p className='flex flex-row gap-3'><Users/>{car.seating_capacity} Seats</p>
                <p className='flex flex-row gap-3'><Fuel/>{car.fuelType}</p>
                <p className='flex flex-row gap-3'><Car/>{car.transmission}</p>
                <p className='flex flex-row gap-3'><MapPin/>{car.location}</p>
            </div>
        </div>
    
  )
}

export default Card