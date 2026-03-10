import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true,
    },
    password:{
        type: String,
        required:true,
    },
    email:{
        type: String,
        required:true,
        unique:true,
    },
    phone:{
        type:Number,
    },
    licenseNumber:{
        type:Number,
    },
    Address:{
        type:String,
    },
    DateOfBirth:{
        type:Date,
    },
    role:{
        type:String,
        enum:['user','admin'],
        default:'user',
    },
    image:{
        type:String,
        default:''
    },
},{timestamps:true});

const User = mongoose.model('User', userSchema);

export default User;