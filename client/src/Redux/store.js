import { applyMiddleware, combineReducers, legacy_createStore } from "redux"
import thunk from "redux-thunk"
import { reducer as ProductReducer } from "./Product/reducer"
import { reducer as AuthReducer } from "./Authentication/reducer"

const rootReducer = combineReducers({ ProductReducer, AuthReducer })
const store = legacy_createStore(rootReducer, applyMiddleware(thunk))

export { store }