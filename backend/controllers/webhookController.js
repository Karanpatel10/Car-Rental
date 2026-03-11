import Stripe from 'stripe';
import Cars from '../models/Cars.js';
import Booking from '../models/Booking.js';

const stripe_credential = new Stripe(process.env.STRIPE_SECRET_KEY);

export const webhookHandler = async (req, res) => {
  const sig = req.headers['stripe-signature'];
  let event;

  try {
    event = stripe_credential.webhooks.constructEvent(
      req.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.error('Webhook signature verification failed:', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  console.log('Received event:', event.type);

  if (event.type === 'payment_intent.succeeded') {
    const paymentIntent = event.data.object;
    const metadata = paymentIntent.metadata;

    try {
      const carData = await Cars.findById(metadata.car);
      if (!carData) {
        console.error('Car not found:', metadata.car);
        return res.status(400).send('Car not found');
      }

      const booking = await Booking.create({
        car: metadata.car,
        user: metadata.user,
        owner: carData.owner,
        fullname: metadata.fullname,
        email: metadata.email,
        phoneno: metadata.phoneno,
        pickupDate: new Date(metadata.pickupDate),
        returnDate: new Date(metadata.returnDate),
        price: Number(metadata.totalPrice),
        address: metadata.address || '',
        specialInstruction: metadata.specialInstruction || '',
        payment: paymentIntent.id,
        status: 'confirmed'
      });

      console.log('Booking created:', booking._id);
      return res.status(200).json({ received: true });
    } catch (err) {
      console.error('Error creating booking:', err);
      return res.status(500).send('Internal Server Error');
    }
  } else {
    res.status(200).json({ received: true });
  }
};