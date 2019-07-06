import React from 'react'
import { Paper, Typography } from '@material-ui/core'
// import './styles/dash.css'
import PropTypes from 'prop-types'

const Nav = props => {
    const DATE = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    return (
        <div className='component' id='nav'>
            <Paper>
                <Typography variant='h5'>I'm the side bar nav</Typography>
                <Typography variant='h4' id='date'> {(new Date()).toLocaleDateString('en-US', DATE)} </Typography>
            </Paper>
        </div>
    )
}

Nav.propTypes = {

}

export default Nav
