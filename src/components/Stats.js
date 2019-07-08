import React from 'react'
// import PropTypes from 'prop-types'
import { Paper, Typography } from '@material-ui/core'
import './styles/sections.css'

const Stats = props => {
    return (
        <div className='component' id='stats'>
           <Paper position="static" color='primary'>
                <div className='toolbar'>
                    <Typography variant="h6" color='inherit'> <i id='iconM' className="fas fa-medal"></i> Stats</Typography>
                </div>
            </Paper>
                <div id='statList'>
                        <Stat />
                        <Stat />
                        <Stat />
                </div>       
        </div>
    )
}

export const Stat = props => {
    return (
        <div className='newItem' id='newStat'>
            <p>New Stat!</p>
            <p>216 tasks completed</p>
        </div>
    )
}

Stats.propTypes = {

}

export default Stats
