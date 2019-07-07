import React from 'react'
// import PropTypes from 'prop-types'
import { Typography, Paper } from '@material-ui/core'
import './styles/sections.css'

const Tasks = props => {
    return (
        <div className='component' id='tasks'>
            <Paper position="static" color='primary'>
                <div className='toolbar'>
                    <Typography variant="h6" color="inherit"> <i id='iconT' className="fas fa-tasks"></i> Daily Checklist</Typography>
                    <button className='addBtn'color='secondary'><i className="fas fa-plus"></i> </button>
                </div>
             </Paper> 
            <Paper>
                <div id='taskList'>
                    <ul>
                        <Task />
                    </ul>
                </div>     
            </Paper>       
        </div>
    )
}

export const Task = props => {
    return (
        <div className='newItem' id='newTask'>
            <ul>
                <li> New Task</li>
            </ul>
        </div>
    )
}

Tasks.propTypes = {

}

export default Tasks
