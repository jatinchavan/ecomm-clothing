import { createSelector } from "reselect";

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    selectCart,
    cart => cart.cartItems
);

export const selectCartHidden = createSelector(
    selectCart,
    cart => cart.hidden
);

export const selectCartItemsCount = createSelector(
    selectCartItems,
    cartItems => 
        cartItems.reduce((accumulatedSum, item) => accumulatedSum + item.quantity, 0)
);

export const selectCartTotalPrice = createSelector(
    selectCartItems,
    cartItems => 
        cartItems.reduce((accumulatedSum, item) => accumulatedSum + item.quantity * item.price, 0)
)