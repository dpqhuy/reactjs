import React from 'react';
import { connect } from 'react-redux';

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

	render() {
		return (
			<div className="task">
			<p>Name: {this.state.task.name}</p>
			<p>Effort: {this.state.task.effort} hour(s)</p>
			<p>Completed: {this.state.task.completed ? "true" : "false"}</p>
			<p>Created: {this.state.task.created.toLocaleString()}</p>
      	</div>)
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

const Task = connect(mapStateToProps)(TaskComponent)

export default Task;