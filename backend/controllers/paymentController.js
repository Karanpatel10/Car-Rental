import Stripe from 'stripe';
const stripe_credential=new Stripe(process.env.STRIPE_SECRET_KEY) 

export  const createPaymentIntent=async(req,res)=>{

    const frontend_url = process.env.FRONTEND_URL || 'http://localhost:5173';
    
    try{
        
        const {items,metadata}=req.body;
        metadata.user=req.user._id.toString();
        const line_items=items.map((item)=>({
            price_data:{
                currency:'usd',
                product_data:{
                    name:item.name
                },
                unit_amount:item.price*100
            },
            quantity:item.quantity||1
        }))

        const session=await stripe_credential.checkout.sessions.create({
                line_items:line_items,
                mode:'payment',
                success_url:`${frontend_url}/my-bookings?success=true`,
                cancel_url:`${frontend_url}/my-bookings?success=false`,
                payment_intent_data:{
                    metadata:metadata
                }
            })
        res.status(200).json({success:true,url:session.url})
    }catch(err){
        res.json({success:false,message:err.message})
    }
}