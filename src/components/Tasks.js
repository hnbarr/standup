import React from 'react'
// import PropTypes from 'prop-types'
import { Typography, AppBar } from '@material-ui/core'
import './styles/sections.css'

const Tasks = props => {
    return (
        <div className='component' id='tasks'>
            <AppBar position="static" color='primary'>
                <div className='toolbar'>
                    <Typography variant="h6" color="inherit"> <i className="fas fa-tasks"></i> Daily Checklist</Typography>
                    <button className='addBtn'color='secondary'><i className="fas fa-plus"></i> </button>
                </div>
             </AppBar>        
        </div>
    )
}

Tasks.propTypes = {

}

export default Tasks
