import { categoryProductsActionTypes } from "./categoryProductsActionTypes";
import axios from "axios";
import { BASE_API } from "../../baseURL";

const getCategoryProducts = (data) => {
  return async (dispatch) => {
    try {
      const response = await axios(`${BASE_API}/products/category/${data}`);
      dispatch({
        type: categoryProductsActionTypes.GET_CATEGORY_PRODUCTS_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: categoryProductsActionTypes.GET_CATEGORY_PRODUCTS_FAILURE,
        payload: error,
      });
    }
  };
};

export default {getCategoryProducts};
