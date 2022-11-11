
import { applyMiddleware, combineReducers, compose, legacy_createStore } from "redux";
import { reducer } from "./reducer"

export const store  =legacy_createStore(
    reducer,
    window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_()
)


import thunk from "redux-thunk";
import { reducer as ProductReducer, selectedReducers } from "./Product/reducer";

const rootReducer = combineReducers({
  ProductReducer,
  product: selectedReducers,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = legacy_createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));

export { store };

