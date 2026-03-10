import stripe from 'stripe';
import Cars from '../models/Cars.js';
import Booking from '../models/Booking.js';

const stripe_credential=new stripe(process.env.STRIPE_SECRET_KEY)

export const webhookHandler=async(req,res)=>{
    console.log('Stripe webhook hit!');
    console.log('Headers:', req.headers);
    console.log('Raw body:', req.body.toString());


    const sig=req.headers['stripe-signature'];
    let event;

    try{
        event=stripe_credential.webhooks.constructEvent(req.body,sig,process.env.STRIPE_WEBHOOK_SECRET);
    }catch(err){
        return res.status(400).send(`Webhook Error: ${err.message}`);
    }
 console.log('Received event:', event.type);

    if (event.type === 'payment_intent.succeeded') {
        const paymentIntent = event.data.object;
        console.log('PaymentIntent succeeded:', paymentIntent.id);
        console.log('Metadata:', paymentIntent.metadata);
    

        try {
            // Fetch car to get owner
            const carData = await Cars.findById(metadata.car);


                await Booking.create({
                    car: metadata.car,
                    // user: metadata.userId || null, // optional, if you sent userId
                    owner: carData.owner,
                    fullname: metadata.fullname,
                    email: metadata.email,
                    phoneno: metadata.phoneno,
                    pickupDate: metadata.pickupDate,
                    returnDate: metadata.returnDate,
                    price: metadata.totalPrice,
                    address: metadata.address || '',
                    specialInstruction: metadata.specialInstruction || '',
                    payment: session.payment_intent,
                    status: 'confirmed'
                });
                    console.log(`Booking created for payment: ${session.payment_intent}`);
            } catch(err){
                    console.error("Error creating booking:", err.message);
                    return res.status(500).send("Internal Server Error"); 
            }
        }

            if(event.type==='payment_intent.canceled'){
                const paymentIntent=event.data.object;
                console.log('PaymentIntent was successful!',paymentIntent.id);
                // Handle successful payment here (e.g., update order status in database)
            }
          res.status(200).json({ received: true });

}