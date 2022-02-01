import { productsActionTypes } from "./productsActionTypes";

const initialState = {
  loading: true,
  data: [],
  error: null,
};

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case productsActionTypes.GET_PRODUCTS_START:
      return {
        ...state,
        loading: true,
      };
    case productsActionTypes.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case productsActionTypes.GET_PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
