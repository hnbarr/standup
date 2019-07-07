import React from 'react'
import { Paper, Typography } from '@material-ui/core'
import './styles/sections.css'

// import PropTypes from 'prop-types'

const Blockers = props => {
    return (
        <div className='component' id='blockers'>
            <Paper>
                <div className='toolbar'>
                    <Typography variant="h6" color='inherit'><i id='iconQ' className="far fa-question-circle"></i> Current Blockers </Typography>
                    <button className='addBtn' color='secondary'><i className="fas fa-plus"></i> </button>
                </div>
             </Paper> 
             <Paper>
                    <div id='blockerList'>
                        <ul>
                            <Blocker />
                        </ul>
                    </div>     
                </Paper>      
        </div>
    )
}

export const Blocker = props => {
    return (
        <div className='newItem' id='newBlocker'>
             <ul>
                <li> New Blocker</li>
            </ul>
        </div>
    )
}

Blockers.propTypes = {

}

export default Blockers
