import React from 'react'
import PropTypes from 'prop-types'
import { Paper, Typography } from '@material-ui/core'

const Progress = props => {
    return (
        <div className='component' id='progress'>
            <Paper>
                <Typography variant='h5'>im a progress box</Typography>
            </Paper>
        </div>
    )
}

Progress.propTypes = {

}

export default Progress
