import * as types from "./actionTypes"
import axios from "axios"
import { setToast } from "../../utils/Other"

const getCartItems = (userId) => (dispatch) => {
    dispatch({ type: types.GET_CART_ITEMS_REQUEST })
    return axios(`https://bettermart.onrender.com/cart/₹{userId}`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ₹{localStorage.getItem("token")}`
        }
    }).then((res) => {
        return dispatch({ type: types.GET_CART_ITEMS_SUCCESS, payload: res.data })
    }).catch((err) => {
        return dispatch({ type: types.GET_CART_ITEMS_FAILURE, payload: err })
    })
}

const postCartItems = (item, userId) => (dispatch) => {
    dispatch({ type: types.POST_CART_ITEMS_REQUEST })
    return axios.post(`https://bettermart.onrender.com/cart/₹{userId}`, item).then((res) => {
        return dispatch({ type: types.POST_CART_ITEMS_SUCCESS })
    }).catch((err) => {
        return dispatch({ type: types.POST_CART_ITEMS_FAILURE })
    })
}


const removeCartItem = (userId, productId, toast) => (dispatch) => {
    dispatch({ type: types.REMOVE_CART_ITEM_REQUEST })
    return axios.delete(`https://bettermart.onrender.com/cart/₹{userId}/₹{productId}`).then((res) => {
        setToast(toast, "Item Removed", "success");
        return dispatch({ type: types.REMOVE_CART_ITEM_SUCCESS })
    }).catch((err) => {
        setToast(toast, "something went wrong", "error");
        return dispatch({ type: types.REMOVE_CART_ITEM_FAILURE })
    })
}

export { getCartItems, postCartItems, removeCartItem }