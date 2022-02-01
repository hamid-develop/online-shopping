import { searchActionType } from "./searchActionType";

const initialState = {
  search: [],
};

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case searchActionType.SEARCH_FETCH:
      return {
        ...state,
        search: action.payload,
      };
    default:
      return state;
  }
};
