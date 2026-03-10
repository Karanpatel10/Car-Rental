import express from 'express'
import { protect } from '../middleware/auth.js'
import { adminOnly } from '../middleware/adminAuth.js';
import { getAllCars } from '../controllers/userController.js';
import { adminAllBooking,adminAllCars, adminAllUser, getDashboardData,toggleCarAvailability,deleteCar, deleteUser } from '../controllers/adminController.js';

const adminRouter=express.Router();

adminRouter.get('/dashboard',protect,adminOnly,getDashboardData);
adminRouter.get('/users',protect,adminOnly,adminAllUser);
adminRouter.get('/allcars',protect,adminOnly,adminAllCars);
adminRouter.post('/toggle-avaliblity',protect,adminOnly,toggleCarAvailability);
adminRouter.post('/deletecars',protect,adminOnly,deleteCar);
adminRouter.delete('/delete-user/:id',protect,adminOnly,deleteUser);
adminRouter.get('/booking',protect,adminOnly,adminAllBooking);

export default adminRouter;