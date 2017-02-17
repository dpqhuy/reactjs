import React from 'react'

import TaskList from '../task-list'

class TaskListView extends React.Component {
	render() {
		return (
			<div>
				<h1>Task List...</h1>
				<TaskList />
			</div>)
	}
}

export default TaskListView;