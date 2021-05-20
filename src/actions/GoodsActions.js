import axios from 'axios'
import { ACTION_TYPES } from '../const';

const getGoodsStart = () => ({
  type: ACTION_TYPES.GET_GOODS_START,
});

const getGoodsSuccess = (goods) => ({
  type: ACTION_TYPES.GET_GOODS_SUCCESS,
  payload: goods,
});

const getGoodsFailure = (err) => {
  return {
    type: ACTION_TYPES.GET_GOODS_FAILURE,
    payload: err,
  }
}

export const getGoods = () => {
  
  return async (dispatch) => {
  
    dispatch({
      type: ACTION_TYPES.GET_GOODS_START,
    });

    try {
      await axios.get('http://localhost:3001/goods').then((response) => {
        dispatch(getGoodsSuccess(response.data));
      })
    } catch (err) {
      dispatch(getGoodsFailure(err));
    }
    
  }

}