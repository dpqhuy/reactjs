import React from 'react'

import Task from '../task'

const TaskView = (props) => (
	<Task taskId={props.params.taskId}/>
	)

export default TaskView;