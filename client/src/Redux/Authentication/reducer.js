import * as types from "./actionType"

const initialState = {
    isAuth: false,
    isLoading: false,
    isError: false,
    registerUser: []
}


const reducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case types.SIGNUP_REQUEST:
            return { ...state, isLoading: true }
        case types.SIGNUP_SUCCESS:
            return { ...state, isLoading: false, registerUser: payload }
        case types.SIGNUP_FAILURE:
            return { ...state, isLoading: false, isError: true }
        default:
            return { state }
    }
}


export { reducer }