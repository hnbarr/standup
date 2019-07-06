import React, { Component } from 'react'
import { Button, Paper} from '@material-ui/core'
import './styles/note.css'

export default class Note extends Component {
    render(){
        return(
            <div id='noteSection'>
                <Paper id='noteTop'>
                    <p>filter and add notes here</p>
                    <Button variant='outlined' color='primary'>Add Note</Button>
                </Paper>
                <hr />
                <Paper id='noteBottom'>
                    <p>list notes here</p>
                </Paper>
                
            </div>
        )
    }
}
