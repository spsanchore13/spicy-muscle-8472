import { applyMiddleware, combineReducers, compose, legacy_createStore } from "redux";
import thunk from "redux-thunk"
import { reducer as ProductReducer } from "./Product/reducer"
import { reducer as CartReducer } from "./Cart/reducer"
import { reducer as AuthReducer } from "./Authentication/reducer"


const rootReducer = combineReducers({ ProductReducer, AuthReducer, CartReducer})
  

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = legacy_createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));
export { store };



