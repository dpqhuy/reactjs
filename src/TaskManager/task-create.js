import React from 'react';
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import { push } from 'react-router-redux';

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
    dispatch(push('/tasks'));
    
  }

   render() {
      return (
         <TaskForm onSubmit={this.handleAdd} />
      )
   }
}

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
  <TextField
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

export default TaskCreate;