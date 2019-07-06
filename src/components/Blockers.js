import React from 'react'
import { Paper, Typography } from '@material-ui/core'
import PropTypes from 'prop-types'

const Blockers = props => {
    return (
        <div className='component' id='blockers'>
            <Paper>
                <Typography variant='h5'>I'm the blockers section</Typography>
            </Paper>
        </div>
    )
}

Blockers.propTypes = {

}

export default Blockers
