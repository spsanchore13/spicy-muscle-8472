import axios from "axios";
import * as types from "./actionTypes";

export const getProducts = (params) => (dispatch) => {
  dispatch({ type: types.GET_PRODUCTS_REQUEST });
  return axios("https://talented-cyan-piglet.cyclic.app//products", params)
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
  return axios("https://talented-cyan-piglet.cyclic.app//products/shoes")
    .then((res) => {
      dispatch({ type: types.GET_PRODUCTS_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: types.GET_PRODUCTS_FAILURE, payload: err });
    });
};

export const getDressesProducts = () => (dispatch) => {
  // console.log(params)
  dispatch({ type: types.GET_PRODUCTS_REQUEST });
  return axios("https://talented-cyan-piglet.cyclic.app//products/dresses")
    .then((res) => {
      dispatch({ type: types.GET_PRODUCTS_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: types.GET_PRODUCTS_FAILURE, payload: err });
    });
};

export const deleteProducts = (id) => (dispatch) => {

  dispatch({ type: types.DELETE_PRODUCTS_REQUEST });
  return axios.delete(`https://talented-cyan-piglet.cyclic.app//products/${id}`).then((res) => {
    dispatch({ type: types.DELETE_PRODUCTS_SUCCESS })
  }).catch((err) => {
    dispatch({ type: types.DELETE_PRODUCTS_FAILURE })
  })
}

export const updateProducts = (id, payload) => (dispatch) => {
  dispatch({ type: types.UPDATE_PRODUCTS_REQUEST })
  return axios.patch(`https://talented-cyan-piglet.cyclic.app//products/${id}`, payload).then((res) => {
    dispatch({ type: types.UPDATE_PRODUCTS_SUCCESS })
  }).catch((err) => {
    dispatch({ type: types.UPDATE_PRODUCTS_FAILURE })
  })
}
export const sortProductsApi = (filteredItems, sort) => (dispatch) => {
  const sortedProducts = filteredItems?.slice();
  if (sort === "latest") {
    sortedProducts.sort((a, b) => (a._id > b._id ? 1 : -1));
  } else if (sort === "lowest") {
    sortedProducts.sort((a, b) => (a.price > b.price ? 1 : -1));
  } else if (sort === "highest") {
    sortedProducts.sort((a, b) => (a.price < b.price ? 1 : -1));
  } else if (sort === "asc") {
    sortedProducts.sort((a, b) => (a.name > b.name ? 1 : -1));
  } else if (sort === "desc") {
    sortedProducts.sort((a, b) => (a.name < b.name ? 1 : -1));
  }

  //       : a.price < b.price
  //       ? 1
  //       : -1
  //   );
  // }
  // if (sort === "asc") {
  //   sortedProducts.sort((a, b) => (a._id > b._id ? 1 : -1));
  // }
  // else {
  //   sortedProducts.sort((a, b) =>
  //     sort === "desc"
  //       ? a.name > b.name
  //         ? 1
  //         : -1
  //       : a.name < b.name
  //       ? 1
  //       : -1
  //   );
  // }
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
