import axios from 'axios';
import { ACTION_TYPES } from '../const';

export const getItem = (index) => {
  return async (dispatch) => {

    dispatch({
      type: ACTION_TYPES.GET_ITEM_START,
    });

    try {
      const response = await axios.get(`http://localhost:3001/goods/${index}`);
      
      dispatch({
        type: ACTION_TYPES.GET_ITEM_SUCCESS,
        payload: response.data,
      });

    } catch (err) {
      console.log(err);
      dispatch({
        type: ACTION_TYPES.GET_ITEM_FAILURE,
        payload: err.response.message,
      });
    }
  }
}