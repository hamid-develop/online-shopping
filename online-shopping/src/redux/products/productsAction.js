
import axios from "axios";
import { BASE_API } from "../../baseURL";
import { productsActionTypes } from "./productsActionTypes";

const productsAction = () => {
  return async dispatch => {
    try {
      dispatch({ type: productsActionTypes.GET_PRODUCTS_START });
      const response = await axios.get(`${BASE_API}/products`);
      console.log(response)
      dispatch({
        type: productsActionTypes.GET_PRODUCTS_SUCCESS,
        payload: response.data,
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: productsActionTypes.GET_PRODUCTS_FAILURE,
        payload: err,
      });
    }
  };
};

export default productsAction
