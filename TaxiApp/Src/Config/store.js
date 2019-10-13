import {createStore, applyMiddleware} from 'redux';
import reducers from '../reducers';
import logger from 'redux-logger';

const middleware = [];
if (process.env.NODE_ENV === 'development') {
  middleware.push(logger);
}

const store = createStore(reducers, applyMiddleware(...middleware));

export default store;
