import { createSelector } from 'reselect';

const SelectCartItems = state => state.cart.cartItems;

export const SelectCartHidden = state => state.cart.hidden;


export const selectCartItemsCount = createSelector(
    [SelectCartItems],
    cartItems => cartItems.reduce((accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity, 0)

);