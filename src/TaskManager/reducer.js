import constants from './constants';
import { combineReducers } from 'redux';

const initialState = {
  tasks: [{
    id:0,
    name: 'task 1',
    effort: 100,
    completed: true
  }]
}

const reducer = (state = initialState, action) => {
  const { tasks } = state;
  switch (action.type) {
    case constants.ADD_TASK:
      action.task.id = tasks.length;
      tasks.push(action.task);
      return state;

    case constants.UPDATE_TASK:
      for(var i=0; i< tasks.length; i++) {
        if(action.task.id == tasks[i].id) {
          tasks[i] = action.task;
        }
      }
      return state;

    default:
      return state;
  }
};

const taskReducer = combineReducers({main:reducer});

export default taskReducer;
