import React from 'react';
import { connect } from 'react-redux'

import taskActionCreators from './action-creators'
import TaskList from './task-list'


class TaskCreateComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {task:{}};
    this.addTask = this.addTask.bind(this);
	}

  addTask() {
    console.log(this.props);
    this.props.onAdd({
      name:this.refs.name.value, 
      effort: this.refs.effort.value, 
      completed:(this.refs.completed.checked)
    });
    alert("Added new task successfuly!");
    this.props.router.push('/tasks');
  }


   render() {
      return (
         <div>
            <h1>Create Task Page...</h1>
              Name:<br/>
              <form>
                <input 
                  type="text" 
                  name="name"
                  ref="name"
                  //value={this.state.text}
                />
                <br/>
                Effort:<br/>
                <input type="number" name="effort" ref="effort" min="1"/><br/>
                <label><input type="checkbox" ref="completed" name="completed"/> Completed</label><br/>
                <input type="button" value="Add" onClick={this.addTask}/>
              </form>
              
         </div>
      )
   }
}

// Generate a container app by Mapping state and dispatch to props

const mapDispatchToProps = (dispatch) => {
  return {
    onAdd: (task) => dispatch(taskActionCreators.addTask(task))
  }
}
const TaskCreate = connect(null, mapDispatchToProps)(TaskCreateComponent)


export default TaskCreate;