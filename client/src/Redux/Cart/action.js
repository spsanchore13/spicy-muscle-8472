import * as types from "./actionTypes"
import axios from "axios"

const getCartItems = (userId) => (dispatch) => {
    dispatch({ type: types.GET_CART_ITEMS_REQUEST })
    return axios(`http://localhost:8080/cart/${userId}`).then((res) => {
        return dispatch({ type: types.GET_CART_ITEMS_SUCCESS, payload: res.data })
    }).catch((err) => {
        return dispatch({ type: types.GET_CART_ITEMS_FAILURE, payload: err })
    })
}

const postCartItems = (item, userId) => (dispatch) => {
    dispatch({ type: types.POST_CART_ITEMS_REQUEST })
    return axios.post(`http://localhost:8080/cart/${userId}`, item).then((res) => {
        return dispatch({ type: types.POST_CART_ITEMS_SUCCESS })
    }).catch((err) => {
        return dispatch({ type: types.POST_CART_ITEMS_FAILURE })
    })
}


const removeCartItem = (userId, productId) => (dispatch) => {
    dispatch({ type: types.REMOVE_CART_ITEM_REQUEST })
    return axios.delete(`http://localhost:8080/cart/${userId}/${productId}`).then((res) => {
        return dispatch({ type: types.REMOVE_CART_ITEM_SUCCESS })
    }).catch((err) => {
        return dispatch({ type: types.REMOVE_CART_ITEM_FAILURE })
    })
}

export { getCartItems, postCartItems, removeCartItem }