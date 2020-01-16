import { createSelector } from 'reselect';
import { object } from 'prop-types';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectCollection = collectionUrlParam => createSelector(
    [selectCollections],
    collections => collections[collectionUrlParam]
);

export const selectCollectionForPreview = createSelector(
    [selectCollections],
    collections => object.keys(collections).map(key => collections[key])
);