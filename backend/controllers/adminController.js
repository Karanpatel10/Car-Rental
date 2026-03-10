import Cars from "../models/Cars.js"
import Booking from "../models/Booking.js"
import User from "../models/User.js"

export const adminAllCars=async(req,res)=>{
    const cars=await Cars.find().populate("owner");
    res.json({success:true,cars:cars});
}

export const adminAllBooking=async(req,res)=>{
    const booking=await Booking.find().populate("user").populate("car");
    res.json({success:true,booking:booking});
}

export const adminAllUser=async(req,res)=>{
    const alluser=await User.find({ role: { $ne: "admin" }});
    res.json({success:true,alluser});
}

export const getDashboardData=async(req,res)=>{
    try{
       const car=await Cars.find();
       const bookings=await Booking.find().populate('car').sort({createdAt:-1});
       const pendingbooking=bookings.filter(b=>b.status === 'pending')
       const conformbooking=bookings.filter(b=>b.status === 'confirmed')
       
    //    Calculate monthly revenue
       const totalMonthlyRevenue=bookings.filter(b=>b.status === 'confirmed').reduce((acc,b)=>acc+b.price,0)

       const dashboardData={
        totalCars:car.length,
        totalBooking:bookings.length,
        pendingBooking:pendingbooking.length,
        conformedBooking:conformbooking.length,
        recentBooking:bookings.slice(0,4),
        totalMonthlyRevenue
       }
       res.status(201).json({success:true,dashboardData})
    }catch(err){
        console.log(err.message);
        res.json({success:false,message:"failed to get owner's dashboard data"})
    }
}


// to togglwee car's availability

export const toggleCarAvailability=async(req,res)=>{
    try{
        const {carId}=req.body;
        const car=await Cars.findById(carId);
        car.isAvailable=!car.isAvailable;
        await car.save();
        res.status(200).json({success:true,message:"car availability toggled successfully",cars:car})
    }catch(err){
        console.log(err.message);
        res.status(400).json({success:false,message:"failed to toggle car availability"})
    }
}

// to Delete Car
export const deleteCar=async(req,res)=>{
    try{
       
        const {carId}=req.body;
        const car=await Cars.findById(carId);
        car.owner=null;
        car.isAvailable=false;
        await car.save();
        res.status(200).json({success:true,message:"Owner car Removed successfully "})
    }catch(err){
        console.log(err.message);
        res.status(400).json({success:false,message:"failed to delete car"})
    }
}

// to delete User
export const deleteUser=async(req,res)=>{
    try{
        const {id}=req.params;
        await User.findByIdAndDelete(id);
        res.status(200).json({success:true,message:"User deleted successfully "})
    }catch(err){
        console.log(err.message);
        res.status(400).json({success:false,message:"failed to delete user"})
    }
}