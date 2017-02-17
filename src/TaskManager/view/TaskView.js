import React from 'react'

import Task from '../task'

const TaskView = (props) => (
	<div>
		<h1>Task List...</h1>
		<Task taskId={props.params.taskId}/>
	</div>
	)

export default TaskView;