import React from 'react'
// import PropTypes from 'prop-types'
import { Typography } from '@material-ui/core'
import './styles/sections.css'

export const TaskStat = props => {
    return (
        <div className='newStat'>
            <p>Task Progress</p>
            <b>{props.checked}/{props.count}</b>
        </div>
    )
}

export const BlockerStat = props => {
    return (
        <div className='newStat'>
            <p>Blockers Defeated</p>
            <b>{props.count}</b>
        </div>
    )
}

export const ProjectStat = props => {
    return (
        <div className='newStat'>
            <p>Projects Submitted</p>
            <b>{props.count}</b>
        </div>
    )
}

const Stats = props => {
    console.log('stats props: ', props)
    return (
        <div className='component' id='stats'>
                <div className='toolbar'>
                    <Typography variant="subtitle1" color='inherit'> <i id='iconM' className="fas fa-medal"></i> Stats</Typography>
                </div>
                <div id='statList'>
                        <div className='stat'>
                            <i id='check' className="far fa-check-circle fa-2x"></i>                            
                            <TaskStat/>
                        </div>
                        <div className='stat'>
                            <i id='trophy' className="fas fa-trophy fa-2x"></i>
                            <BlockerStat/>
                        </div>
                        <div className='stat'>
                            <i id='cheers' className="fas fa-glass-cheers fa-2x"></i>
                            <ProjectStat/>
                        </div>
                </div>       
        </div>
    )
}

Stats.propTypes = {
    // title: String,
    // count: Number
}

export default Stats
