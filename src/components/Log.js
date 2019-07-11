import React from 'react'
import './styles/log.css'
import Nav from './Nav'
import { TextField, Button } from '@material-ui/core'
// import PropTypes from 'prop-types'

const Log = props => {
    return (
        <div id='log'>
            <Nav id='navLog'/>
            <div id='logLeftPane'>
                <div id='logh3'> 
                    <h3>Logs</h3>
                    <TextField id="formTag" label="search" placeholder='eg. mongo'/>
                    {/* <i className="fas fa-sort"></i> */}
                </div>
                <div id='logList'>
                    <LogListItem title='middleware hack' date='04-20-2019' tag='express' />
                    <LogListItem title='easy router' date='02-15-2019' tag='react router' />
                    <LogListItem title='mongo steps' date='04-15-2019' tag='mongo' />
                    <LogListItem title='middleware hack' date='04-20-2019' tag='express' />
                    <LogListItem title='easy router' date='02-15-2019' tag='react router' />
                    <LogListItem title='mongo steps' date='04-15-2019' tag='mongo' />
                    <LogListItem title='easy router' date='02-15-2019' tag='react router' />
                    <LogListItem title='mongo steps' date='04-15-2019' tag='mongo' />
                </div>
            </div>

            <div id='logRightPane'>
                <LogForm />
                <LogPreview />
            </div>
        </div>
    )
}

const LogForm = props => {
    return (
        <form id='addNewLog'>
            <TextField id="formTitle" label="Title" margin="normal" variant="outlined"/>
            <TextField id="formTag" label="Tag" margin="normal" variant="outlined" placeholder='eg. Redux'/>
            <TextField id="formText" label="Text" placeholder="write here ..." multiline margin="normal" variant="outlined"/>
            <Button id='formBtn' variant='outlined' color='primary'>Add New</Button>
        </form>
    )
}

const LogListItem = props => {
    return (
        <div className='logItem'> 
            <div id='deets'>
                <p id='liTitle'>{props.title}</p>
                <p id='liDate'>{props.date}</p>
                <p id='liTag'>{props.tag}</p>
            </div>
        </div>
    )
}

const LogPreview = props => {
    return (
        <div className='logPreview'>
            have edit and delete buttons!
        </div>
    )
}

Log.propTypes = {

}

export default Log
