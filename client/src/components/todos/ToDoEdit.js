import React, {Component} from 'react';
import {fetchToDo, editToDo} from '../../actions';

import {connect} from 'react-redux';

class ToDoEdit extends Component {

  componentDidMount() {
    this.props.fetchToDo()
  }

  onSubmit = (formValues) => {
    this.props.editToDo(this.props.todoId, formValues);
  }

  render () {
    return (
    <div className={this.props.classString}>
      <div>Edit To Do</div>
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