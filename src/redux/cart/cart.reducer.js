import { CartActionTypes } from "./cart.types";

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

const addItemToCart = (currentCartItems, newItem) => {
    const existingItemIndex = currentCartItems.findIndex(item => item.id === newItem.id);

    // if the item already exist in the cart, then only incremenet the quantity
    if (existingItemIndex >= 0) {
        const modifiedCartItems = [...currentCartItems];
        modifiedCartItems[existingItemIndex].quantity ++;
        return modifiedCartItems;
    }

    // if new item, add it quantity set as 1
    return [...currentCartItems, { ...newItem, quantity: 1 }];
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_MINI_CART:
            return {
                ...state,
                hidden: !state.hidden
            };
        
        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            };

        default:
            return state;
    }
}

export default cartReducer; 