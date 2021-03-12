import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IUHwZFfUg9xgsDpFcIo7t0QqKWqwHZjLFRsTuuAGRExjZn729sT4AaUMY2RtNVx2m9tIeVXBiButhQYvBPhBXDR00MfvQEuFE';
    const onToken = token => {
        console.log(token);
        alert('Payment Succeful')
    }
    return (
        <StripeCheckout 
        label='Pay now'
        name='Crown Clothing Ltd.'
        billingAddress
        shippingAddress
        image='https://sendeyo.com/up/d/f3eb2117da'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay now'
        token={onToken}
        stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton