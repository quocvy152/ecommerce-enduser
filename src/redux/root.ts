import { combineReducers } from 'redux'
import productsReducer from './products'
import cartsReducer from './carts'
import authReducer from './auth'

const rootReducer = combineReducers({
  products: productsReducer,
  carts: cartsReducer,
  auth: authReducer
})

export default rootReducer