import { combineReducers } from 'redux';

import GoodsReducer from './GoodsReducer';
import ItemReducer from './ItemReducer';

export default combineReducers({
    goods: GoodsReducer,
    item: ItemReducer,
  });