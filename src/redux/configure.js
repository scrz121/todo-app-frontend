import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import rootSaga from './../sagas';

const composeEnchancers =
  process.env.NODE_ENV !== 'production' && typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        shouldHotReload: false,
      })
    : compose;

const sagaMiddleWare = createSagaMiddleware();

const configure = () => {
  const middlewares = [sagaMiddleWare];
  const enchancers = [applyMiddleware(...middlewares)];
  const store = createStore(rootReducer, composeEnchancers(...enchancers));
  sagaMiddleWare.run(rootSaga);
  return store;
};

export default configure;
