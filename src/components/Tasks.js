import React from 'react'
import PropTypes from 'prop-types'
import { Paper, Typography } from '@material-ui/core'
// import './styles/dash.css'

const Tasks = props => {
    return (
        <div className='component' id='tasks'>
            <Paper>
                <Typography variant='h5'>I'm the task section</Typography>
            </Paper>
        </div>
    )
}

Tasks.propTypes = {

}

export default Tasks
