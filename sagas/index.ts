import { fork, all } from "@redux-saga/core/effects";
import productSaga from "@/sagas/productSaga";

export default function* rootSaga() {
  yield all([fork(productSaga)]);
}
