import React from 'react'
// import PropTypes from 'prop-types'
import { AppBar, Typography } from '@material-ui/core'
import './styles/sections.css'

const Progress = props => {
    return (
        <div className='component' id='progress'>
            <AppBar position="static" color='secondary'>
                <div className='toolbar'>
                    <Typography variant="h6" color='inherit'> Progress </Typography>
                </div>
             </AppBar>     
        </div>
    )
}

Progress.propTypes = {

}

export default Progress
