import React, { Component } from 'react'
import './styles/main.css'
import Task from './Task'
import Note from './Note'
import { Paper } from '@material-ui/core'

export default class Home extends Component {
    componentDidMount(){
        console.log('home component loaded')
    }
    render(){
        return(
            <Paper className='homePage'>
            <h4>i'm the home page</h4>
                <div className='layout'>
                    <Task />
                    <Note />
                </div>
            </Paper>
        )
    }
}
