import mongoose from "mongoose";

const connectDB = async () => {
    try{
            mongoose.connection.on('connected', () => {
            console.log("MongoDB connected successfully");
        });
        await mongoose.connect(`${process.env.MONGOOSE_URI}/car-rental`)
    }catch(err){
        console.log("MongoDB connection error:", err);
    }
}

export default connectDB;