import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import ToDoList from './todos/ToDoList';
// import ToDoCreate from './todos/ToDoCreate';

import '../scss/app.scss';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/" exact component={ToDoList} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;