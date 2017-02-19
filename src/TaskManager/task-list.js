import React from 'react';
import {Link} from 'react-router';
import { connect } from 'react-redux';
import {List, ListItem} from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import ActionInfo from 'material-ui/svg-icons/action/info';
import ContentClear from 'material-ui/svg-icons/content/clear';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Task from './task';
import ActionCreators from './action-creators';

class TaskListComponent extends React.Component {
   constructor(props) {
      super(props);
      this.handleDelete = this.handleDelete.bind(this);
   }

   handleDelete(id) {
      this.props.onDelete(id);
      alert("Delete task successfully");
      this.forceUpdate();
   }

   render() {
      let sum = 0;
      const { tasks } = this.props;
      const {handleDelete} = this;
		const textNodes = tasks.map(function(task, index) {
            const onClickHandle = (e) => {
               handleDelete(task.id);
            }

            sum += parseInt(task.effort);
            const className = (task.completed) ? 'task-completed' : 'task-incompleted';
            const rightIcon = (task.completed ? <IconButton><ActionInfo /></IconButton> : <IconButton onClick={onClickHandle}><ContentClear /></IconButton>);
            return (
            	//<li key={index}><Link className={className} to={`/task/${task.id}`}>{task.name}</Link></li>
               <ListItem key={index} rightIconButton={rightIcon} >
                  <Link className={className} to={`/task/${task.id}`}>{task.name}</Link>
               </ListItem>
            );
        });

      return (
         <div>
            <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
               <List>
                  { tasks.length && textNodes }
               </List>
            </MuiThemeProvider>
            <h2 style={{color:"blue"}}>Total effort: {sum} hour(s)</h2>
         </div>
      )
   }
}

//Generate a container app by Mapping state and dispatch to props
const mapStateToProps = (state) => {
  return {
    tasks: state.main.tasks,
  }
}

const mapDispatchToProps = (dispatch) => {
   return {
      onDelete: (taskId) => dispatch(ActionCreators.deleteTask(taskId))
   }
}

const TaskList = connect(mapStateToProps, mapDispatchToProps)(TaskListComponent)


export default TaskList;