import React from 'react'
// import PropTypes from 'prop-types'
import { AppBar, Typography } from '@material-ui/core'
import './styles/sections.css'

const Stats = props => {
    return (
        <div className='component' id='stats'>
           <AppBar position="static" color='primary'>
                <div className='toolbar' id='top'>
                    <Typography variant="h6" color='inherit'> <i className="fas fa-medal"></i> Task Stats</Typography>
                </div>
                    <div className='toolbar' id='topdetail'>
                        <Typography variant="h6" color='inherit'> actual stats</Typography>
                    </div>
             </AppBar>   

             <AppBar position="static" color='secondary'>
                <div className='toolbar' id='bottom'>
                    <Typography variant="h6" color='inherit'> <i className="fas fa-medal"></i> Blocker Stats</Typography>
                </div>
                <div className='toolbar' id='bottomdetail'>
                    <Typography variant="h6" color='inherit'> actual stats</Typography>
                </div>
            </AppBar>
        </div>
    )
}

Stats.propTypes = {

}

export default Stats
