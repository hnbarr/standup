import React from 'react'
import { Typography } from '@material-ui/core'
// import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Nav = props => {
    const DATE = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    return (
        <div id='nav'>
            <Typography variant='h6' id='date'> {(new Date()).toLocaleDateString('en-US', DATE)} </Typography>
            <div className='navBtns'>
                <Link to='/dashboard' id='dashBtn'> dashboard </Link> 
                <Link to='/' id='logoutBtn'> logout </Link> 
            </div>
        </div>
    )
}

Nav.propTypes = {

}

export default Nav
