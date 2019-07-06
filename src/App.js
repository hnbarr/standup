import React, { Component } from 'react';
import './App.css';
import Login from './components/Login'
// import Home from './components/Home'

export default class App extends Component{
  render(){
      return (
        <div className="App">
            <Login /> {/*if login true render Home, if not render this page*/}
        </div>
      );
  }
}
