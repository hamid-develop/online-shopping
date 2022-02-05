import { categoryActionTypes } from "./categoryActionTypes";

const initialState = {
  loading: true,
  data: [],
  error: null,
};

export const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case categoryActionTypes.GET_CATEGORY_START:
      return {
        ...state,
        loading: true,
      };
    case categoryActionTypes.GET_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case categoryActionTypes.GET_CATEGORY_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
