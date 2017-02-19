import React from 'react';
import { push } from 'react-router-redux';

import taskActionCreators from './action-creators';
import TaskList from './task-list';

import TaskForm from './view/TaskForm';


class TaskCreate extends React.Component {

	constructor(props) {
		super(props);
		this.state = {task:{}};
	}

  handleAdd(values, dispatch, props) {
    const task = {
      ...values,
      created: new Date()
    };
    dispatch(taskActionCreators.addTask(task));
    alert("Add task successfully");
    dispatch(push('/tasks'));
    
  }

   render() {
      return (
         <TaskForm onSubmit={this.handleAdd} />
      )
   }
}

export default TaskCreate;