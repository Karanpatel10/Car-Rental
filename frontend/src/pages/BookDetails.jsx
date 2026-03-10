import axios from 'axios';
import { ArrowLeft } from 'lucide-react'
// import React from 'react'
import React, { useEffect } from 'react'
import { useState } from 'react';
import toast from 'react-hot-toast';
import {useParams, } from 'react-router-dom';
import { useAppContext } from '../AppContext';


    
const BookDetails = () => {
    const {id}=useParams();
    const {navigate,carDetails,returnDate,pickupDate,loading,setLoading}=useAppContext();

    const totalDay=Math.ceil((new Date(returnDate) - new Date(pickupDate)) /(1000 * 60 * 60 * 24));
    const pricecalc=(totalDay == 0 ? 1 : totalDay)*carDetails.pricePerDay;
    const insuranceFees=0;
    const platformFees=0;
    const totalPrice=pricecalc+insuranceFees+platformFees;

    const [Data,setData]=useState({fullname:'',email:'',phoneno:'',address:'',specialInstruction:''})  
    
    const BookData = {
    first_part:[
    {title:'From',value:pickupDate},
    {title:'To',value:returnDate},
    {title:'Day',value:totalDay},
    ],

    second_part:[
    {title:'Price',value:pricecalc},
    {title:'Platform Fees',value:platformFees},
    {title:'Insurance Fees',value:insuranceFees},
    {title:'Total',value:totalPrice}
    ]
};


    const handlebookingAndPayment=async()=>{
        setLoading(true);
        try{
            const payload={car:id,...Data,pickupDate,returnDate,totalPrice}
            toast.success('Redirecting to payment ...');

            const paymentResponse=await axios.post('/api/payment/create-payment-intent',{
                items:[{name:carDetails.brand,price:pricecalc,quantity:1}],
                metadata:{
                    car:id,
                    // user:user?user._id:null,
                    pickupDate,
                    returnDate,
                    totalPrice,
                    ...Data
                }
            });

            if(paymentResponse.data.success){
                window.location.href=paymentResponse.data.url;
            }else{
                toast.error("Payment initiation failed");
            }
            

        }catch(err){
            console.log(err);
        }finally{
            setLoading(false);
        }
    }

    useEffect(()=>{
        console.log(carDetails)
    })

  return (
    
    <div className='px-6 md:px-16 lg:px-24 xl:px-32'>
        {/* for back arrow */}
            <div className='flex'>
                <button onClick={()=>navigate(-1)} className='cursor-pointer flex hover:scale-105 transition-transform duration-200 m-5 p-2 gap-2'><ArrowLeft/>Back</button>
            </div>
         
           
          <form className='grid grid-cols-1 lg:grid-cols-5 gap-15 w-full py-15' >
           
            {/* First part */}
                <div className='flex flex-col shadow-2xl bg-gray-100 p-10 rounded-lg gap-4 w-full lg:col-span-3'>
                    <div>
                        <h1 className='font-bold text-xl'>Summary</h1>
                        <p>Booking Details</p>
                    </div>
                    <div className='font-extrabold text-2xl flex justify-between'><span>{carDetails.brand}</span><span className='font-light text-end'>{carDetails.pricePerDay}$/Day</span></div>  

                    {/* order details */}
                    <div className='grid grid-cols-2 shadow-2xl bg-gray-300 rounded-2xl p-10 my-10 gap-14'>
                        <img src={carDetails.image[0]} alt='car-image'/>
                        <div className='flex flex-col gap-3'>
                            <p className='border-b-2 border-gray-400'>{carDetails.brand}</p>
                                {
                                BookData.first_part.map((data,index)=>(
                                    <div key={index} className='flex flex-col'>
                                        <p className='flex justify-between'><label>{data.title}</label><span>{data.value}</span></p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>   


                    <div className='flex flex-col md:flex-row gap-5'>
                        <div className='flex flex-col flex-1 gap-1'>
                            <label>Full Name</label>
                            <input type="text" className='w-full border p-2 rounded-lg' required value={Data.fullname} onChange={(e)=>setData({...Data,fullname:e.target.value})} placeholder='Full Name'/>
                        </div>   
                        <div className='flex flex-col flex-1 gap-1'>
                            <label>Email</label>
                            <input type="email" className='w-full border p-2 rounded-lg ' required value={Data.email} onChange={(e)=>setData({...Data,email:e.target.value})} placeholder='Email'/>
                        </div> 
                    </div>
                    <div className='flex flex-col gap-1'>  
                        <label>Phone Number</label>
                        <input type="tel" className='w-full border p-2 rounded-lg' required value={Data.phoneno} onChange={(e)=>setData({...Data,phoneno:e.target.value})} placeholder='Phone Number'/>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label>Address</label>
                        <input type="text" className='w-full border p-2 rounded-lg' required value={Data.address} onChange={(e)=>setData({...Data,address:e.target.value})} placeholder='Pickup Address' />
                    </div>
                    <textarea className='w-full border p-2 rounded-lg' required value={Data.specialInstruction} onChange={(e)=>setData({...Data,specialInstruction:e.target.value})} placeholder='Please mention any special Instruction' />
                    
                    <div>
                        <ul className='list-disc ml-6'>
                            <li>Any cancellation/modification to be informed only via email between 10am to 7pm on all working days and minimum 4 hours prior to the scheduled timer directly</li>
                            <li> Any cancellation under 24hrs of the scheduled time will attract 100% charges; standard cancellation charges until last 24hrs of scheduled time will be 25%</li>
                            <li>Payment Gateway charges are not refunded on any platforms for any type of booking cancellations</li>
                        </ul>
                    </div>
                </div>

           
                {/* second part  */}
                <div className='flex flex-col shadow-2xl bg-gray-100 p-10 rounded-lg gap-4 w-full lg:col-span-2'>

                        <div className='bg-gray-300 leading-loose p-5 rounded-lg'>
                            {
                            BookData.second_part.map((data,index)=>(
                                <div key={index} className='flex flex-col'>
                                    <p className='flex justify-between'><label>{data.title}</label><span>{data.value}</span></p>
                                </div>
                            ))
                            }
                        </div>
                        
                    
                        <div>
                            <ul className='list-disc ml-3'>
                            <li> Convenience charges will be added based on mode of payment</li>
                                <li> Wedding package will attract additional charges</li>
                                <li>In case of further additional Hours / Kms you can pay your chauffeur directly</li>
                                <li>GST applicable on all our services, if you have a GSTIN you can quote the same below.</li>
                            </ul>    
                        </div>   
                        <p className='flex items-center gap-2'><input type='checkbox' required/>I agree to the <span className='text-red-500'>Terms & Conditions</span></p>  
                    <button type='button' onClick={handlebookingAndPayment} disabled={loading} className='cursor-pointer mt-5 w-full lg:max-w-1/2 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 active:scale-95 transition-transform duration-200 disabled:cursor-not-allowed disabled:bg-gray-500'>{loading?'Confitm Booking .... ': 'Confirm Booking'}</button>
                </div>

            </form> 
        

    </div>
    
    
  )
}

export default BookDetails