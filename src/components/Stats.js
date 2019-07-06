import React from 'react'
import PropTypes from 'prop-types'
import { Paper, Typography } from '@material-ui/core'
// import './styles/dash.css'

const Stats = props => {
    return (
        <div className='component' id='stats'>
           <Paper>
                <Typography variant='h5'>I'm the stat box</Typography>
            </Paper> 
        </div>
    )
}

Stats.propTypes = {

}

export default Stats
