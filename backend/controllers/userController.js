import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Cars from "../models/Cars.js";

// generate JWT token
const generateToken=(userId)=>{
   
    const token=jwt.sign({id:userId},process.env.JWT_SECRET,{
        expiresIn:'7d'
    });
    return token;
}
 
// Create new User
 export const  registerUser=async(req,res)=>{
    try{
        const {name,email,password}=req.body;

        // check all field are filled
        if(!name || !email || !password || password.length<8){
            return res.json({success:false, message: "Password to weak !"});
        }

        // check if user already exists
        const userExists=await User.findOne({
            email:email
        }) 
         if(userExists){
            return res.json({success:false, message: "User already exists" });
         }

         const hashpassword=await bcrypt.hash(password,10);

        //  create user
        const user=await User.create({
            name,
            email,
            password: hashpassword
        });
        const token=generateToken(user._id).toString();
        res.status(201).json({success:true, message: "User registered successfully",token});

    }catch(err){
        console.log(err.message);
        res.status(500).json({success:false,message: err.message });
    }
 }

//  Login User

export const loginUser=async(req,res)=>{
    try{
        const {email,password}=req.body;
        const user=await User.findOne({email});
        if(!user)
        {
             return res.json({sucess:false,message:'User not found'})
        }
        const isMatch=await bcrypt.compare(password,user.password);
       
        if(!isMatch)
        {
            return res.json({success:false,message:'Password did match! Try again'})
        }
         const token=generateToken(user._id).toString();
        res.status(201).json({success:true,message:'Successfully Login',token})

    }catch(err)
    {
        console.log(err.message);
        res.status(500).json({success:false,message:err.message});
    }
}

// get User data

export const getuserData=async(req,res)=>{
    try{
        const {user}=req;
        res.status(201).json({success:true,message:'User information',user})
    }catch(err){
        console.log(err.message);
        res.status(500).json({success:false,message:'Error to get user Data'})
    }
}

// to get all Cars

export const getAllCars=async(req,res)=>{
    try{
         const cars=await Cars.find({isAvailable:true});
        res.status(200).json({success:true,message:'All Cars data',cars})
    }catch(err){
        console.log(err.message);
        res.status(500).json({success:false,message:'Error to get all Cars'})
    }
}


// to update user profile

export const updateProfile=async(req,res)=>{
    try{
        const {user}=req;
        const {phone,licenseNumber,Address,DateOfBirth}=req.body;
        const updateData=await User.findByIdAndUpdate(user._id,{phone:phone,licenseNumber:licenseNumber,Address:Address,DateOfBirth:DateOfBirth})
        res.status(200).json({success:true,message:'Profile updated successfully',user:updateData})
    }catch(err){
        console.log(err.message);
        res.status(500).json({success:false,message:'Error to update profile'})
    }   
}