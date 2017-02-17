import React from 'react';
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import taskActionCreators from './action-creators'
import TaskList from './task-list'


class TaskCreate extends React.Component {

	constructor(props) {
		super(props);
		this.state = {task:{}};
    this.addTask = this.addTask.bind(this);
	}

  addTask() {
    console.log(this.props);
    this.props.onAdd({
      name:this.refs.name.value, 
      effort: this.refs.effort.value, 
      completed:(this.refs.completed.checked),
      created: new Date()
    });
    alert("Added new task successfuly!");
    this.props.router.push('/tasks');
  }

  handleAdd(values, dispatch, props) {
    const task = {
      ...values,
      created: new Date()
    };
    dispatch(taskActionCreators.addTask(task));
    //this.navigateToList();
  }

  navigateToList() {
    this.props.router.push('/tasks');
  }


   render() {
      return (
         /*<div>
              Name:<br/>
              <form>
                <input 
                  type="text" 
                  name="name"
                  ref="name"
                  //value={this.state.text}
                />
                <br/>
                Effort:<br/>
                <input type="number" name="effort" ref="effort" min="1"/><br/>
                <label><input type="checkbox" ref="completed" name="completed"/> Completed</label><br/>
                <input type="button" value="Add" onClick={this.addTask}/>
              </form>
              
         </div>*/
         <TaskForm onSubmit={this.handleAdd} />
      )
   }
}

/*const required = value => value ? undefined : 'Required';
const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined;
const min1 = value => value && Number(value) < 1 ? 'Min is 1' : undefined;

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    <label style={{'marginRight':'10px'}}>{label}</label>
    <input {...input} placeholder={label} type={type}/>
    {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
  </div>
)*/

const validate = values => {
  const errors = {}
  const requiredFields = [ 'name', 'effort' ]
  requiredFields.forEach(field => {
    if (!values[ field ]) {
      errors[ field ] = 'Required';
    }
  })
  if (values.effort && isNaN(Number(values.effort))) {
    errors.effort = 'Must be a number';
  }

  if (!errors.effort && Number(values.effort) < 1) {
    errors.effort = 'Must be equal or larger than 1';
  }

  return errors;
}

const renderTextField = ({ input, label, meta: { touched, error }, ...custom }) => (
  <TextField hintText={label}
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    {...custom}
  />
)

const renderCheckbox = ({ input, label }) => (
  <Checkbox label={label}
    checked={input.value ? true : false}
    onCheck={input.onChange}/>
)

class TaskForm extends React.Component {
  render() {
    console.log("render TaskForm");
    console.log(this.props);
    const { handleSubmit, pristine } = this.props;
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <form onSubmit={ handleSubmit }>
          <div>
            <Field label="Name" name="name" component={renderTextField}/>
          </div>
          <div>
            <Field label="Effort" name="effort" component={renderTextField} />
          </div>
          <div>
            <Field label="Completed" name="completed" component={renderCheckbox} />
          </div>
          <div>
            <button type="submit" disabled={pristine}>Add</button>
          </div>
        </form>
      </MuiThemeProvider>
    );
  }
}

// Decorate the form component
TaskForm = reduxForm({
  form: 'task', // a unique name for this form
  validate
})(TaskForm);

// Generate a container app by Mapping state and dispatch to props

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onAdd: (task) => dispatch(taskActionCreators.addTask(task))
//   }
// }
// const TaskCreate = connect(null, mapDispatchToProps)(TaskCreateComponent)


export default TaskCreate;