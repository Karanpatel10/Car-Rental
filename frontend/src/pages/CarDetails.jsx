import React, { useEffect, useState } from 'react'
import {NavLink, useParams } from 'react-router-dom';
import { assets} from '../assets/assets';
import { ArrowLeft, Link } from 'lucide-react';
import Loading from '../components/Loading';
import { useAppContext } from '../AppContext';


const CarDetails = () => {

  const {navigate,setShowLogin,user,cars,carDetails,setCarDetails,hassearch}=useAppContext();

  const {id}=useParams();
 
  const [mainImage, setMainImage] = useState(0);

  useEffect(()=>{
    setCarDetails(cars.find(car=>car._id === id))
  },[id])

  return carDetails ? (
    <div className='px-6 md:px-16 lg:px-24 xl:px-32'>
      <div className='flex'>
        <button onClick={() =>navigate(-1) } className='m-5 p-2 rounded-md flex items-center gap-2 cursor-pointer hover:scale-105 transition-transform duration-200'>
          <ArrowLeft size={16}/> Back
        </button>
      </div>

      {/* Car details content */}
      <div className="flex flex-col py-10">
        <div className='grid grid-cols-2 gap-7 '>
            <img src={carDetails.image[mainImage]} alt="Car Image" className='w-full max-h-150  object-contain rounded-xl col-span-2 lg:col-span-1'/>
          <div className='hidden lg:grid lg:grid-cols-2 gap-5'>
            {
              [...Array(4)].map((_, index) => (
                <img key={index} src={carDetails.image[index]} alt={`image${index + 1}`} onClick={() => setMainImage(index)}  className={`cursor-pointer object-cover rounded-xl w-full h-full overflow-hidden p-0.5 ${mainImage === index ? 'border-4 border-blue-500' : ''}`}/>
              ))
            }
              
          </div>
        </div>

        <div className='my-5 '>
          <h1 className='font-bold text-2xl'>{carDetails.brand} {carDetails.model}</h1>
          <p className='pb-5'>{carDetails.category} {carDetails.year}</p>
          <hr className='text-gray-300/90 mb-2'/>

          <div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>
            {[
              {icon:assets.fuel_icon, text:carDetails.fuelType},
              {icon:assets.users_icon,text:`${carDetails.seating_capacity} Seats`},
              {icon:assets.car_icon,text:carDetails.transmission},
              {icon:assets.location_icon,text:carDetails.location},
            ].map((icon,text)=>(
              <div key={text} className='flex flex-col items-center gap-2 mt-3 bg-light max-w-x p-4 rounded-lg'>
                <img src={icon.icon} alt="icon" className='w-5 h-5'/>
                <p>{icon.text}</p>
              </div>
            ))
            }
          </div>

            {/*Descripton  */}

            <div>
              <h1 className='text-xl font-medium my-5'>Desription</h1>
              <p className='text-gray-500'>{carDetails.description}</p>
            </div>

            {/* Features */}

            <div className='mb-10'>
              <h1 className='text-xl font-medium mb-3 mt-5'>Features</h1>
              <ul className='grid grid-col-1 sm:grid-cols-2 gap-2'>
                {
                  ["360 Camera","Bluetooth","Backup Sensor","Cruise Control","Heated Seats","Keyless Entry","Leather Seats","Navigation System","Remote Start","Sunroof"].map((feature,index)=>(
                    <li key={index} className='text-gray-500 flex items-center ml-5 mb-1'><img src={assets.check_icon} alt="check icon" className='inline w-4 h-4 mr-2'/>{feature}</li>
                  ))
                }
              </ul>
            </div>

              <div className='flex items-center gap-10'>
                  <button type='submit' disabled={!hassearch}  className={`cursor-pointer w-full lg:max-w-1/6  py-3 rounded-lg text-white  active:scale-95 transition-transform duration-200 ${hassearch?'bg-blue-600  hover:bg-blue-700':'bg-gray-400 cursor-not-allowed'}`} onClick={()=>{!user?setShowLogin(true):navigate(`/book-details/${id}`)}}>Book Now</button>
                  {!hassearch && (<NavLink to='/#sec1_search' className='text-red-500 cursor-pointer hover:underline'>Check availability to book now</NavLink>)}
              </div>
        </div>
      </div>
    </div>
  ):<div>
    <Loading/>
    </div>
}

export default CarDetails