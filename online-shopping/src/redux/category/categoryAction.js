import { categoryActionTypes } from "./categoryActionTypes";
import { BASE_API } from "../../baseURL";
import axios from "axios";

const getCategory = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${BASE_API}/products/categories`);
      dispatch({
        type: categoryActionTypes.GET_CATEGORY_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: categoryActionTypes.GET_CATEGORY_FAILURE,
        payload: error,
      });
    }
  };
};

export default {getCategory};
