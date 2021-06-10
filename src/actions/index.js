import { ACTION_TYPES } from '../const'

export const addItemToCart = (item) => ({
    type: ACTION_TYPES.ADD_ITEM,
    payload: item,
});

export const removeItemFromCart = (index) => ({
    type: ACTION_TYPES.REMOVE_ITEM,
    payload: index ,
});

export const decreaseQuantity = (item) => ({
    type: ACTION_TYPES.DECREASE_ITEM,
    payload: item,
});

export const increaseQuantity = (item) => ({
    type: ACTION_TYPES.INCREASE_ITEM,
    payload: item,
});

export const clearCart = (item) => ({
    type: ACTION_TYPES.CLEAR_CART,
    payload: item,
});