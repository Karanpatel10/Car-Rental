import mongoose from "mongoose";
const {ObjectId}=mongoose.Schema.Types;

const bookingSchema =new mongoose.Schema({
 car:{ type:ObjectId,ref:'Cars',required:true },
 user:{ type:ObjectId,ref:'User',required:true },
 owner:{ type:ObjectId,ref:'User',required:true },
 fullname:{type:String,required:true},
 email:{type:String,required:true},
 phoneno:{type:Number,required:true},
 pickupDate:{ type:Date,required:true },
 returnDate:{ type:Date,required:true },
 price:{ type:Number,required:true },
 address: { type: String },
 specialInstruction: { type: String },
 payment:{type:String,default:'unpaid'},
 status:{ type:String,enum:['pending','cancelled','confirmed'],default:'pending'}
},{ timestamps: true})

const Booking = mongoose.model("Booking", bookingSchema);

export default Booking;