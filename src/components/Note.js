import React, { Component } from 'react'
import { Button } from '@material-ui/core'
import './styles/main.css'

class Note extends Component {
    state = {
        title: '',
        description: '',
        // date: Date.now()
    }

    render(){
        return(
            <div id='noteSection'>
                <p>i'm the note section</p>
                <Button variant='outlined' color='primary'>Add Note</Button>
            </div>
        )
    }
}

export default Note