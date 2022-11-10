import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as ProductReducer, selectedReducers } from "./Product/reducer";

const rootReducer = combineReducers({
  ProductReducer,
  product: selectedReducers,
});
const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export { store };
