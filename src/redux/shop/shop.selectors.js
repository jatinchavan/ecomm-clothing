import {createSelector} from "reselect";

const selectShop = state => state.shop;

export const selectShopCollection = createSelector(
    selectShop,
    (shop) => shop.collections
);

export const selectCollectionForPreview = createSelector(
    selectShopCollection,
    collections => Object.keys(collections).map(key => collections[key])
);

export const selectCollection = collectionName => {
    return createSelector(selectShopCollection, (collections) => {
        return collections[collectionName];
    })
};
