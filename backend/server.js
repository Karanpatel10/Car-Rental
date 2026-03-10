import express from 'express';
import cors from 'cors';
import "dotenv/config";
import connectDB from './configs/db.js';
import userRouter from './Routes/userRoutes.js'
import ownerRoute from './Routes/ownerRoutes.js';
import bookingRouter from './Routes/bookingRoutes.js';
import adminRouter from './Routes/adminRouters.js';
import paymentRouter from './Routes/paymentRouters.js';
import webhookRouter from './Routes/webhookRouters.js';

// initialize express app
const app = express();



// middleware
app.use(cors({
  origin: true,   // allow all devtunnel origins
  credentials: true
}));


// webhook route
app.use('/api/webhook',webhookRouter);
app.use(express.json());

// sample route
app.get('/', (req, res) => {
    res.send('Server is running');
});

// connect to database
await connectDB();

app.use('/api/admin',adminRouter)
app.use('/api/user',userRouter)
app.use('/api/owner',ownerRoute)
app.use('/api/booking',bookingRouter)
app.use('/api/payment',paymentRouter)

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});