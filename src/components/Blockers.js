import React from 'react'
import { Typography, Checkbox } from '@material-ui/core'
import './styles/sections.css'

// import PropTypes from 'prop-types'

const Blockers = props => {
    return (
        <div className='component' id='blockers'>
                <div className='toolbar'>
                    <Typography variant="subtitle1" color='inherit'><i id='iconQ' className="fas fa-brain"></i> Current Blockers </Typography>
                    <button className='addBtn' color='secondary'><i className="fas fa-plus-circle fa-2x"></i> </button>
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
    const handleEdit = (e) => {
        console.log(e.target)
    }

    const handleCheck = (e) => {
        console.log(e.target)
    }
    return (
        <div className='newItem' id='newBlocker'>
            <Checkbox value={props.title} onClick={handleCheck} inputProps={{'aria-label': 'primary checkbox'}}/>
            <p id='blockerTitle'>{props.title}</p>
            <div id='blockerButtons'>
                <button onClick={handleEdit} className='edit'><i className="fas fa-pencil-alt fa-2x"></i></button>
            </div>
        </div>
    )
}

Blockers.propTypes = {
    // title: String
}

export default Blockers
