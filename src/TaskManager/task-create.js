import React from 'react';
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form';

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

const required = value => value ? undefined : 'Required';
const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined;
const min1 = value => value && Number(value) < 1 ? 'Min is 1' : undefined;

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    <label style={{'marginRight':'10px'}}>{label}</label>
    <input {...input} placeholder={label} type={type}/>
    {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
  </div>
)

class TaskForm extends React.Component {
  render() {
    console.log("render TaskForm");
    console.log(this.props);
    const { handleSubmit, pristine } = this.props;
    return (
      <form onSubmit={ handleSubmit }>
        
        <Field label="Name" name="name" component={renderField} type="text" validate={required}/>
      
        <Field label="Effort" name="effort" component={renderField} type="text" validate={[required, number, min1]}/>
      
        <Field label="Completed" name="completed" component={renderField} type="checkbox"/>
        <div>
          <button type="submit" disabled={pristine}>Add</button>
        </div>
      </form>
    );
  }
}

// Decorate the form component
TaskForm = reduxForm({
  form: 'task' // a unique name for this form
})(TaskForm);

// Generate a container app by Mapping state and dispatch to props

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onAdd: (task) => dispatch(taskActionCreators.addTask(task))
//   }
// }
// const TaskCreate = connect(null, mapDispatchToProps)(TaskCreateComponent)


export default TaskCreate;