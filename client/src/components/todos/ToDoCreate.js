import {Link} from 'react-router-dom';
import React, {Component} from 'react';
import {createToDo} from '../../actions';
import ToDoForm from '../todos/ToDoForm';

import {connect} from 'react-redux';

class ToDoCreate extends Component {
  onSubmit = (formValues) => {
    this.props.createToDo(formValues);
  }

  render() {
    return (
      <div className="form-container">
        <h2 className="create">Create a new todo</h2>
        <ToDoForm onSubmit={this.onSubmit}/>
        <Link to="/" className="button cancel">
          Cancel
        </Link>
      </div>
    )
  }
}

export default connect(null, {createToDo})(ToDoCreate);