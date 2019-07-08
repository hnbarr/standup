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
            <div id='taskList'>
                <Task />
                <Task />
                <Task />
                <Task />
                <Task />
                <Task />
                <Task />
            </div>          
        </div>
    )
}

export const Task = props => {
    return (
        <div className='newItem' id='newTask'>
            <p>New task!</p>
            <p>finish dashboard front end</p>
        </div>
    )
}

Tasks.propTypes = {

}

export default Tasks
