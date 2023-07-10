import React from 'react'
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement
} from '@stripe/react-stripe-js';

function Payment() {
  return (
    <div>
        <form>
            <CardNumberElement type="text" />
            <CardExpiryElement type="text" />
            <CardCvcElement type="text" />
            <button type='submit'>Pay</button>
        </form>
    </div>
  )
}

export default Payment