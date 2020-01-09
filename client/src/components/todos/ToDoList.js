import React, {Component} from 'react';
import ToDoEdit from './ToDoEdit';

import {connect} from 'react-redux';
import {fetchToDos, editToDo} from '../../actions';

class ToDoList extends Component {
  
  state = {
    todos : []
  }

  componentDidMount() {
    this.props.fetchToDos()
    .then(() => this.populateToDoState())
  }

  populateToDoState = () => {
    let todoStateList = this.props.todos.map((todo) => {
      return todo;
    });

    this.setState({
      todos : todoStateList,
      showEdit : 0
    })
  }

  toggleCheck = (e) => {
    e.preventDefault();
    const activeItem = e.currentTarget.getAttribute('data-item');
    const itemId = e.currentTarget.getAttribute('data-id');
    const itemIdInt = parseInt(itemId);
    const activeItemInt = parseInt(activeItem);

    let {todos} = this.state;
    let todoList = [...this.state.todos];

    if (todos[activeItemInt].checked === true) {
      
      todoList[activeItemInt].checked = false;
      this.setState({
        todoList
      })

    } else {
      todoList[activeItemInt].checked = true;
      this.setState({
        todoList
      })
    }
    // console.log(todoList);
    // this.props.editToDo(todoList, itemIdInt)
  }

  openEdit = (e) => {
    e.stopPropagation();
    
    const itemId = e.currentTarget.getAttribute('data-id');
    const itemIdInt = parseInt(itemId);

    this.setState({
      showEdit : itemIdInt
    })
  }

  closeEdit = (e) => {
    e.stopPropagation();

    this.setState({
      showEdit : 0
    })
  }

  renderToDos = () => {
    let {todos} = this.state;
    let todoList;

      todoList = todos.map((todo, index) => {
        return (
          <div className={`list-item ${(todo.checked === true ? 'checked' : '')}`} key={index} data-item={index} data-id={todo.id} onClick={this.toggleCheck}>
            <div className="checkbox inline-block">
            </div>
            <div className="todo-item inline-block">
              {todo.name}
              <span className="edit-toggle" data-id={todo.id} onClick={this.openEdit}>
                &#9998;
              </span>
              <ToDoEdit todoId={todo.id} classString={this.state.showEdit === todo.id ? 'edit-box show' : 'edit-box hide' } closeEdit={this.closeEdit} />
            </div>
          </div>
        )
      })

    return (
      <div className="list-container">
        <h1>To do list</h1>
        {todoList}
      </div>
    )
  }

  render() {
    // console.log(this.state);
    return (
    <div>
      <div className="container h-center v-center">
        {this.renderToDos()}
      </div>
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    todos: Object.values(state.todos)
  };
}

export default connect(mapStateToProps, {fetchToDos, editToDo})(ToDoList);