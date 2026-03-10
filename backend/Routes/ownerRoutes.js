import express from 'express';
import { protect } from '../middleware/auth.js';
import { addCar,bookingListOwner,changeRoleOwner, deleteCar, getOwnerCars, getOwnerDashboardData, toggleCarAvailability, updateProfileImage } from '../controllers/ownerContorller.js';
import upload from '../middleware/multer.js';

const ownerRoute=express.Router();

ownerRoute.post('/change-role',protect,changeRoleOwner);
ownerRoute.post('/add-car',protect,upload.array("image",4),addCar);
ownerRoute.get('/allcars',protect,getOwnerCars);
ownerRoute.post('/toggle-avaliblity',protect,toggleCarAvailability);
ownerRoute.post('/deletecars',protect,deleteCar);
ownerRoute.get('/dashboard',protect,getOwnerDashboardData);
ownerRoute.get('/booking',protect,bookingListOwner)
ownerRoute.post('/updateProfile',protect,upload.single("image"),updateProfileImage);

export default ownerRoute;