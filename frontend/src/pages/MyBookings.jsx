import { Calendar, MapPin } from "lucide-react";
import { useAppContext } from "../AppContext";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";

const MyBookings = () => {
    const{axios,user,loading,setLoading}=useAppContext();
    const[mybooking,setMyBooking]=useState([]);

    const fetchMyBooking=async()=>{
        try{
            setLoading(true);
            const {data}=await axios.get('/api/booking/booking-list')
            if(data.success){
                setMyBooking(data.bookings)   
            }else{
                toast.error(data.message)
            }
        }catch(err){
            console.log(err.message)
        }finally{
            setLoading(false);
        }
    }

    useEffect(()=>{
        if(!user) return;
       fetchMyBooking(); 
    },[user])

    return (
        <div className='px-6 md:px-16 lg:px-24 xl:px-32'>
            <h1 className='flex text-3xl my-15 p-2 font-semibold justify-start'>My Bookings</h1>
            <div className="flex flex-col gap-15 my-20">
                {/* Booking Details */}
                {   
                    mybooking.map((booking,index) => (
                        <div key={booking._id}>
                            <div className="flex flex-col md:flex-row justify-between items-center shadow-[0_1px_10px_rgba(0,0,0,0.3)] md:p-5 rounded-lg ">
                               
                               {/* part1 information*/}
                                <div className="flex flex-col md:flex-row gap-10 md:gap-20 p-5">
                                    <div>
                                        <img src={booking.car.image[0]} alt="Car Image" className='w-126 h-76 object-cover rounded-xl'/>
                                        <h2 className='text-2xl font-semibold mt-4'>{booking.car.brand} {booking.car.model}</h2>
                                        <p>{booking.car.category}&nbsp;{booking.car.year}</p>
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        <p>Booking#{index+1}<span className={`ml-3 p-2 rounded-lg ${booking.status === 'confirmed' ? 'text-green-500 bg-green-100' : 'text-red-500 bg-red-100'}`}>{booking.status}</span></p>
                                        <label className='font-medium flex gap-3 text-gray-400'><Calendar className="text-primary"/>Rental Period</label>
                                        <p className="ml-10">{new Date(booking.pickupDate).toLocaleDateString("en-US")}&nbsp;-&nbsp;{new Date(booking.returnDate).toLocaleDateString('en-US')}</p>

                                        <label className='flex gap-3 font-medium  text-gray-400'><MapPin className="text-primary"/>Pick-Up Location</label>
                                        <p className="ml-10">Pickup</p>

                                        <label className='flex gap-3 font-medium  text-gray-400'><MapPin className="text-primary"/>Return Location</label>
                                        <p className="ml-10">Return</p>
                                    </div>
                                </div>

                                {/* part2 price*/}
                                <div className="flex flex-col  p-15">
                                    <h2 className='text-2xl font-semibold mb-2'>Total Price</h2>
                                    <p className='text-3xl font-bold text-primary'>${booking.price}</p>
                                    <p className="text-gray-400">{new Date(booking.createdAt).toLocaleDateString("en-US")}</p>
                                </div>
                            </div>
                            
                         </div>   
                    ))
                }
            </div>
        </div>);
}

export default MyBookings;