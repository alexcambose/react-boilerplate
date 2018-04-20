import { applyMiddleware, createStore } from 'redux';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from './reducers/index';

export default createStore(
    reducers,
    applyMiddleware(thunk, logger),
);
