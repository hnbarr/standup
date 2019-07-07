import React from 'react'
import { AppBar, Typography } from '@material-ui/core'
import './styles/sections.css'

// import PropTypes from 'prop-types'

const Blockers = props => {
    return (
        <div className='component' id='blockers'>
            <AppBar position="static" color='primary'>
                <div className='toolbar'>
                    <Typography variant="h6" color='inherit'> <i className="far fa-question-circle"></i> Current Blockers </Typography>
                    <button className='addBtn' color='secondary'><i className="fas fa-plus"></i> </button>
                </div>
                <AppBar position="static" color='secondary'>
                    <div>
                        <Typography> Test etst test</Typography>
                    </div>
                </AppBar>
             </AppBar>      
        </div>
    )
}

Blockers.propTypes = {

}

export default Blockers
