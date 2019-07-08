import React from 'react'
// import PropTypes from 'prop-types'
import { Typography, Checkbox } from '@material-ui/core'
import './styles/sections.css'

const Tasks = props => {
    return (
        <div className='component' id='tasks'>
            <div className='toolbar'>
                <Typography variant="subtitle1" color="inherit"> <i id='iconT' className="fas fa-tasks"></i> Today's Checklist</Typography>
                <button className='addBtn'color='secondary'><i className="fas fa-plus-circle fa-2x"></i> </button>
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
                {/* <Task title={'item 9'}/>
                <Task title={'item 10'}/>
                <Task title={'item 11'}/> */}
            </div>          
        </div>
    )
}

export const Task = props => {
    const handleCheck = (e) => {
        console.log(e.target.value)
        // setTimeout to remove from array
        // setTimeout to add +1 to tasksCompleted in stats
    }

    const handleEdit = (e) => {
        console.log(e.target)
    }
    
    return (
        <div className='newItem' id='newTask'>
            <Checkbox value={props.title} onClick={handleCheck} inputProps={{'aria-label': 'primary checkbox'}}/>
            <p id='taskTitle'>{props.title}</p>
            <div id='taskButtons'>
                <button onClick={handleEdit} className='edit'><i className="fas fa-pencil-alt fa-2x"></i></button>
            </div>
        </div>
    )
}

Tasks.propTypes = {
    // title: String
}

export default Tasks
