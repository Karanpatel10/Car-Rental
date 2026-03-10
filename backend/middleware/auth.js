import jwt from 'jsonwebtoken'
import User from '../models/User.js';

export const protect=async(req,res,next)=>{
    const token=req.headers.authorization;
    if(!token)
    {        
            // console.log("Not Authorized No Token");
             return res.json({success:'false',message:'Not Authorized'})
    }
    try{
        const decode=jwt.decode(token,process.env.JWT_SECRET)
        const userId=decode.id
        if(!userId)
        {
            console.log("Not Authorized No userId");
             return res.json({success:'false',message:'Not Authorized'})
        }
       req.user=await User.findById(userId).select("-password");
       next();
    }catch(err){
            console.log(err);
            return res.json({success:'false',message:'Not Authorized'})
    }
}

