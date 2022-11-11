import axios from "axios"
import * as types from "./actionTypes"


export const getProducts = (params) => (dispatch) => {
    console.log(params)
    dispatch({ type: types.GET_PRODUCTS_REQUEST })
    return axios("http://localhost:8080/products", params).then((res) => {
        dispatch({ type: types.GET_PRODUCTS_SUCCESS, payload: res.data })
    }).catch((err) => {
        dispatch({ type: types.GET_PRODUCTS_FAILURE, payload: err })
    })
}

export const selectedProducts = (data) => {
    return {
      type: types.SELECTED_PRODUCT,
      payload: data,
    };
  };
  
  export const removeSelectedProducts = () => {
    return {
      type: types.REMOVE_SELECTED_PRODUCT,
    };
  };
