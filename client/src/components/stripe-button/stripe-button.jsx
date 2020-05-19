import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_nmdnmMeA6P1qpGsDF0Zrj8b300wfPRpu2B";

  const onToken = async (token) => {
    try {
      await axios.post("/checkout/payment", {
        amount: priceForStripe,
        token: token,
      });
      alert("succesful payment");
    } catch (error) {
      console.log("Payment Error: ", error);
      alert("There was an issue with your payment! ");
    }
    // axios({
    //   url: "/checkout/payment",
    //   method: "post",
    //   data: {
    //     amount: priceForStripe,
    //     token: token,
    //   },
    // })
    //   .then((response) => {
    //     alert("succesful payment");
    //   })
    //   .catch((error) => {
    //     console.log("Payment Error: ", error);
    //     alert(
    //       "There was an issue with your payment! Please make sure you use the provided credit card."
    //     );
    //   });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name=""
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      currency="INR"
      description={`Your total is Rs.${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
