import React, {Component} from 'react';
import ToDoEdit from './ToDoEdit';

import {Link} from 'react-router-dom';
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
    const activeItemInt = parseInt(activeItem);
    const itemIdInt = parseInt(itemId);

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

  renderToDos = () => {
    let {todos} = this.state;
    let todoList;

      todoList = todos.map((todo, index) => {
        return (
          <div className={`list-item ${(todo.checked === true ? 'checked' : '')}`} key={index} >
            <div className="checkbox inline-block">
            </div>
            <div className="todo-item inline-block">
              <span className="item" onClick={this.toggleCheck} data-item={index} data-id={todo.id}>{todo.name}</span>
              <Link to={`/todos/edit/${todo.id}`} className="edit-toggle">
                &#9998;
              </Link>
        
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
      <div className="button add button-shadow">
        <Link to={`/todos/create`} className="add-button">
          &#43;
        </Link>
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