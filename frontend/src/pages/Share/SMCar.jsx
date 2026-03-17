import { useEffect, useState } from "react";
import Title from '../../components/Title'
import { useAppContext } from '../../AppContext'
import { Eye,EyeOff, Trash2 } from 'lucide-react'
import toast from 'react-hot-toast'

const SMCar = () =>{
    const {currency,axios,setLoading,user,fetchCars}=useAppContext();
    const [manageCar,setManageCar]=useState([])

    const handleManageCars=async()=>{
      try{
          setLoading(true)
          const {data}=await axios.get(`/api/${user?.role}/allcars`)
          if(data.success)
          {
            setManageCar(data.cars)
            fetchCars();
          }else{
            toast.error(data.message)
          }
      }catch(err){
        toast.error(err.message);
      }finally{
        setLoading(false)
      }
    }

    // check Avalibility of car
    const changeAvalibility=async(carId)=>{
    try{
      const {data}=await axios.post(`/api/${user?.role}/toggle-avaliblity`,{carId})
      if(data.success)
          {
            toast.success(data.message)
            handleManageCars();
          }else{
            toast.error(data.message);
          }
    }catch(err){
      console.log(err.message)
    }
  }

  // delete Car from list
  const deleteManageCars=async(carId)=>{
    try{
      const confirm=window.confirm('Are you sure you want to delete this Cars?');
      if(!confirm) return null;
       const {data}=await axios.post(`/api/${user?.role}/deletecars`,{carId})
      if(data.success)
          {
            toast.success(data.message)
           handleManageCars();
          }else{
            toast.error(data.message);
          }
    }catch(err){
      console.log(err.message)
    }
    
  }

    useEffect(()=>{
      handleManageCars()
    },[])

    return (
<div className='px-6 md:px-16 lg:px-24 xl:px-32 py-8 w-full'>
      <div>
        <Title title={'Manage Cars'} subtitle={'View all cars, update their details or remove them from the booking platform'}/>
      </div>

      <div className='border border-borderColor w-full max-w-7xl rounded-md p-3 mt-6 overflow-x-auto gap-3'>
        <table className='w-full border-collapse text-left text-gray-600'>
          <thead>
            <tr className="bg-gray-100">
              <th className='p-3'>Car</th>
              <th className='max-md:hidden p-3'>Category</th>
              <th className='p-3 hidden md:block'>Price</th>
              <th className='max-md:hidden p-3'>Status</th>
              <th className='p-3 flex justify-end'>Actions</th>
            </tr>
           </thead>
           <tbody>
              {
                manageCar?.length>0?(
                        manageCar.map((data)=>(
                        <tr key={data._id} className='border-t  border-borderColor '>
                            <td className='p-3'>
                              <div className='flex flex-row'>
                                <img src={data.image[0]} alt={`car${data._id}`} className='w-24 h-24 aspect-square rounded-md object-cover'/>
                                <div className='ml-4 flex flex-col justify-center'>
                                  <p className='font-medium'>{data.brand} {data.model}</p>
                                  <p className='text-sm text-gray-500'>{data.seating_capacity} {data.transmission}</p>
                                </div>
                              </div>
                            </td>
                            <td className='max-md:hidden p-3'>
                              <p>{data.category}</p>
                            </td>
                            <td className='p-3 hidden md:table-cell'>{currency}&nbsp;{data.pricePerDay}</td>
                            <td className='max-md:hidden p-3 max-w-20'><span className={`p-2 rounded-md ${data.isAvailable ? 'text-green-600 bg-green-200' : 'text-red-600 bg-red-200'}`}>{data.isAvailable ? 'Available' : 'Not Available'}</span></td>
                            <td className='p-3'>
                              <div className='flex flex-row gap-10 justify-end'>
                               <div className='relative inline-block group'>
                                 <span className='cursor-pointer' onClick={()=>changeAvalibility?.(data._id)}>{data.isAvailable ? <Eye /> : <EyeOff />}</span>
                                 <div className='bg-black text-white rounded absolute -translate-19 left-15 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity text-sm p-2'>{data.isAvailable?'visible':'invisible'}
                                    <span className='absolute translate-9 -left-4 top-0  border-l-8 border-r-8 border-t-10 border-t-black'/>
                                  </div>
                               </div>
                                <div className='relative inline-block group'>
                                  <span className='cursor-pointer inline-block' onClick={()=>deleteManageCars?.(data._id)}><Trash2 /></span>
                                  <div className='bg-black text-white rounded absolute -translate-21 left-17 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity text-sm p-2'>Delete
                                    <span className='absolute translate-9 -left-4 top-0  border-l-8 border-r-8 border-t-10 border-t-black'/>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                      ))
                ):(
                  <tr>
                      <td colSpan={5} className='text-center p-4'>No Cars found</td>
                  </tr>
                )
              }
            </tbody> 
         </table> 
       </div> 
    </div>
    )
}

export default SMCar;