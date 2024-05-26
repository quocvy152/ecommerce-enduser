import { combineReducers } from 'redux'
import productsReducer from './products'
import cartsReducer from './carts'

const rootReducer = combineReducers({
  products: productsReducer,
  carts: cartsReducer,
})

export default rootReducer