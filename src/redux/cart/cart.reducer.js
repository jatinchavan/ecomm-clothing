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
};

const removeItem = (currentCartItems, itemToRemove) => {
    const existingItemIndex = currentCartItems.findIndex(item => item.id === itemToRemove.id);

    // if only one quantity present for that item in cart/checkout then remove
    if (currentCartItems[existingItemIndex].quantity === 1) {
        return currentCartItems.filter(item => item.id !== itemToRemove.id);
    }

    const modifiedCartItems = [...currentCartItems];
    modifiedCartItems[existingItemIndex].quantity --;
    return modifiedCartItems;
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
        
        case CartActionTypes.REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeItem(state.cartItems, action.payload)
            }

        case CartActionTypes.CLEAR_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item.id !== action.removeID) // does not return the item that we need to remove
            }
        

        default:
            return state;
    }
}

export default cartReducer; 