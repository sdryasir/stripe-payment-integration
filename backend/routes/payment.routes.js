import express from 'express';
const router = express.Router();
import {processPayments, sendStripeApi} from  '../controllers/payment.controller.js';

router.route('/payment/process').post(processPayments);
router.route('/stripeApi').get(sendStripeApi);


export default router;
