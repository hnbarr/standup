import React from 'react'
// import PropTypes from 'prop-types'
import { Typography } from '@material-ui/core'
import './styles/sections.css'

const Projects = props => {
    return (
        <div className='component' id='projects'>
            <div className='toolbar'>
                <Typography variant="subtitle1" color='inherit'> <i id='iconP' className="fas fa-project-diagram"></i> Projects </Typography>
                <button className='addBtn' color='secondary'><i className="fas fa-plus-circle fa-2x"></i> </button>
            </div>
            <div id='projectList'>
                <Project title={"trails n' tails"} description={'dog friendly trail finding app'} deadline={'12-12-2019'}/>
                <Project title={'standup'} description={'CRUD Application'} deadline={'08-10-2019'}/>
                <Project title={'testApp'} description={'testing scroll testing scroll testing scroll testing scroll testing scroll testing scroll testing scroll testing scroll testing scroll '} deadline={'10-10-2019'}/>
                <Project title={"trails n' tails"} description={'dog friendly trail finding app'} deadline={'12-12-2019'}/>
            </div>        
        </div>
    )
}

export const Project = props => {
    const handleEdit = (e) => {
        console.log(e.target)
    }
    const handleDelete = (e) => {
        console.log(e.target)
    }
    const handleSubmit = (e) => {
        console.log(e.target)
    }
    return (
        <div className='newItem' id='newProject'>
            <div id='projTitle'>
                <p>{props.title}</p>
            </div>
            <div id='projDeadline'>
                <div id='dline'>
                    <b>Deadline:</b>
                    <p>{props.deadline}</p>
                </div>
            </div>
            <div id='projDes'>
                <p> {props.description}</p>
            </div>
            <div id='projButtons'>
                <button onClick={handleEdit} className='edit'>edit </button>
                {/* <i className="fas fa-pencil-alt fa-2x"></i> */}
                <button onClick={handleDelete} className='trash'>delete</button>
                {/* <i  className="fas fa-trash-alt fa-2x"></i> */}
                <button onClick={handleSubmit} className='submit'>submit</button>
                {/* <i className="fas fa-clipboard-check fa-2x"></i> */}
            </div>
        </div>
    )
}

Projects.propTypes = {
    // title: String,
    // description: String,
    // deadline: Date
}

export default Projects


