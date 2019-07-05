import React, { Component } from 'react'
import { Button } from '@material-ui/core'
import './styles/main.css'

class Note extends Component {
    state = {
        title: '',
        description: '',
        topic: ''
        // date: Date.now()
    }

    render(){
        return(
            <div id='noteSection'>
                <React.Fragment>
                    <p>filter and add notes here</p>
                    <Button variant='outlined' color='primary'>Add Note</Button>
                </React.Fragment>
                <hr />
                <React.Fragment>
                    <p>list notes here</p>
                </React.Fragment>
                
            </div>
        )
    }
}

export default Note