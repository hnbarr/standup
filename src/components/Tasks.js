import React from 'react'
// import PropTypes from 'prop-types'
import { Typography, AppBar, Toolbar } from '@material-ui/core'

const Tasks = props => {
    return (
        <div className='component' id='tasks'>
            <AppBar position="static" color='primary'>
                <Toolbar>
                <Typography variant="h6" color="inherit"> <i className="fas fa-tasks"></i> Daily Checklist</Typography>
                </Toolbar>
             </AppBar>        
        </div>
    )
}

Tasks.propTypes = {

}

export default Tasks
