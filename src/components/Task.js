import React, { Component } from 'react'
import { Button, Paper } from '@material-ui/core'
import './styles/task.css'
import Progress from './Progress'


export default class Task extends Component {
    render(){
        return(
            <div id='taskSection'>
                <Paper id='taskTop'>
                    <Progress />
                </Paper>

                <Paper id='taskBottom'>
                    <Button variant='outlined' color='secondary'>Add Task</Button>
                </Paper>
            </div>
        )
    }
}
