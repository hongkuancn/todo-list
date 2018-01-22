import React, { Component } from 'react';
import CreateForm from './CreateForm';
import ListItem from './ListItem';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1 className="text-center">To-do List</h1>
        <CreateForm />
        <ListItem />
      </div>
    );
  }
}

export default App;
