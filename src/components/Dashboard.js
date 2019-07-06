import React, { Component } from 'react'
import './styles/dash.css'
import Task from './Task'
import Note from './Note'
import { Typography } from '@material-ui/core'

export default class Dashboard extends Component {
    componentDidMount(){
        console.log('home component loaded')
    }

    render(){
        const DATE = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
        return(
            <div className='dashboard'>
            <Typography>Have weather api connect here for local temp and icon</Typography>
            <Typography variant='h4' id='date'> {(new Date()).toLocaleDateString('en-US', DATE)} </Typography>
                <div className='layout'>
                    <Task />
                    <Note />
                </div>
            </div>
        )
    }
}
