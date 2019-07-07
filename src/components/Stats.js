import React from 'react'
// import PropTypes from 'prop-types'
import { AppBar, Toolbar, Typography } from '@material-ui/core'

const Stats = props => {
    return (
        <div className='component' id='stats'>
           <AppBar position="static" color='secondary'>
                <Toolbar>
                <Typography variant="h6" color='inherit'> <i className="fas fa-medal"></i> My Stats</Typography>
                </Toolbar>
             </AppBar>   

             {/* <AppBar position="static" color='secondary'>
             <Toolbar>
                <Typography variant="h6" color='inherit'> I'm the Stat, bottom half</Typography>
                </Toolbar>
             </AppBar> */}
        </div>
    )
}

Stats.propTypes = {

}

export default Stats
