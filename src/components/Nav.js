import React from 'react'
import { Typography } from '@material-ui/core'
// import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Nav = props => {
    const DATE = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return (
        <div id='nav'>
            <div id='avatar'> 
                <Link to='/dashboard' id='dashBtn'> HB </Link> 
            </div>
            <Typography variant='h6' id='date'> {(new Date()).toLocaleDateString('en-US', DATE)} </Typography>
            <div className='navBtns'> 
                <Link to='/' id='logoutBtn'> logout </Link> 
            </div>
        </div>
    )
}

Nav.propTypes = {

}

export default Nav
