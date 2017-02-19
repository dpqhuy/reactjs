import React from 'react';
import { Field, reduxForm } from 'redux-form';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import { renderTextField, renderCheckbox } from './CommonView';

class TaskForm extends React.Component {
  constructor(props) {
    super(props);
    //let { task } = props;
    //this.state = { task };
  }

  render() {
    console.log("render TaskForm");
    console.log(this.props);
    const { handleSubmit, pristine, initialValues } = this.props;

    return (
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <form onSubmit={ handleSubmit }>
          <input type="hidden" name="id" value={initialValues && initialValues.id} />
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
            <button type="submit" disabled={pristine}>{ initialValues ? 'Update' : 'Add' }</button>
          </div>
        </form>
      </MuiThemeProvider>
    );
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

// Decorate the form component
TaskForm = reduxForm({
  form: 'task', // a unique name for this form
  validate
})(TaskForm);

export default TaskForm;