import { ACTION_TYPES } from '../const';

const initialState = {
  itemData: {},
  loading: false,
}

export default (state = initialState, action) => {
  switch (action.type) {

    case ACTION_TYPES.GET_ITEM_START: {
      return {
        ...state,
        loading: true,
      }
    }

    case ACTION_TYPES.GET_ITEM_SUCCESS: {
      return {
        ...state,
        itemData: action.payload,
        loading: false,
      }
    }

    case ACTION_TYPES.GET_ITEM_FAILURE: {
      return {
        ...state,
        loading: false,
      }
    }

    default: return state;
  }
}