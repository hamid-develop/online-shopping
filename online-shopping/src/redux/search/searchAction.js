import { searchActionType } from "./searchActionType";

const searchAction = (data) => ({
  type: searchActionType.SEARCH_FETCH,
  payload: data,
});

export default searchAction;
