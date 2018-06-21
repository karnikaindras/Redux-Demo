import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserList from './containers/user-list';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Users</h1>
        <h1>Users Details:-</h1>
        <UserList/>
      </div>
    );
  }
}

export default App;
