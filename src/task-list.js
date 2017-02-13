import React from 'react';
import Task from './task';
import {Link} from 'react-router'

class TaskList extends React.Component {

   render() {
		var textNodes = this.props.route.tasks.map(function(task) {
            return (
            	<li key={task.id}><Link to={`/task/${task.id}`}>{task.text}</Link></li>
            );
        });

      return (
         <div>
            <h1>Task List...</h1>
            <ul>{textNodes}</ul>
         </div>
      )
   }
}

export default TaskList;