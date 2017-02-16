import React from 'react'
import {connect} from 'react-redux'

class TaskComponent extends React.Component {

	constructor(props) {
		super(props);
		this.tasks = [
			{id:0, text:"task 1"},
			{id:1, text:"task 2"}
			];
	}

	findTaskById(taskId) {
	  for (var i = 0; i < this.tasks.length; i++) {
	      if(this.tasks[i].id == taskId) {
	        return this.tasks[i];
	      }
	  }
	}
	componentWillMount() {
	    this.setState({
	      // route components are rendered with useful information, like URL params
	      task: this.findTaskById(this.props.params.taskId)
	    })
  	}
	render() {
		return (<div className="task">
          {this.state.task.text}
      </div>)
	}
}

//Generate a container app by Mapping state and dispatch to props
const mapStateToProps = (state) => {
  return {
    tasks: state.main.tasks,
  }
}

const Task = connect(mapStateToProps)(TaskComponent)

export default Task;