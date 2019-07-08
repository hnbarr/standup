import React from 'react'
import { Paper, Typography } from '@material-ui/core'
import './styles/sections.css'

// import PropTypes from 'prop-types'

const Blockers = props => {
    return (
        <div className='component' id='blockers'>
            <Paper>
                <div className='toolbar'>
                    <Typography variant="h6" color='inherit'><i id='iconQ' className="fas fa-brain"></i> Current Blockers </Typography>
                    <button className='addBtn' color='secondary'><i className="fas fa-plus"></i> </button>
                </div>
             </Paper> 
                <div id='blockerList'>
                    <Blocker />
                    <Blocker />
                    <Blocker />
                    <Blocker />
                </div>     
        </div>
    )
}

export const Blocker = props => {
    return (
        <div className='newItem' id='newBlocker'>
            <p>New blocker!</p>
            <p>material UI styling</p>
        </div>
    )
}

Blockers.propTypes = {

}

export default Blockers
