import { applyMiddleware, combineReducers, compose, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as ProductReducer, selectedReducers } from "./Product/reducer";

const rootReducer = combineReducers({
  ProductReducer,
  product: selectedReducers,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = legacy_createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));

export { store };
