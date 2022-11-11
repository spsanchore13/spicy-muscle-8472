import axios from "axios";
import * as types from "./actionTypes";

export const getProducts = (params) => (dispatch) => {
  console.log(params);
  dispatch({ type: types.GET_PRODUCTS_REQUEST });
  return axios("http://localhost:8080/products", params)
    .then((res) => {
      dispatch({ type: types.GET_PRODUCTS_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: types.GET_PRODUCTS_FAILURE, payload: err });
    });
};

export const getShoesProducts = () => (dispatch) => {
  // console.log(params)
  dispatch({ type: types.GET_PRODUCTS_REQUEST });
  return axios("http://localhost:8080/products/shoes")
    .then((res) => {
      dispatch({ type: types.GET_PRODUCTS_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: types.GET_PRODUCTS_FAILURE, payload: err });
    });
};


const getProducts = () => (dispatch) => {
    dispatch({ type: types.GET_PRODUCTS_REQUEST })
    return axios.get("http://localhost:8080/products").then((res) => {
        console.log(res)
        dispatch({ type: types.GET_PRODUCTS_SUCCESS, payload: res.data })
    }).catch((err) => {
        dispatch({ type: types.GET_PRODUCTS_FAILURE, payload: err })
    })
}


export { getProducts }

export const getDressesProducts = () => (dispatch) => {
  // console.log(params)
  dispatch({ type: types.GET_PRODUCTS_REQUEST });
  return axios("http://localhost:8080/products/dresses")
    .then((res) => {
      dispatch({ type: types.GET_PRODUCTS_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: types.GET_PRODUCTS_FAILURE, payload: err });
    });
};

export const sortProductsApi = (productsData, sort) => (dispatch) => {
  const sortedProducts = productsData.slice();
  if (sort === "latest") {
    sortedProducts.sort((a, b) => (a._id > b._id ? 1 : -1));
  } else {
    sortedProducts.sort((a, b) =>
      sort === "lowest"
        ? a.price > b.price
          ? 1
          : -1
        : a.price < b.price
        ? 1
        : -1
    );
  }
  dispatch({
    type: types.SORT_PRODUCTS_BY_PRICE,
    payload: {
      sort: sort,
      data: sortedProducts,
    },
  });
};

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

