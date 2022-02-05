import { categoryProductsActionTypes } from "./categoryProductsActionTypes";
const initialState = {
  loading: true,
  data: [],
  error: null,
};

export const categoryProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case categoryProductsActionTypes.GET_CATEGORY_PRODUCTS_START:
      return {
        ...state,
        loading: true,
      };
    case categoryProductsActionTypes.GET_CATEGORY_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case categoryProductsActionTypes.GET_CATEGORY_PRODUCTS_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
