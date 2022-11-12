import *as types from "./actionTypes"

const initialState = {
    items: [],
    isLoading: false,
    isError: false,
    error: null
}

const reducer = (state = initialState, action) => {
    const { type, payload } = action
    console.log(payload);

    switch (type) {
        case types.GET_CART_ITEMS_REQUEST:
            return { ...state, isLoading: true }
        case types.GET_CART_ITEMS_SUCCESS:
            return { ...state, isLoading: false, items: payload }
            
        case types.GET_CART_ITEMS_FAILURE:
            return { ...state, isLoading: false, isError: true, error: payload }
        default:
            return state;
    }
}




export { reducer }


