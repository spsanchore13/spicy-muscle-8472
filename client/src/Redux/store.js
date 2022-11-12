import {legacy_createStore,applyMiddleware,combineReducers} from "redux"
import thunk from "redux-thunk"
import { reducer } from "./app/reducer"
// import { reducer as DetailReducer } from "./detail/reducer"

// const rootReducer = combineReducers({AppReducer,DetailReducer})
export const store = legacy_createStore(reducer,applyMiddleware(thunk))