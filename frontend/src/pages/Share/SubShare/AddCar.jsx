import React, { useState } from 'react'
import Title from '../../../components/Title'
import { assets,cityList} from '../../../assets/assets';
import { useAppContext } from '../../../AppContext';
import toast from 'react-hot-toast';


const optionlist={
    car_Category:["SUV","Sedan","Hatchback"],
    car_Transmission:["Automatic","Manual","Semi-Automatic"],
    car_FuelType:["Petrol","Diesel","Electric","Hybrid"]
  }



const AddCar = () => {

  const {axios,currency,loading,setLoading,fetchCars}=useAppContext();
  const [image,setImage]=useState([null,null,null,null]);
  const [car,setCar]=useState({brand:"",model:"",year:"",category:"",seating_capacity:0,fuelType:"",transmission:"",pricePerDay:0,location:"",description:""})

  const handleSubmit=async(e)=>{
    e.preventDefault();
    setLoading(true)
    try{
      const formData=new FormData()
          image.forEach((img, index) => {
      if (img) formData.append('image', img); // 'images' matches your backend key
    });
      formData.append('carData',JSON.stringify(car));
      const {data}= await axios.post('/api/owner/add-car',formData)
      if(data.success)
      {
        toast.success(data.message);
        fetchCars();
        setImage([null,null,null,null]);
        setCar({brand:"",model:"",year:"",category:"",seating_capacity:0,fuelType:"",transmission:"",pricePerDay:0,location:"",description:""})
      }else{
        toast.error(data.message)
      }
    }catch(err){
      toast.error(err.message);
    }finally{
      setLoading(false)
    }
  }
  return (
    <div className='flex flex-col justify-start px-6 md:px-16 lg:px-24 xl:px-32 py-8'>
      <div className='flex flex-col max-w-120'>
        <Title title={"Add New Car"} subtitle={"Provide detailed information about the car you want to list on the platform"}/>
      </div>
      
      
        {/* Form elements to add a new car will go here */}
        <form className='flex flex-col gap-6' onSubmit={handleSubmit}>

          <div>
              {image.map((imgs,index)=>(
                <div key={index} className='inline-block w-35 h-35 p-5'>
                <label htmlFor={`car-image-${index}`} key={index}>
                  <img src={imgs ? URL.createObjectURL(imgs) : assets.upload_icon} alt='image1' className='cursor-pointer' />
                </label>
                <input type='file' id={`car-image-${index}`} accept='image/*' hidden onChange={(e) => {const newImages=[...image]; newImages[index]=e.target.files[0]; setImage(newImages)}} />
                </div>
                ))}
            <p>Upload a picture of your car</p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6' >
            <div className='flex flex-col w-full'>
              <label>Brand</label>
              <input type='text' className='border border-borderColor rounded-sm outline-none p-2' required placeholder='e.g. BMW, Mercedes, Audi ....' value={car.brand} onChange={(e)=>setCar({...car,brand:e.target.value})}/>
            </div>
            <div className='flex flex-col w-full'>
              <label>Model</label>
              <input type='text' className='border border-borderColor rounded-sm outline-none p-2' required placeholder='e.g. X5, C-Class, A4 ....' value={car.model} onChange={(e)=>setCar({...car,model:e.target.value})}/>
            </div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
              <div className='flex flex-col w-full'>
                <label>Year of Manufacture</label>
                <input type='number' className='border border-borderColor rounded-sm outline-none p-2' required placeholder='e.g. 2020' value={car.year} onChange={(e)=>setCar({...car,year:Number(e.target.value)})}/>
              </div>
              <div className='flex flex-col w-full'>
                <label>Price Per Day ($)</label>
                <input type='number' className='border border-borderColor rounded-sm outline-none p-2' required placeholder='e.g. 50' value={car.pricePerDay} onChange={(e)=>setCar({...car,pricePerDay:Number(e.target.value)})}/>
              </div>
              <div className='flex flex-col w-full'>
                <label>Category</label>
                  <select onChange={e=>setCar({...car,category:e.target.value})} className='border border-borderColor p-2 outline-none rounded-sm' value={car.category} required>
                    <option value="" disabled>Select Category</option>
                    {
                      optionlist.car_Category.map((category)=>(<option key={category} value={category}>{category}</option>))
                    }
                  </select>
              </div>
          </div>

          <div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
              <div className='flex flex-col w-full'>
                <label>Transmission</label>
                  <select onChange={e=>setCar({...car,transmission:e.target.value})} className='border border-borderColor p-2 outline-none rounded-sm' value={car.transmission} required>
                    <option value="" disabled>Select Transmission</option>
                    {
                      optionlist.car_Transmission.map((transmission)=>(<option key={transmission} value={transmission}>{transmission}</option>))
                    }
                  </select>
              </div>
              <div className='flex flex-col w-full'>
                <label>Fuel Type</label>
                  <select onChange={e=>setCar({...car,fuelType:e.target.value})} className='border border-borderColor p-2 outline-none rounded-sm' value={car.fuelType} required>
                    <option value="" className='text-gray-400' disabled>Select Fuel Type</option>
                    {
                      optionlist.car_FuelType.map((fuel_type)=>(<option key={fuel_type} value={fuel_type}>{fuel_type}</option>))
                    }
                  </select>
              </div>
              <div className='flex flex-col w-full'>
                <label>Seating Capacity</label>
                <input type='number' className='border border-borderColor rounded-sm outline-none p-2' required placeholder='e.g. 5' value={car.seating_capacity} onChange={(e)=>setCar({...car,seating_capacity:Number(e.target.value)})}/>
              </div>
            </div>
          </div>
           
            
           
            <div className='flex flex-col w-1/3'>
              <label>Location</label>
              <select className=' border-borderColor outline-none p-2 rounded-sm border' value={car.location} onChange={(e)=>setCar({...car,location:e.target.value})} required>
                <option value="" disabled>Select Location</option>
                {cityList.map((city,index)=>(
                  <option value={city} key={index}>{city}</option>
                ))}
              </select>
            </div>
          
          <div className='flex flex-col w-full'>
              <label>Description</label>
              <textarea rows={4} className='border border-borderColor rounded-sm outline-none p-2' required placeholder='Provide a brief description of the car' value={car.description} onChange={(e)=>setCar({...car,description:e.target.value})}/>
            </div>
          
                
         <button type='submit' disabled={loading} className='cursor-pointer bg-blue-600 text-white py-3 px-6 rounded-sm hover:bg-blue-700 active:scale-95 transition-transform duration-200 max-w-[200px] disabled:opacity-60 disabled:cursor-not-allowed'>{loading?"Adding ...":"Add Car"}</button>
        </form>
      </div>
   
  )


}

export default AddCar