import React, { Component } from 'react'
import './styles/log.css'
import Nav from './Nav'
import { TextField, Button, Modal, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';
// import PropTypes from 'prop-types'

const styles = theme => ({
    paper: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '500px',
      [theme.breakpoints.down('sm')]: {
        width: '400px'
      },
      [theme.breakpoints.down('xs')]: {
        width: '300px'
      },
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 4),
      outline: 'none',
    },
  });


  class LogModal extends Component { 
    state = {
        open: false,
        title: '',
        tag: '',
        description: '',
    }

    handleOpen = () => {
        this.setState({
            open: (!this.state.open)
        })
    };
  
    handleClose = () => {
        this.setState({
            open: !this.state.open,
            title: '',
            tag: '',
            description: ''
        })
    };

    handleSubmit = () => {
        // debugger;
        const {title, tag, description} = this.state
        this.props.createLog({title, tag, description})
        this.handleClose()
    }

    handleChange = (e) => {
        const newState = {...this.state}
        newState[e.target.name] = e.target.value
        this.setState(newState)
    }
    
    render() {
        const { classes } = this.props

        return (
            <div>
                <button onClick={this.handleOpen} className='addBtn' ><i className="fas fa-plus-circle fa-2x"></i> </button>
                <Modal aria-labelledby="simple-modal-title" aria-describedby="simple-modal-description" open={this.state.open} onClose={this.handleClose}>
                    <form id='addNewLog' className={classes.paper} onSubmit={this.handleSubmit}>
                        <Typography id='modalName' color='primary'> add a new log</Typography>
                        <TextField onChange={e => this.handleChange(e)} value={this.state.title} name='title' className="formTitle" label="Title" margin="normal" variant="outlined"/>
                        <TextField onChange={e => this.handleChange(e)} value={this.state.tag} name='tag' className="formTag" label="Tag" margin="normal" variant="outlined" placeholder='eg. Redux'/>
                        <TextField onChange={e => this.handleChange(e)} value={this.state.description} name='description' className='formText' id="outlined-multiline-static" label="write here" rows="5" margin="normal" variant="outlined" multiline />
                        <div id='modalButtons'>
                            <Button onClick={this.handleSubmit} className='formBtn' variant='outlined' color='primary'>Add New</Button>
                            <Button onClick={this.handleClose} className='closeBtn' variant='outlined' color='default'>cancel</Button>
                        </div>
                    </form>
                </Modal>
            </div>
        )
    }
}

const Log = props => {
    console.log('logProps: ', props)
    const handleSelect = (e) => {
        e.preventDefault()
        console.log(e.target)
    }
    return (
        <div className='logItem' onClick={handleSelect}> 
            <div id='deets'>
                <p id='liTitle'>{props.title}</p>
                <p id='liDate'>{props.description}</p>
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
                body here
            </div>
            <div id='previewBtns'>
                <button onClick={handleEdit} className='edit'>edit </button>
                <button onClick={handleDelete} className='trash'>delete</button>
            </div>
        </div>
    )
}

const Logs = props => {
    console.log('logs props : ', props)
    return (
        <div id='log'>
            <Nav id='navLog'/>
            <div id='logLeftPane'>
                <div id='logBar'> 
                    <h3>project title</h3>
                    <LogModal {...props} />
                </div>
                <form id='search'>
                    <TextField id="searchTag" label="search" placeholder='eg. mongo'/>
                    <Button id='searchBtn' color='primary' type='submit'>go</Button>
                </form>
                <div id='logList'>
                    <Log />
                    {/* map here */}
                </div>
            </div>

            <div id='logRightPane'>
                <LogPreview />
            </div>
        </div>
    )
}

Logs.propTypes = {

}

export default withStyles(styles)(Logs)
