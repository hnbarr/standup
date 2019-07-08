import React from 'react'
// import PropTypes from 'prop-types'
import { Typography } from '@material-ui/core'
import './styles/sections.css'

const Tasks = props => {
    return (
        <div className='component' id='tasks'>
            <div className='toolbar'>
                <Typography variant="h6" color="inherit"> <i id='iconT' className="fas fa-tasks"></i> Daily Checklist</Typography>
                <button className='addBtn'color='secondary'><i className="fas fa-plus"></i> </button>
            </div>
            <div id='taskList'>
                <Task title={'item 1'}/>
                <Task title={'item 2'}/>
                <Task title={'item 3'}/>
                <Task title={'item 4'}/>
                <Task title={'item 5'}/>
                <Task title={'item 6'}/>
                <Task title={'item 7'}/>
                <Task title={'item 8'}/>
                <Task title={'item 9'}/>
                <Task title={'item 10'}/>
                <Task title={'item 11'}/>
            </div>          
        </div>
    )
}

export const Task = props => {
    return (
        <div className='newItem' id='newTask'>
            <p>{props.title}</p>
        </div>
    )
}

Tasks.propTypes = {
    // title: String
}

export default Tasks
