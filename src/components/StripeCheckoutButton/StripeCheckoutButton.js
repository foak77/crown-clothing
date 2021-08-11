import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51JN5KoJdSyLUkWIKUjFoFUEf816L57mIoe7q8xJApktcPXMv54sBxadljkXBPeeVF3OgMgIhNLdAlfI1GuiDnQIE00vHPCjlq3';

    const onToken = token =>{
        console.log(token);
        alert('Payment Successful');
    }

    return(
        <StripeCheckout
            label ='Pay Now'
            name = 'crown-clothing'
            billingAddress
            shippingAddress
            image= 'https://svgshare.com/i/CUz.svg'
            description = {`Your total is $${price}`}
            amount = {priceForStripe}
            panelLabel = 'Pay Now'
            token = {onToken}
            stripeKey = {publishableKey}
        />
    )
}

export default StripeCheckoutButton;
