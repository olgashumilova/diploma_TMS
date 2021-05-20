import { ACTION_TYPES } from '../const';

export const initialState = {
  goods: [],
  loading: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    
    case ACTION_TYPES.GET_GOODS_START: {
      return {
        ...state,
        goods: action.payload,
        loading: true
      }
    }
    case ACTION_TYPES.GET_GOODS_SUCCESS: {
      return {
        ...state,
        goods: action.payload,
        loading: false,
      }
    }
    case ACTION_TYPES.GET_GOODS_FAILURE: {
      return {
        ...state,
        loading: false,
      }
    }

    default: return state;
  }
}