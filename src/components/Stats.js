import React from 'react'
// import PropTypes from 'prop-types'
import { Typography } from '@material-ui/core'
import './styles/sections.css'

const Stats = props => {
    return (
        <div className='component' id='stats'>
                <div className='toolbar'>
                    <Typography variant="h6" color='inherit'> <i id='iconM' className="fas fa-medal"></i> Stats</Typography>
                </div>
                <div id='statList'>
                        <div className='stat'>
                            <i className="fas fa-trophy fa-2x"></i>
                            <Stat title={'Blockers Defeated'} count={12}/>
                        </div>
                        <div className='stat'>
                            <i className="far fa-check-circle fa-2x"></i>                            
                            <Stat title={'Tasks Completed'} count={70}/>
                        </div>
                        <div className='stat'>
                            <i className="fas fa-glass-cheers fa-2x"></i>
                            <Stat title={'Projects Completed'} count={4}/>
                        </div>
                </div>       
        </div>
    )
}

export const Stat = props => {
    return (
        <div className='newItem' id='newStat'>
            <p>{props.title}</p>
            <b>{props.count}</b>
        </div>
    )
}

Stats.propTypes = {
    // title: String,
    // count: Number
}

export default Stats
