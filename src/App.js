import React, { Component } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import Router from './Router'
import { connect } from 'react-redux'
import { listBlockers } from './redux/actions/blockerActions'
import { listProjects } from './redux/actions/projectActions'
import { listTasks } from './redux/actions/taskActions'


export class App extends Component{
    componentDidMount(){
        // fetch('/api/blockers')
        // .then(response => response.json())
        // .then(data => console.log(data))
        this.props.listBlockers()
        this.props.listTasks()
        // this.props.listProjects()
    }

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

const mapStateToProps = state => {
    return {
        blockers: state.blockers,
        tasks: state.tasks,
        // projects: state.projects
    }
}

const mapDispatchToProps = dispatch => {
    return {
        listBlockers: () => dispatch(listBlockers()),
        // listProjects: () => dispatch(listProjects()),
        listTasks: () => dispatch(listTasks())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

