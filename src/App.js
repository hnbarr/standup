import React, { Component } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import Router from './Router'


export default class App extends Component{
  render(){
      return (
      <BrowserRouter>
          <div className="App">
              <Router />
        </div>
      </BrowserRouter>
      );
  }
}
