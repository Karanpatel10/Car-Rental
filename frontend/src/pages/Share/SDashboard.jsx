import toast from 'react-hot-toast';
import { useAppContext } from '../../AppContext';
import {assets} from '../../assets/assets';
import Title from '../../components/Title';
import { Book, NotebookText } from 'lucide-react'
import {useEffect, useState } from 'react';

const SDashboard = () => {

  const {axios,setLoading,user}=useAppContext();
  const [dashData,setDashData]=useState({totalCars:0,totalBooking:0,pendingBooking:0, conformedBooking:0,totalMonthlyRevenue:0,recentBooking:[]});

  const dashboardData = [
        {title:'Total Cars',value:dashData?.totalCars,icon:assets.carIconColored,color:"bg-red-500"},
        {title:'Total Bookings',value:dashData?.totalBooking,icon:assets.carIconColored,color:"bg-blue-500"},
        {title:'Pending Bookings',value:dashData?.pendingBooking,icon:assets.carIconColored,color:"bg-yellow-500"},
        {title:'Completed Bookings',value:dashData?.conformedBooking,icon:assets.carIconColored,color:"bg-green-500"},
      ]

      const fetchDashData=async()=>{
        setLoading(true);
        const {data}=await axios.get(`/api/${user?.role}/dashboard`);
        try{
            if(data.success)
            {
              setDashData(data.dashboardData)
            }else{
                toast.error(data.message);
            }
        }catch(err){
          toast.error(err.message)
        }finally{
          setLoading(false);
        }
      }

      useEffect(()=>{
        fetchDashData();
      },[])

    return (
<div className='flex flex-col justify-start px-6 md:px-12 lg:px-24 xl:px-32'>
      <div className='flex flex-col max-w-120 my-10'>
        <Title title={"Admin Dashboard"} subtitle={"Monitor overall platform performance including total cars, bookings, revenue, and recent activities"}/>  
      </div>

      {/* all dashboard cards */}
      <div className='flex flex-row flex-wrap justify-between gap-6 my-3'>
          {
            dashboardData.map((info,index)=>(
              <div key={index} className={`flex flex-row justify-between items-center ${info.color} p-6 rounded-lg gap-5 w-60 `}>
                <div>
                  <p className='text-white font-semibold text-sm'>{info.title}</p>
                  <p className='text-white font-extrabold text-2xl'>{info.value}</p>
                </div>
                <div>
                  {info.icon && <img src={info.icon} alt={info.title} className='text-white'/>}
                </div>
               </div> 

            )
          )} 
      </div>

      {/* recent bookings section */}

      <div className='flex flex-col justify-between mt-10'>
           
            <div className='flex flex-row flex-wrap justify-between gap-10 mt-10'>
               
                <div className='flex flex-col shadow-[0_1px_10px_rgba(0,0,0,0.3)] rounded-2xl p-4 md:p-8'>
                    <p className='text-gray-400'>Recent Bookings</p>
                    <p className='text-gray-400 mb-4'>Latest customer bookings</p>
                  {dashData?.recentBooking.map((book,index)=>(
                    <div key={index} className='grid grid-cols-1 md:grid-cols-4 items-center p-2 md:gap-6' >
                        <NotebookText className='text-primary '/>
                        <div className='flex flex-col items-start'>
                          <p>{book.car.brand}&nbsp;{book.car.model}</p> 
                          <p>{book.car.createdAt.split('T')[0]}</p>
                        </div>
                        <p>{book.price}</p>
                        <p>{book.status}</p>
                    </div>
                  ))}
                </div>
            
                <div className='grid grid-cols-1 justify-between items-start shadow-[0_1px_10px_rgba(0,0,0,0.3)] rounded-2xl p-6  gap-5 h-45 mr-auto'>
                      <p className='font-bold'>Monthly Revenue</p>
                      <p className='text-gray-400'>Revenue for current month</p>
                      <p className='text-primary font-bold text-4xl'>${dashData.totalMonthlyRevenue}</p>
                </div>
             </div>
      </div>
    </div>
    )
}

export default SDashboard;