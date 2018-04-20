import { applyMiddleware, createStore } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
import history from './history';
import reducers from './reducers/index';

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunk, logger, routerMiddleware(history))),
);
/* eslint-enable */
