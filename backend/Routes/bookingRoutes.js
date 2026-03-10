import express from 'express'
import { bookingList,checkAvalibiltyofCar, createBooking, updateBooking } from '../controllers/bookingController.js';
import { protect } from '../middleware/auth.js';

const bookingRouter=express.Router();

bookingRouter.post('/check-avaliblity',checkAvalibiltyofCar)
bookingRouter.post('/create-booking',protect,createBooking)
bookingRouter.get('/booking-list',protect,bookingList)
bookingRouter.post('/change-status-booking',protect,updateBooking)

export default bookingRouter