import axios from "axios"
import * as types from "./actionTypes"


const getProducts = (params) => (dispatch) => {
    console.log(params)
    dispatch({ type: types.GET_PRODUCTS_REQUEST })
    return axios(`http://localhost:8080/products`, params).then((res) => {
        console.log(res.data)
        dispatch({ type: types.GET_PRODUCTS_SUCCESS, payload: res.data })
    }).catch((err) => {
        dispatch({ type: types.GET_PRODUCTS_FAILURE, payload: err })
    })
}


export { getProducts }