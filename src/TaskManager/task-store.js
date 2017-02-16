import { createStore, applyMiddleware } from 'redux'
import taskReducer from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const logger = (store) => (next) => (action) => {
  console.log('dispatching:', action);
  return next(action);
}

const taskStore = createStore(
  taskReducer,
  composeWithDevTools(applyMiddleware(logger)) // enhance the store with the logger middleware
);

export default taskStore;
