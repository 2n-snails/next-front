// import { fork, all } from '@redux-saga/core/effects';
// import productSaga from './productSaga';
import { takeLatest } from 'redux-saga/effects';

// function* rootSaga() {
//   yield all([fork(productSaga)]);
// }

// export default rootSaga();

export function* rootSaga(): Generator<never, void, unknown> {
  takeLatest('FETCH_TEST_REQUEST', fetchTest$);
}

export function* fetchTest$() {
  try {
    const tests = yield call(fetchTest);
    yield put({ type: FETCH_TEST_SUCCESS, payload: tests });
  } catch (err) {
    // 샐패 로직
  }
}
