import React from 'react'
import { Typography } from '@material-ui/core'
// import PropTypes from 'prop-types'

const Nav = props => {
    const DATE = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    return (
        <div className='component' id='nav'>
            <Typography variant='h5' color='secondary'>I'm the side bar nav</Typography>
            <Typography variant='h4' id='date'> {(new Date()).toLocaleDateString('en-US', DATE)} </Typography>
        </div>
    )
}

Nav.propTypes = {

}

export default Nav
