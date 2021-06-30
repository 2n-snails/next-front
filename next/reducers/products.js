import produce from "immer";
import { LOAD_PRODUCTS_ERROR, LOAD_PRODUCTS_REQUEST, LOAD_PRODUCTS_SUCCESS } from "../action/products";

const init = {
  loadProductsLoading: false,
  loadProductsSuccess: false,
  loadProductsError: null

};

const products = (state = init, action) => produce(state, (draft) => {
  switch (action.type) {
    case LOAD_PRODUCTS_REQUEST:
      draft.loadProductsLoading = true;
      draft.loadProductsSuccess = false;
      draft.loadProductsError = null;
      break;
    case LOAD_PRODUCTS_SUCCESS:
      draft.loadProductsLoading = false;
      draft.loadProductsSuccess = true;
      draft.loadProductsError = null;
      break;
    case LOAD_PRODUCTS_ERROR:
      draft.loadProductsLoading = false;
      draft.loadProductsSuccess = false;
      draft.loadProductsError = action.data;
      break;
    default:
      break;
  }
});

export default products;
