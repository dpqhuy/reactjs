import React from 'react'
import {Link, IndexLink, withRouter} from 'react-router'

class App extends React.Component {

   render() {
      return (
      	<div>
	         <div>
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

export default App;