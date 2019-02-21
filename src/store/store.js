import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import createSagaMiddleware from "redux-saga";
import { authReducer, clientsReducer, companyReducer, settingsReducer } from './reducers';
import { watchAll } from './sagas';

export const getStore = () => {
  /* eslint-disable no-underscore-dangle */
  const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

  const sagaMiddleware = createSagaMiddleware();

  const rootReducer = combineReducers({
    auth: authReducer,
    clients: clientsReducer,
    company: companyReducer,
    settings: settingsReducer
  });

  const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(sagaMiddleware)
  ));

  sagaMiddleware.run(watchAll);

  return store;
}
