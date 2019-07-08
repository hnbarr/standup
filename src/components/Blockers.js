import React from 'react'
import { Typography } from '@material-ui/core'
import './styles/sections.css'

// import PropTypes from 'prop-types'

const Blockers = props => {
    return (
        <div className='component' id='blockers'>
                <div className='toolbar'>
                    <Typography variant="h6" color='inherit'><i id='iconQ' className="fas fa-brain"></i> Current Blockers </Typography>
                    <button className='addBtn' color='secondary'><i className="fas fa-plus"></i> </button>
                </div>
                <div id='blockerList'>
                    <Blocker title={'item 1'}/>
                    <Blocker title={'item 2'}/>
                    <Blocker title={'item 3'}/>
                    <Blocker title={'item 4'}/>
                    <Blocker title={'item 5'}/>
                    <Blocker title={'item 6'}/>
                    <Blocker title={'item 7'}/>
                    <Blocker title={'item 8'}/>
                    <Blocker title={'item 9'}/>
                </div>     
        </div>
    )
}

export const Blocker = props => {
    return (
        <div className='newItem' id='newBlocker'>
            <p>{props.title}</p>
        </div>
    )
}

Blockers.propTypes = {
    // title: String
}

export default Blockers
