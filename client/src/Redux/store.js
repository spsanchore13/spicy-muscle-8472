import { applyMiddleware, combineReducers, legacy_createStore } from "redux"
import thunk from "redux-thunk"
import { reducer as ProductReducer } from "./Product/reducer"
import { reducer as CartReducer } from "./Cart/reducer"


const rootReducer = combineReducers({ ProductReducer, CartReducer })
const store = legacy_createStore(rootReducer, applyMiddleware(thunk))

export { store }