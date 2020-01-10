import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// import ToDoCreate from './todos/ToDoCreate';
import ToDoList from './todos/ToDoList';
import ToDoEdit from './todos/ToDoEdit';
import ToDoCreate from './todos/ToDoCreate';

import '../scss/app.scss';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/" exact component={ToDoList} />
            <Route path="/todos/create" exact component={ToDoCreate} />
            <Route path="/todos/edit/:id" exact component={ToDoEdit} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;