import _ from 'lodash';
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {fetchToDo, editToDo} from '../../actions';
import ToDoForm from './ToDoForm';

import {connect} from 'react-redux';

class ToDoEdit extends Component {

  componentDidMount() {
    this.props.fetchToDo(this.props.match.params.id)
  }

  onSubmit = (formValues) => {
    this.props.editToDo(this.props.match.params.id, formValues);
  }

  /* <ToDoEdit todoId={todo.id} classString={this.state.showEdit === todo.id ? `edit-box show ${todo.id}` : `edit-box hide ${todo.id}`} closeEdit={this.closeEdit} /> */
  render () {
    console.log(this.props);
    return (
    <div className={this.props.classString} onClick={(e) => e.stopPropagation()}>
      <div className="form-container">
        <h2 className="form-title">Edit To Do</h2>
        <ToDoForm initialValues={_.pick(this.props.todos, 'name', 'due')} onSubmit={this.onSubmit}/>
        <Link to="/" className="button">
          Cancel
        </Link>
      </div>
    </div>
    )
  }
}


const mapStateToProps = (state, ownProps) => {
  return {
    todos : state.todos[ownProps.match.params.id]
  }
}

export default connect(mapStateToProps, {fetchToDo, editToDo})(ToDoEdit);