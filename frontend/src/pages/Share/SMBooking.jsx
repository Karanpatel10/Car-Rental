import Title from '../../components/Title'
import toast from 'react-hot-toast'
import { useEffect, useState } from 'react'
import {useAppContext} from '../../AppContext'

const SMBooking=()=>{

    const {currency,axios,setBooking,fetchBookings,booking,user,setLoading}=useAppContext();
    const [managebooking,setManageBooking]=useState()

// fetch booking for admin and owner
    const handlemanageBookings=async()=>{
     try{
      setLoading(true);
      const {data}=await axios.get(`/api/${user?.role}/booking`);
      if(data.success){
              setManageBooking(data.booking);
          }else{
            toast.error(data.message)
          }
      }catch(err){
        toast.error(err.message);
      }finally{
        setLoading(false);
      }   
  }


// update booking status
    const changeUpdateStatus=async(bookingId,status)=>{
    try{
      const {data}=await axios.post('/api/booking/change-status-booking',{bookingId,status})
      if(data.success){
         handlemanageBookings()
          toast.success(data.message);
      }else{
        toast.error(data.message);
      }
    }catch(err){
      toast.error(err.message);
    }
  }

  useEffect(()=>{
    handlemanageBookings()
  },[])

     return (
    <div className='px-6 md:px-16 lg:px-24 xl:px-32 py-8 w-full'>
      <div>
        <Title title={'Manage Bookings'} subtitle={'View all bookings, update their details or remove them from the booking platform'}/>
      </div>

      <div className='border border-borderColor w-full max-w-7xl rounded-md p-3 mt-6 overflow-x-auto gap-3'>
        <table className='w-full border-collapse text-left text-gray-600'>
          <thead>
            <tr className='bg-gray-100'>
              <th className='p-3'>Car</th>
              <th className='max-md:hidden p-3'>Date Range</th>
              <th className='p-3'>Total</th>
              <th className='p-3'>Payment</th>
              <th className='p-3 flex justify-end'>Actions</th>
              </tr>
           </thead>
           <tbody>
              {
                managebooking?.length>0 ? (
                  managebooking.map((data,index)=>(
                  <tr key={index} className='border-t  border-borderColor '>
                      <td className='p-3'>
                         <div className='flex flex-row gap-5'>
                            <img src={data.car.image} alt={`car${index}`} className='w-24 h-24 aspect-square rounded-md object-cover'/>
                            <p className='font-medium items-center flex'>{data.car.brand} {data.car.model}</p>  
                        </div>
                      </td>
                      <td className='max-md:hidden p-3'>
                        <p>{data.pickupDate.toString().split('T')[0]} To {data.returnDate.toString().split('T')[0]}</p>
                      </td>
                      <td className='p-3'>{currency}{data.price}</td>
                      <td><span className={`${data.payment !== 'unpaid' ? 'bg-green-200 text-green-600' : 'bg-red-200 text-red-600'} rounded-sm p-2`}>{data.payment !== 'unpaid' ? 'Paid' : 'Unpaid'}</span></td>
                      <td className='p-3'>
                        <div className='flex flex-row gap-10 justify-end'>
                           {data.status === 'pending'? <select className='p-2 outline-none border border-borderColor rounded-sm' value={data.status} onChange={(e)=>changeUpdateStatus(data._id,e.target.value)} >
                              <option  value='pending'>Pending</option>
                              <option value='cancelled'>Cancle</option>
                              <option value='confirmed'>Confirmed</option>
                            </select>: <span className={`${data.status === 'confirmed' ? 'text-green-600 bg-green-200 ':'text-red-600 bg-red-200'} p-2 font-medium rounded-sm`}>{data.status}</span>}
                        </div>
                      </td>
                    </tr>
                ))
                ):(
                  <tr>
                    <td colSpan={5} className='text-center text-2xl p-10 font-bold border-t-2 border-borderColor'>No Data found</td>
                  </tr>
                )
              }
            </tbody> 
         </table> 
       </div> 
    </div>
  )
}

export default SMBooking