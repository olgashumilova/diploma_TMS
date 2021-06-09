import { ACTION_TYPES } from '../const';

export const initialState = {
  cart: [],
  totalQuantity: 0,
}

const reducer = (state = initialState, action) => {

  console.log(state.cart)

  switch (action.type) {
    
    case ACTION_TYPES.ADD_ITEM: {
      return {
        ...state,
        cart: [...state.cart, action.payload],
        totalQuantity: state.totalQuantity + 1,
      }
    }
    case ACTION_TYPES.DECREASE_ITEM: {
      return {
        ...state,
        cart: [...state.cart, action.payload],
        totalQuantity: state.totalQuantity - 1,
      }
    }
    case ACTION_TYPES.INCREASE_ITEM: {
      return {
        ...state,
        cart: [...state.cart, action.payload],
        totalQuantity: state.totalQuantity + 1,
      }
    }
    case ACTION_TYPES.REMOVE_ITEM: {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
        totalQuantity: state.totalQuantity - 1,
      }
    }
    case ACTION_TYPES.CLEAR_CART: {
      return { 
        ...state, 
        cart: [],
        totalQuantity: 0
      }
    }
    default: return state;
  }
}

export default reducer