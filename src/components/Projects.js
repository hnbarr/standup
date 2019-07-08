import React from 'react'
// import PropTypes from 'prop-types'
import { Typography } from '@material-ui/core'
import './styles/sections.css'

const Projects = props => {
    return (
        <div className='component' id='projects'>
            <div className='toolbar'>
                <Typography variant="h6" color='inherit'> <i id='iconP' className="fas fa-project-diagram"></i> Projects </Typography>
            </div>
            <div id='projectList'>
                <Project title={"trails n' tails"} description={'dog friendly trail finding app'} deadline={'12-12-2019'}/>
                <Project title={'standup'} description={'CRUD Application'} deadline={'08-10-2019'}/>
                <Project title={'testApp'} description={'testing scroll testing scroll testing scroll testing scroll testing scroll testing scroll testing scroll testing scroll testing scroll '} deadline={'10-10-2019'}/>
            </div>        
        </div>
    )
}

export const Project = props => {
    return (
        <div className='newItem' id='newProject'>
            <div id='projTitle'>
                <p>{props.title}</p>
            </div>
            <div id='projDeadline'>
                <p><b>Deadline:</b> {props.deadline}</p>
            </div>
            <div id='projDes'>
                <p> {props.description}</p>
            </div>
            <div id='projButtons'>
                <button><i className="fas fa-pencil-alt fa-2x"></i></button>
                <button><i className="fas fa-trash-alt fa-2x"></i></button>
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


