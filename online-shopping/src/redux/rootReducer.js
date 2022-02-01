import {combineReducers} from 'redux'
import { productsReducer } from './products/productsReducer'
import { searchReducer } from './search/searchReducer'

export default combineReducers({
    productsReducer,
    searchReducer,
})