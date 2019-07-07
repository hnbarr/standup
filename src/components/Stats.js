import React from 'react'
// import PropTypes from 'prop-types'
import { Paper, Typography } from '@material-ui/core'
import './styles/sections.css'

const Stats = props => {
    return (
        <div className='component' id='stats'>
           <Paper position="static" color='primary'>
                <div className='toolbar'>
                    <Typography variant="h6" color='inherit'> <i id='iconM' className="fas fa-medal"></i> Task Stats</Typography>
                </div>
            </Paper>
            <Paper>
                <div id='statList'>
                    <ul>
                        <Stat />
                    </ul>
                </div>     
            </Paper>    
        </div>
    )
}

export const Stat = props => {
    return (
        <div className='newItem' id='newStat'>
             <ul>
                <li> New Stat</li>
            </ul>
        </div>
    )
}

Stats.propTypes = {

}

export default Stats
