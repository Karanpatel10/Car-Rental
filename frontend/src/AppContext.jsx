import {createContext, useContext, useEffect, useState } from "react";
import axios from 'axios'
import {toast} from 'react-hot-toast'
import { useNavigate } from "react-router-dom";

axios.defaults.baseURL =import.meta.env.VITE_BACKEND_URL;

export const AppContext=createContext();

export const AppProvider=({children})=>{

    const navigate=useNavigate();
    const currency=import.meta.env.VITE_CURRENCY;
    // Auth
    const [token,setToken]=useState(null);
    const [user,setUser]=useState(null);

    // UI
    const [loading,setLoading]=useState(false);
     const [showLogin,setShowLogin]=useState(false);
    const [isOwner,setIsOwner]=useState(false);

    // Booking
    const [pickupDate,setPickupDate]=useState('');
    const [returnDate,setReturnDate]=useState('');
    const [booking,setBooking]=useState([]);

    const [carDetails,setCarDetails]=useState(null);
    const [pickupCity,setPickupCity]=useState('');
    const [filterCar,setFilterCar]=useState([]);
    const [hassearch,setHassearch]=useState(false);
    const [showconfirm,setShowConfirm]=useState(false);
    const [cars,setCars]=useState([])

    // Function to check user login 
    const fetchUser=async()=>{
        try{
           const {data}= await axios.get('/api/user/getUserdata');
           console.log(data);
           if(data.success){
            setUser(data.user)
            if(data?.user?.role === 'admin'){
                // setIsAdmin(true)
                navigate('/admin');
            }
            setIsOwner(data.user.role === 'owner')
           }else{
            navigate('/')
           }
        }catch(err){
            toast.error(err.message)
        }
    }

    // fetch car details
    const fetchCars=async()=>{
        try{
            let response = await axios.get('/api/user/all-cars');
                const { data } = response;
                if(data.success)
                {
                const availableCars = (data.cars || []).filter(car => car.isAvailable);
                setCars(availableCars);
                }else{
                    toast.error(data.message)
                }
        }catch(err){
            toast.error(err.message)
        }
    }

    

    // fetch Booking owner 

    const fetchBookings=async()=>{
     try{
      setLoading(true);
      let response
      if(user?.role === 'admin')
      {
        response=await axios.get('/api/admin/booking');
      }else{
        response=await axios.get('/api/booking/owner-booking-list')
      }

      const {data}=response
      
    if(data.success){
            setBooking(data.booking);
        }else{
          toast.error(data.message)
        }
     }catch(err){
      toast.error(err.message);
     }finally{
      setLoading(false);
     }   
  }

    // logout function
    const logout=async()=>{
        localStorage.removeItem('token');
       
        setToken(null);
        setUser(null);
       
        setIsOwner(false);
        axios.defaults.headers.common['Authorization']='';
        toast.success('You have been logout');
        navigate('/');
    }

    // useEffect to retive from localstorage
    // useEffect(()=>{
        
        
        
    // },[])

    // useEffect to fetch when token avalibale
    useEffect(()=>{
        const token=localStorage.getItem('token');
        if(token)
        {
            setToken(token);
            axios.defaults.headers.common['Authorization']=`${token}`
            fetchUser();
            // fetchBookings();
        }
        fetchCars();
    },[token])

    const value={ 
        carDetails,setCarDetails,navigate,currency,axios,user,setUser,loading,setLoading,token,setToken,isOwner,setIsOwner,fetchUser,fetchCars,logout,showLogin,setShowLogin,cars,setCars,pickupDate,returnDate,setPickupDate,setReturnDate,booking,setBooking,fetchBookings,pickupCity,setPickupCity,filterCar,setFilterCar,hassearch,setHassearch,showconfirm,setShowConfirm}

    return(
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext=()=>{
    return useContext(AppContext)
}