import React from 'react';
import {Link} from 'react-router'
import { connect } from 'react-redux'

import Task from './task';

class TaskListComponent extends React.Component {

   render() {
      let sum = 0;
      const { tasks } = this.props;
		const textNodes = tasks.map(function(task, index) {
            sum += parseInt(task.effort);
            const className = (task.completed) ? 'task-completed' : 'task-incompleted';
            return (
            	<li key={index}><Link className={className} to={`/task/${task.id}`}>{task.name}</Link></li>
            );
        });

      return (
         <div>
            <h1>Task List...</h1>
            { tasks.length && textNodes }
            <h2 style={{color:"blue"}}>Total effort: {sum} hour(s)</h2>
         </div>
      )
   }
}

//Generate a container app by Mapping state and dispatch to props
const mapStateToProps = (state) => {
  return {
    tasks: state.main.tasks,
  }
}

const TaskList = connect(mapStateToProps)(TaskListComponent)


export default TaskList;