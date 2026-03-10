import stripe from 'stripe';
import {webhookHandler} from '../controllers/webhookController.js';
import express from 'express';

const webhookRouter=express.Router();

webhookRouter.post("/",express.raw({type:'application/json'}),webhookHandler)

export default webhookRouter;