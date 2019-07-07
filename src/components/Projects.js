import React from 'react'
// import PropTypes from 'prop-types'
import { Paper, Typography } from '@material-ui/core'
import './styles/sections.css'

const Projects = props => {
    return (
        <div className='component' id='projects'>
            <Paper position="static" color='primary'>
                <div className='toolbar'>
                    <Typography variant="h6" color='inherit'> Projects </Typography>
                </div>
             </Paper>  
             <Paper>
                <div id='progList'>
                    <ul>
                       <Project />
                    </ul>
                </div>     
            </Paper>    
        </div>
    )
}

export const Project = props => {
    return (
        <div className='newItem' id='newProject'>
             <ul>
                <li> New Project</li>
            </ul>
        </div>
    )
}

Projects.propTypes = {

}

export default Projects


