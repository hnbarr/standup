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
                <div id='logBar'> 
                    <h3>Logs</h3>
                    <button className='addBtn' color='secondary'><i className="fas fa-plus-circle fa-2x"></i> </button>
                </div>
                <div id='logList'>
                <TextField id="formTag" label="search" placeholder='eg. mongo'/>
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
                <LogPreview />
            </div>
        </div>
    )
}

// const LogForm = props => { //this will come up on modal
//     return (
//         <form id='addNewLog'>
//             <TextField id="formTitle" label="Title" margin="normal" variant="outlined"/>
//             <TextField id="formTag" label="Tag" margin="normal" variant="outlined" placeholder='eg. Redux'/>
//             <TextField id="formText" label="Text" placeholder="write here ..." multiline margin="normal" variant="outlined"/>
//             <Button id='formBtn' variant='outlined' color='primary'>Add New</Button>
//         </form>
//     )
// }

const LogListItem = props => {
    const handleSelect = (e) => {
        e.preventDefault()
        console.log(e.target)
    }
    return (
        <div className='logItem' onClick={handleSelect}> 
            <div id='deets'>
                <p id='liTitle'>{props.title}</p>
                <p id='liDate'>{props.date}</p>
                <p id='liTag'>{props.tag}</p>
            </div>
        </div>
    )
}

const LogPreview = props => {
    const handleEdit = () => {

    }
    const handleDelete = () => {

    }
    return (
        <div className='logPreview'>
            <div id='previewDetails'>
                display name, date and tag of clicked log.  
            </div>
            <div id='previewTextBox'>
                display description/body of clicked on log
            </div>
            <div id='previewBtns'>
                <button onClick={handleEdit} className='edit'>edit </button>
                <button onClick={handleDelete} className='trash'>delete</button>
            </div>
        </div>
    )
}

Log.propTypes = {

}

export default Log
