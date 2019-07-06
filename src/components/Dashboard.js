import React, { Component } from 'react'
import './styles/main.css'
import Task from './Task'
import Note from './Note'
import { Paper } from '@material-ui/core'

export default class Dashboard extends Component {
    componentDidMount(){
        console.log('home component loaded')
    }
    render(){
        return(
            <div className='dashboard'>
            <h4>i'm the dashboard</h4>
                <div className='layout'>
                    <Task />
                    <Note />
                </div>
            </div>
        )
    }
}
