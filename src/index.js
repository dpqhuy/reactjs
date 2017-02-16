import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux'


import App from './TaskManager/app'
import Home from './TaskManager/home'
import TaskListView from './TaskManager/view/TaskListView'
import TaskView from './TaskManager/view/TaskView'
import TaskCreate from './TaskManager/task-create'

import taskStore from './TaskManager/task-store'

import MaterialUi from './material-ui'

import { Router, Route, browserHistory, IndexRoute  } from 'react-router'

const user = {
    firstName : 'Huy',
    lastName : 'Dinh'
  }
class Name extends React.Component {
  constructor(props) {
    super(props);
  }
  
  formatName(user) {
    return user.firstName + ' ' +                user.lastName;
  }
  
  render() {
    return (<h1 style={this.props.style}>Hello, <span id="user"> {this.formatName(this.props.user)}</span>!</h1>); 
  }
}  

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date:new Date()};
  }
  
  currentTime() {
  return this.state.date.toLocaleTimeString();
  }
  
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  
  tick() {
    this.setState({date:new Date()});
  }
  
  render() {
    return (
  <h2>Current time is {this.currentTime()}!</h2>);
  }
}

class Toogle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {clicked:false};
    this.onClick = this.onClick.bind(this);
  }
  
    onClick(e) {
//    this.state.clicked = !this.state.clicked;
      this.setState(
        {clicked : !this.state.clicked
        })
    }
  render() {
    return <button onClick={this.onClick}>{this.state.clicked ? "You like this. Click to toggle." : "You haven't liked this. Click to toggle."}</button>
  }
}

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {hide: false};
    this.keyUpHandler = this.keyUpHandler.bind(this);
  }
  
  keyUpHandler(e) {
    if(e.keyCode == 13) {
      document.getElementById("user").textContent = document.getElementById("fname").value;
      this.setState({hide:true});
    }
  }
  
  divStyle() {
    var display = this.state.hide ? "none" : "block";
    return {
      'margin-top':'15px',
      'display':display,
    }
  }
  
  render() {
    return (<div style={this.divStyle()}>Enter your name: <input type="text" id="fname" onKeyUp={this.keyUpHandler}/></div>);
  }
}

class Content extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (<div>
        <Name user={user} style={{'color':'orange',
            'font-style': 'italic'}}/>
        <Clock/>
        <Toogle/>
        <Input/>
      </div>)
  }
}

var tasks = [
{id:0, text:"task 1"},
{id:1, text:"task 2"}
];

//render(<Content/>, document.getElementById("root"));
/*render((
   <Router history = {browserHistory}>
      <Route path = "/" component = {App}>
         <IndexRoute component = {Home} />
         <Route path = "tasks" component = {TaskList} tasks = {tasks} />
         <Route path = "task/:taskId" component = {Task} />
         <Route path = "create" component = {TaskCreate} />
      </Route>
   </Router>
  
), document.getElementById('root'))*/

render(
  <Provider store={taskStore}>
    <Router history = {browserHistory}>
        <Route path = "/" component = {App}>
           <IndexRoute component = {Home} />
           <Route path = "tasks" component = {TaskListView}/>
           <Route path = "task/:taskId" component = {TaskView} />
           <Route path = "create" component = {TaskCreate} />
        </Route>
     </Router>
   </Provider>,
  document.getElementById('root')
);

/*render(
  <MaterialUi />,
  document.getElementById('root'));*/
