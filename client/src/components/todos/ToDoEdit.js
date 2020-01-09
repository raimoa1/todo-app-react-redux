import _ from 'lodash';
import React, {Component} from 'react';
import {fetchToDo, editToDo} from '../../actions';
import ToDoForm from './ToDoForm';

import {connect} from 'react-redux';

class ToDoEdit extends Component {

  componentDidMount() {
    this.props.fetchToDo()
  }

  onSubmit = (formValues) => {
    this.props.editToDo(this.props.todoId, formValues);
  }


  render () {
    console.log(this.props.todos);
    return (
    <div className={this.props.classString} onClick={(e) => e.stopPropagation()}>
      <h2 className="form-title">Edit To Do</h2>
      <ToDoForm initialValues={_.pick(this.props.todos, 'name', 'due')} onSubmit={this.onSubmit}/>
      <button className="button" onClick={this.props.closeEdit}>Cancel</button>
    </div>
    )
  }
}


const mapStateToProps = (state, ownProps) => {
  return {
    todos : state.todos[ownProps.todoId]
  }
}

export default connect(mapStateToProps, {fetchToDo, editToDo})(ToDoEdit);