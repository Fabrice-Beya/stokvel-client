import React, { Component } from 'react';
import './App.css';
import AppNavbar from './Navbar';
import AppJumbotron from './Jumbotron'
import Register from './Register';
import Login from './Login';
import Switcher from './Switcher';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNavbar />
        <Switcher />
      </div>
    );
  }
}

export default App;
