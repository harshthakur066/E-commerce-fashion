import React from 'react';

import CustomButton from '../custom-button/custom-button';

import './cart-dropdown.scss';

const CartDropdown = () => (
    <div className='cart-dropdown'>
        <div className='cart-itens' />
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
);

export default CartDropdown;
