import React, { Component } from 'react'
import { Button } from '@material-ui/core'
import './styles/main.css'


export default class Task extends Component {
    state = {
        task: '',
        // date: Date.now()
    }

    render(){
        return(
            <div id='taskSection'>
                <p>i'm the task section</p>
                <Button variant='outlined' color='secondary'>Add Task</Button>
            </div>
        )
    }
}
