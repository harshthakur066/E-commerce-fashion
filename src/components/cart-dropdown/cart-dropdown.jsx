import React from 'react';
import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';


import CustomButton from '../custom-button/custom-button';
import CartItem from '../cart-item/cart-item';
// import { selectCartItemsCount } from '../../redux/cart/cart-selectos';
import { toggleCartHidden } from '../../redux/cart/cart-action';


import './cart-dropdown.scss';

const CartDropdown = ({ cartItems, history, dispatch }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.length ?
                    (cartItems.map(cartItem => (
                        <CartItem key={cartItem.id} item={cartItem} />)
                    ))
                    : (<span className='empty-message'>Your cart is empty</span>)
            }
        </div>
        <CustomButton onClick={() => {
            history.push('./checkout');
            dispatch(toggleCartHidden());
        }}>GO TO CHECKOUT</CustomButton>
    </div>
);

const mapStateToProps = ({ cart: { cartItems } }) => ({
    cartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));