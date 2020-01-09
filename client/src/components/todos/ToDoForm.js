import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';

class ToDoForm extends Component {

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  }

  // error refers to error message, touched is checking whether an input field has been interacted with
  renderError({error, touched}) {
    if(touched && error) {
      return (
        <div className="error message">
          {error}
        </div>
      )
    }
  }

  // return error if any errors found
  renderInput = ({input, meta}) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`;

    return (
      <div className={className}>
        <input {...input} autoComplete="off"/>
        {this.renderError(meta)}
      </div>
    )
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="todo-form">
        <div>Title</div>   
        <Field name="name" component={this.renderInput} label="Enter title"/>
        <div>To Do due</div>
        <Field name="due" component={this.renderInput} label="Todo due"/>
        <button className="button">Submit</button>
      </form>
    )
  }
}

const validate = formValues => {
  const errors = {};

  if (!formValues.title) {
    errors.title = 'Title is required';
  }

  return errors;
}

export default reduxForm({
  form: 'todoForm',
  validate
})(ToDoForm);
