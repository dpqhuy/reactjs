import React from 'react';

class TaskCreate extends React.Component {
	constructor(props) {
		super(props);
		this.state = {text:""};
	}
   render() {
      return (
         <div>
            <h1>Create Task Page...</h1>
            <form className="taskForm" onSubmit={this.addTask}>
              <input 
                type="text" 
                placeholder="Add another task..."
                //value={this.state.text}
              />
            <input type="submit" value="Add" />
            </form>
         </div>
      )
   }
}

export default TaskCreate;