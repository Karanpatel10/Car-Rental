
import Booking from "../models/Booking.js"
import Cars from "../models/Cars.js";


// Function to check avaliablity of the cars

const checkAvalibilty=async(car,pickupDate,returnDate)=>{
const bookings=await Booking.find({car,pickupDate:{$lte: returnDate},returnDate:{$gte: pickupDate}});
return bookings.length === 0;
}

// API to check availibity car for give Date and location

export const checkAvalibiltyofCar=async(req,res)=>{
    try{
        const {pickupCity,pickupDate,returnDate}=req.body
        // console.log(req.body);
        // fetch all avalible car for the location
        const cars=await Cars.find({location:pickupCity,isAvailable:true});
        // console.log(cars);
        // check car availibity give Date
        const availibleCarsPromises=cars.map(async(car)=>{
         const isAvailble=await checkAvalibilty(car,pickupDate,returnDate)
         console.log(isAvailble);
         return {...car._doc,isAvailable:isAvailble}
        })

        let availbleCars=await Promise.all(availibleCarsPromises);
        // console.log(availbleCars)
        availbleCars=availbleCars.filter(car=>car.isAvailable === true)
        res.status(201).json({success:true,message:'Availble Cars',availbleCars})
    }catch(err){
        console.log(err.message);
        res.json({success:false,message:err.message})
    }
}

// API to create Bookings

export const createBooking=async(req,res)=>{
    try{
        const {_id}=req.user;
        const {car,fullname,email,phoneno,pickupDate,returnDate}=req.body;
         
        const isAvailble=await checkAvalibilty(car,pickupDate,returnDate)
        if(!isAvailble)
        {
            return res.json({success:false,message:'Car not Availble'})
        }
       const carData=await Cars.findById(car);
        // Caluculate based on pickup and retund date price
        const noofDays=Math.ceil(((new Date(returnDate))-(new Date(pickupDate)))/(1000*60*60*24));
        const totalPrice=carData.pricePerDay*noofDays;

        // await Booking.create({car,user:_id,owner:carData.owner,fullname,email,phoneno,pickupDate,returnDate,price:totalPrice});
        res.status(200).json({success:true,message:'Car Booked Successfully'});

        
    }catch(err){
        console.log(err);
        res.json({success:false,message:err.message})
    }
}

// API to get all Booking

export const bookingList=async(req,res)=>{
    try{
        const {_id}=req.user;
        const bookings=(await Booking.find({user:_id}).populate("car").sort({createdAt:-1}));
        res.status(201).json({success:true,bookings})
    }catch(err){    
        console.log(err.message);
        res.json({success:false,message:err.message})
    }
}



// API to update booking status

export const updateBooking=async(req,res)=>{
    try{
        const {_id}=req.user;
        const role=req.user.role;
       
        const {bookingId,status}=req.body;
        console.log(_id,bookingId,status);
        const updatebooking=await Booking.findById(bookingId);
        console.log(updatebooking);
        if(((updatebooking.owner.toString()) !== _id.toString()) && (role !== 'admin')){
             return res.json({success:false,message:'Not Authorized'})
        }
        updatebooking.status=status;
        await updatebooking.save();
        res.status(201).json({success:true,message:'Booking Status updated'})
    }catch(err){
        console.log(err.message);
        res.json({success:false,message:err.message})
    }
}