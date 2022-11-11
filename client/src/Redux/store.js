import { legacy_createStore} from "redux"
import { reducer } from "./reducer"


export const store  =legacy_createStore(
    reducer,
    window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_()
)