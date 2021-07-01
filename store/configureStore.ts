import { composeWithDevTools } from 'redux-devtools-extension';
import { createWrapper } from 'next-redux-wrapper';
import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import reducer from '../reducers/index';
import { rootSaga } from '../sagas';

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];

  //개발용 배포용 구분 주의 : env 파일 추가해야합니다.
  //enhancer는 redux의 기능이 확장돼서 enhancer라합니다.
  const enhancer =
    process.env.NODE_ENV === 'production'
      ? compose(applyMiddleware(...middlewares))
      : composeWithDevTools(applyMiddleware(...middlewares));

  const store = createStore(reducer, enhancer);
  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};

//2번째는 option 객체입니다.
const wrapper = createWrapper(configureStore, { debug: true });

export default wrapper;
