import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51Io2lPSCHr7oeK4WMIIidJcgX8uhh4hRBBIMBuRIykUyDSJ3jSGDZahi6AXqXpzr1NWNz0Wrsg2F6Owvl5hhaP1m00I7tIM6nu';

    const onTokenHandler = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout 
        label= 'Pay Now'
        name= 'Ecomm Clothing Ltd.'
        billingAddress
        shippingAddress
        image=''
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onTokenHandler}
        stripeKey={publishableKey}
        />
    )
}

export default StripeButton;