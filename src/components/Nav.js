import React from 'react'
import { Typography } from '@material-ui/core'
// import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Nav = props => {
    const DATE = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    return (
        <div id='nav'>
            <Typography variant='h5' color='primary'>I'm the side bar nav</Typography>
            <Typography variant='h4' id='date'> {(new Date()).toLocaleDateString('en-US', DATE)} </Typography>
            <Link to='/dashboard'> dash </Link> 
            <Link to='/log'> log </Link> 
            <Link to='/'> login </Link> 
        </div>
    )
}

Nav.propTypes = {

}

export default Nav
