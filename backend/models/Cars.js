import mongoose from "mongoose";
const {ObjectId}=mongoose.Schema.Types

const carSchema=new mongoose.Schema({
    owner:{
        type:ObjectId,ref:'User'
    },
    brand:{type:String,required:true},
    model:{type:String,required:true},
    image:[{type:String,required:true}],
    year:{type:Number,required:true},
    category: { type: String, enum: ['SUV', 'Sedan', 'Hatchback'], required: true },
    seating_capacity:{type:Number,required:true},
    fuelType: { type: String, enum: ['Petrol','Diesel','Electric','Hybrid'], required: true },
    transmission: { type: String, enum: ['Automatic','Manual','Semi-Automatic'], required: true },
    pricePerDay:{type:Number,required:true}, 
    location:{type:String,required:true},
    description:{type:String,required:true},
    isAvailable:{type:Boolean,required:true,default:true},
},{timestamps:true})

const Cars=mongoose.model('Cars',carSchema)

export default Cars;