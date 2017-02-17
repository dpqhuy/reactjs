import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';

import constants from './constants';

const initialState = {
  tasks: [{
    id:0,
    name: 'task 1',
    effort: 100,
    completed: true,
    created: new Date()
  }]
}

const reducer = (state = initialState, action) => {
  const { tasks } = state;
  switch (action.type) {
    case constants.ADD_TASK:
      // action.task.id = tasks.length;
      // tasks.push(action.task);
      // return state;

      return { 
        tasks: [
          ...tasks,
          { ...action.task,
            id: tasks.length}
            ]
      };


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

const taskReducer = combineReducers( { routing: routerReducer, main:reducer, form: formReducer } );

export default taskReducer;
