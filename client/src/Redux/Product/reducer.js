import * as types from "./actionTypes";

const initialState = {
  products: [],
  filteredItems: [],
  isLoading: false,
  isError: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.GET_PRODUCTS_REQUEST:
      return { ...state, isLoading: true };
    case types.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        products: payload,
        filteredItems: payload,
      };
    case types.GET_PRODUCTS_FAILURE:
      return { ...state, isLoading: false, isError: true, error: payload };
    case types.SORT_PRODUCTS_BY_PRICE:
      return {
        ...state,
        filteredItems: payload.data,
        sort: payload.sort,
      };
    default:
      return { state };
  }
};

const selectedReducers = (state = {}, { type, payload }) => {
  switch (type) {
    case types.SELECTED_PRODUCT: {
      return {
        ...state,
        ...payload,
      };
    }
    case types.REMOVE_SELECTED_PRODUCT: {
      return {};
    }
    default:
      return state;
  }
};

export { reducer, selectedReducers };
