import { createSelector } from 'reselect';

export const SelectCartItems = state => state.cart.cartItems;

export const SelectCartHidden = state => state.cart.hidden;


export const selectCartItemsCount = createSelector(
    [SelectCartItems],
    cartItems => cartItems.reduce((accumalatedQuantity, cartItem) =>
        accumalatedQuantity + cartItem.quantity, 0)
);

export const selectCartTotal = createSelector(
    [SelectCartItems],
    cartItems => cartItems.reduce((accumalatedQuantity, cartItem) =>
        accumalatedQuantity + cartItem.quantity * cartItem.price, 0)
);