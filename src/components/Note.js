import React, { Component } from 'react'
import { Button } from '@material-ui/core'
import './styles/main.css'

export default class Note extends Component {
    state = {
        title: '',
        description: '',
        topic: ''
        // date: Date.now()
    }

    render(){
        return(
            <div id='noteSection'>
                <div>
                    <p>filter and add notes here</p>
                    <Button variant='outlined' color='primary'>Add Note</Button>
                </div>
                <hr />
                <div>
                    <p>list notes here</p>
                </div>
                
            </div>
        )
    }
}
