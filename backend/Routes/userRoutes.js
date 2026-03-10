import express from 'express';
import { getAllCars, getuserData, loginUser, registerUser, updateProfile } from '../controllers/userController.js';
import { protect } from '../middleware/auth.js';


const userRouter=express.Router();

userRouter.post('/register',registerUser);
userRouter.post('/login',loginUser);
userRouter.get('/getUserdata',protect,getuserData);
userRouter.get('/all-cars',getAllCars);
userRouter.put('/profile-update',protect,updateProfile)

export default userRouter;