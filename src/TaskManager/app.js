import React from 'react'
import {Link, IndexLink, withRouter} from 'react-router'
import { connect } from 'react-redux'

import taskActionCreators from './action-creators'

class App extends React.Component {

	handleAddTask(task) {
		this.props.onAdd(task);
	}

   render() {
      return (
      	<div>
	         <div>
	         	<h1 style={{color: 'red'}}>Task Manager</h1>
	            <ul className="nav" style={{
					    "listStyleType": "none",
					    "height": "40px",
					    "margin": 0,
    					"padding": 0,
    					"overflow": "hidden",
					}}>
	               <li><IndexLink activeStyle={{ color: 'orange' }} to='/'>Home</IndexLink></li>
	               <li><Link activeStyle={{ color: 'orange' }} to='/tasks'>Task List</Link></li>
	               <li><Link activeStyle={{ color: 'orange' }} to='create'>Create Task</Link></li>
	            </ul>
	           {this.props.children}
	         </div>
         </div>
      )
   }
}

// Generate a container app by Mapping state and dispatch to props
// const mapStateToProps = (state) => {
//   return {
//     tasks: state.tasks,
//   }
// }
// const mapDispatchToProps = (dispatch) => {
//   return {
//     onAdd: (task) => dispatch(taskActionCreators.addTask(task)),
//     onUpdate: (task) => dispatch(taskActionCreators.updateTask(task)),
//   }
// }
// const TaskManagerContainer = connect(mapStateToProps, mapDispatchToProps)(App)

export default App;