import React from 'react';
import {withRouter} from 'react-router'

class Home extends React.Component {
	routerWillLeave(nextLocation) {
      // return false to prevent a transition w/o prompting the user,
      // or return a string to allow the user to decide:
        return 'Are you want to leave?'
    }

	componentDidMount() {
		console.log(this.props.route);
	    this.props.router.setRouteLeaveHook(this.props.route, this.routerWillLeave);
  	}

   render() {
      return (
         <div>
            <h1>Home...</h1>
         </div>
      )
   }
}

export default withRouter(Home);