import axios from "axios";
import { all, fork, takeLatest, call, put } from "typed-redux-saga";
import { LOAD_PRODUCTS_ERROR, LOAD_PRODUCTS_REQUEST } from "@/action/products";

function loadProductsAPI() {
  return axios.get("/");
}

function* loadProducts(action: any) {
  console.error("action 이건 왜 넣으신거에요? ", action);
  try {
    const results = yield* call(loadProductsAPI);
    yield put({
      type: LOAD_PRODUCTS_REQUEST,
      data: results.data,
    });
  } catch (error) {
    yield put({
      type: LOAD_PRODUCTS_ERROR,
      data: error.response.data,
    });
  }
}

function* loadProductsSaga() {
  yield takeLatest(LOAD_PRODUCTS_REQUEST, loadProducts);
}

function* productSaga() {
  yield all([fork(loadProductsSaga)]);
}

export default productSaga;
