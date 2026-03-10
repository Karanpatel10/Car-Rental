import User from "../models/User.js";
import fs from 'fs';
import Cars from "../models/Cars.js";
import imagekit from "../configs/imageKit.js";
import Booking from "../models/Booking.js";



// to change role of user

export const changeRoleOwner=async(req,res)=>{
    try{
        const {_id}=req.user;
        await User.findByIdAndUpdate(_id,{role:"owner"});
        res.status(201).json({success:true,message:'Now you can list Cars'})
    }catch(err){
        console.log(err.message);
        res.status(400).json({success:false,message:'Failed to Change Role'})
    }
}

// to list a car

export const addCar=async(req,res)=>{
    const imageUrls=[];
    try{
        const {_id}=req.user;
        const car=JSON.parse(req.body.carData);

        for(const file of req.files){
                const uploadResponse=await imagekit.files.upload({
                    file:fs.createReadStream(file.path),
                    fileName:file.originalname,
                    folder:'/cars',
                });
                const imageurl=imagekit.helper.buildSrc({
                    urlEndpoint:process.env.IMAGEKIT_URL,
                    src:uploadResponse.filePath,
                    transformation:[
                        {width:'1280'},
                        {quality:'auto'},
                        {format:'auto'}
                    ]
                });
                 imageUrls.push(imageurl);
        }  

        await Cars.create({...car,owner:_id,image:imageUrls});
        res.status(201).json({success:true,message:'Car added successfully'})

    }catch(err){
        console.log(err.message);
        res.status(400).json({success:false,message:err.message})
    }
}

// to get all cars listed by owner

export const getOwnerCars=async(req,res)=>{
    try{
        const {_id}=req.user;
        const cars=await Cars.find({owner:_id});
        res.status(200).json({success:true,message:"Fetch All owner's Cars list",cars})
    }catch(err){
        console.log(err.message);
        res.status(400).json({success:false,message:"failed to fetch owner's cars list"})
    }
}

// to togglwee car's availability

export const toggleCarAvailability=async(req,res)=>{
    try{
        const {_id}=req.user;
        const {carId}=req.body;
        const car=await Cars.findById(carId);
        if(car.owner.toString()!==_id.toString()){
            return res.status(404).json({success:false,message:"not authorized to toggle this car availability"})
        }
        car.isAvailable=!car.isAvailable;
        await car.save();
        res.status(200).json({success:true,message:"car availability toggled successfully"})
    }catch(err){
        console.log(err.message);
        res.status(400).json({success:false,message:"failed to toggle car availability"})
    }
}

// to delete a car by owner

export const deleteCar=async(req,res)=>{
    try{
        const {_id}=req.user;
        const {carId}=req.body;
        const car=await Cars.findById(carId);
        if(car.owner.toString()!==_id.toString()){
            return res.status(404).json({success:false,message:"not authorized to delete this car"})
        }
        // because still it show history booked required car data
        car.owner=null;
        car.isAvailable=false;
        await car.save();
        res.status(200).json({success:true,message:"Owner car Removed successfully "})
    }catch(err){
        console.log(err.message);
        res.status(400).json({success:false,message:"failed to delete car"})
    }
}

// API to get Dashboard Data for Owner

export const getOwnerDashboardData=async(req,res)=>{
    try{
        const {_id,role}=req.user;
       if(role!=="owner"){
        return res.status(403).json({success:false,message:"Not Authorized to access"})
       } 
       const car=await Cars.find({owner:_id});
    
       const bookings=await Booking.find({owner:_id}).populate('car').sort({createdAt:-1});
       
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

// change owner profile picture 
 
export const updateProfileImage=async(req,res)=>{
    try{
        const{_id}=req.user;
         const uploadResponse=await imagekit.files.upload({
            file:fs.createReadStream(req.file.path),
            fileName:req.file.originalname,
            folder:'/user'
        })

        const imageurl=imagekit.helper.buildSrc({
            urlEndpoint:process.env.IMAGEKIT_URL,
            src:uploadResponse.filePath,
            transformation:[
                {width:'400'},
                {quality:'auto'},
                {format:'auto'}
            ]
        });
     
        await User.findByIdAndUpdate(_id,{image:imageurl});
        res.status(201).json({success:true,message:'Profile image Update'})

    }catch(err){
        console.log(err.message);
        res.status(400).json({success:false,message:err.message})
    }
}

// API to get booking list for Owner

export const bookingListOwner=async(req,res)=>{
    try{
        if(req.user.role !== 'owner')
        {
            return res.json({success:false,message:'Not Authorized'})
        }
        const booking=await Booking.find({owner:req.user.id}).populate('car').populate('user').select("-user.password").sort({createdAt:-1});
        res.status(201).json({success:true,booking:booking})
    }catch(err){
        console.log(err.message);
        res.json({success:false,message:err.message})
    }
}