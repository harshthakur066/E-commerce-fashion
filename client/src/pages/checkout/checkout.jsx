import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CheckoutItem from "../../components/checkout/checkout-item";

import {
  SelectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart-selectos";

import "./checkout-page.scss";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button";

const CheckoutPage = ({ cartItems, total }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map((cartItem) => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <div className="total">TOTAL: Rs.{total * 75}</div>
    <div className="test-warning">
      *Please use the following test credit card for payments*
      <br />
      4242 4242 4242 4242 - Exp: "Please Enter a future date" - CVV: 123
    </div>
    <StripeCheckoutButton price={total * 75} />
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: SelectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
