import React from 'react'
// import PropTypes from 'prop-types'
import { AppBar, Toolbar, Typography } from '@material-ui/core'

const Progress = props => {
    return (
        <div className='component' id='progress'>
            <AppBar position="static" color='secondary'>
                <Toolbar>
                <Typography variant="h6" color='inherit'> Progress </Typography>
                </Toolbar>
             </AppBar>     
            <Typography variant='h6'>Tasks;</Typography>
            
            <Typography variant='h6'>Blockers;</Typography>
        </div>
    )
}

Progress.propTypes = {

}

export default Progress
