import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectCollection = createSelector(
    [selectShop],
    shop => shop.collections
);