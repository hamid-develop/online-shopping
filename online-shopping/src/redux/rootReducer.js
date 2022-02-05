import { combineReducers } from "redux";
import { productsReducer } from "./products/productsReducer";
import { searchReducer } from "./search/searchReducer";
import { categoryReducer } from "./category/categoryReducer";
import { categoryProductsReducer } from "./categoryProducts/categoryProductsReducer";

export default combineReducers({
  productsReducer,
  searchReducer,
  categoryReducer,
  categoryProductsReducer
});
