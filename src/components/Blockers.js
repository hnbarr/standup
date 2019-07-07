import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'

// import PropTypes from 'prop-types'

const Blockers = props => {
    return (
        <div className='component' id='blockers'>
            <AppBar position="static" color='primary'>
                <Toolbar>
                <Typography variant="h6" color='inherit'> <i className="far fa-question-circle"></i> Current Blockers </Typography>
                </Toolbar>
             </AppBar>      
        </div>
    )
}

Blockers.propTypes = {

}

export default Blockers
