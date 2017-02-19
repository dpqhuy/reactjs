import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import TaskForm from './view/TaskForm';
import taskActionCreators from './action-creators';

class TaskComponent extends React.Component {

	constructor(props) {
		super(props);
		this.state = { task: { } };
	}

	componentWillMount() {
	    this.setState({
	      // route components are rendered with useful information, like URL params
	      task: this.findTaskById(this.props.taskId)
	    })
  	}

  	handleUpdate(values, dispatch, props) {    
    	dispatch(taskActionCreators.updateTask(values));
    	alert('update task successfully!');
	    dispatch(push('/tasks'));
    }

	render() {
		const editContent = (<TaskForm initialValues={this.state.task} onSubmit={this.handleUpdate} />);
		const detailContent = (<div className="task">
			<p>Name: {this.state.task.name}</p>
			<p>Effort: {this.state.task.effort} hour(s)</p>
			<p>Completed: {this.state.task.completed ? "true" : "false"}</p>
			<p>Created: {this.state.task.created.toLocaleString()}</p>
			{this.state.task.modified && (<p>Last Modified: {this.state.task.modified.toLocaleString()}</p>)}
      	</div>);
		const content = this.state.task.completed ? detailContent : editContent;

		return content;
	}

	findTaskById(taskId) {
		let tasks = this.props.tasks;
		for (var i = 0; i < tasks.length; i++) {
			if(tasks[i].id == taskId) {
				return tasks[i];
			}
		}
	  return { };
	}
}

//Generate a container app by Mapping state and dispatch to props
const mapStateToProps = (state) => {
	console.log(state);
  return {
    tasks: state.main.tasks,
  }
}

const mapDispatchToProps = (dispatch) => {
	return {

	}
}

const Task = connect(mapStateToProps)(TaskComponent)

export default Task;