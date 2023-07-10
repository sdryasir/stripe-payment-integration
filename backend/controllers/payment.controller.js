import Stripe from 'stripe';
const stripe = new Stripe('sk_test_51JXUPNLs3WLhYCTdg56CD65Z1jcT8wBkMhafLMaZURw2DKgI8b9vnXvac2K7ecnWr60mlngZq0X32bxG8ZmMASVC00O68TMO2N');


export const processPayments = async (req, res, next)=>{
    const paymentIntent = await stripe.paymentIntents.create({
        amount: req.body.amount,
        currency: 'usd',
        metadata: {
            integration_check: 'accept_a_payment',
          },
      });

      res.json({
        success:true,
        client_secret: paymentIntent.client_secret
      })
}
export const sendStripeApi = async (req, res, next)=>{
    
      res.json({
        stripe_api_key: 'pk_test_51JXUPNLs3WLhYCTdb6263j1MdZgKdGAIcneTvUokHLpJl4d5dsVdRQ5AxyIKdnAeI2vA8pPOddH5s5rFkZ2x78ZS008FJnKsVC'
      })
}

