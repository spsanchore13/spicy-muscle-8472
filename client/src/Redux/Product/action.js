import axios from "axios"
import * as types from "./actionTypes"


const getProducts = () => (dispatch) => {
    dispatch({ type: types.GET_PRODUCTS_REQUEST })
    return axios.get("http://localhost:8080/products").then((res) => {
        console.log(res)
        dispatch({ type: types.GET_PRODUCTS_SUCCESS, payload: res.data })
    }).catch((err) => {
        dispatch({ type: types.GET_PRODUCTS_FAILURE, payload: err })
    })
}

const deleteProducts = () => dispatch => {

}
const updateProducts = () => dispatch => {

}
export { getProducts, deleteProducts, updateProducts }
