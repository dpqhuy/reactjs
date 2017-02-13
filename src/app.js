import React from 'react'
import {Link, IndexLink, withRouter} from 'react-router'

class App extends React.Component {
	componentDidMount() {
	    this.props.router.setRouteLeaveHook(this.props.route, () => {
	        return 'Are you want to leave?'
	    })
  	}

   render() {
      return (
         <div>
            <ul>
               <li><IndexLink activeStyle={{ color: 'orange' }} to='/'>Home</IndexLink></li>
               <li><Link activeStyle={{ color: 'orange' }} to='/tasks'>Task List</Link></li>
               <li><Link activeStyle={{ color: 'orange' }} to='create'>Create Task</Link></li>
            </ul>
				
           {this.props.children}
         </div>
      )
   }
}

export default withRouter(App);