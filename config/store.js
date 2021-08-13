import { createStore, applyMiddleware } from "redux";
import { createWrapper } from "next-redux-wrapper";
import createSagaMiddleware from "redux-saga";

import rootReducer from "../redux/reducers";
import rootSaga from "../redux/sagas";

const sagaMiddleware = createSagaMiddleware();

function configureStore(preloadedState) {
  const store = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(sagaMiddleware),
  );

  store.runSagaTask = () => {
    store.sagaTask = sagaMiddleware.run(rootSaga);
  };

  store.runSagaTask();
  return store;
}

const wrapper = createWrapper(configureStore);

export default wrapper;
