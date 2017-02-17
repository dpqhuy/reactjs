import { browserHistory } from 'react-router';
import { createStore, applyMiddleware } from 'redux'
import { routerMiddleware, push } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import taskReducer from './reducer';

const logger = (store) => (next) => (action) => {
  console.log('dispatching:', action);
  return next(action);
}

const middleware = routerMiddleware(browserHistory);

const taskStore = createStore(
  taskReducer, 
  composeWithDevTools(applyMiddleware(logger, middleware)) // enhance the store with the logger middleware
);

export default taskStore;
