import * as types from "./actionTypes"

const initialState = {
    products: [],
    isLoading: false,
    isError: false,
    error: null
}


const reducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case types.GET_PRODUCTS_REQUEST:
            return { ...state, isLoading: true }
        case types.GET_PRODUCTS_SUCCESS:
            return { ...state, isLoading: false, products: payload }
        case types.GET_PRODUCTS_FAILURE:
            return { ...state, isLoading: false, isError: true, error: payload }
        default:
            return { state }
    }
}


export { reducer }