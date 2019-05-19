import { createStore, applyMiddleware, compose } from 'redux';
import { createBrowserHistory } from 'history';

import logger from 'redux-logger';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const history = createBrowserHistory();
const store = createStore(composeEnhancers(applyMiddleware(logger)));

export { store, history };
