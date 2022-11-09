import axios from "axios"
import * as types from "./actionTypes"


const getProducts = () => (dispatch) => {
    dispatch({ type: types.GET_PRODUCTS_REQUEST })
    return axios("http://localhost:8080/products").then((res) => {
        dispatch({ type: types.GET_PRODUCTS_SUCCESS, payload: res.data })
    }).catch((err) => {
        dispatch({ type: types.GET_PRODUCTS_FAILURE, payload: err })
    })
}
