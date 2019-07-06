import React from 'react'
import { Paper, Typography } from '@material-ui/core'
import PropTypes from 'prop-types'
// import './styles/dash.css'

const Blockers = props => {
    return (
        <div className='component' id='blockers'>
            <Paper>
                <Typography variant='h5'>I'm the blocker box</Typography>
            </Paper>
        </div>
    )
}

Blockers.propTypes = {

}

export default Blockers
