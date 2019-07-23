import React from 'react'
import './styles/log.css'
import Nav from './Nav'
import { useState } from 'react'
import { TextField, Button, Modal, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
// import PropTypes from 'prop-types'

const Log = props => {
    return (
        <div id='log'>
            <Nav id='navLog'/>
            <div id='logLeftPane'>
                <div id='logBar'> 
                    <h3>project title</h3>
                    <LogModal />
                </div>
                <form id='search'>
                    <TextField id="searchTag" label="search" placeholder='eg. mongo'/>
                    <Button id='searchBtn' color='primary' type='submit'>go</Button>
                </form>
                <div id='logList'>
                    <LogListItem title='thinking of changing to bootstrap' date='04-20-2019' tag='styles' />
                    <LogListItem title='easy router setup' date='02-15-2019' tag='react router' />
                    <LogListItem title='getting mongo connected' date='04-15-2019' tag='mongo' />
                    <LogListItem title='deploy app test' date='04-20-2019' tag='heroku' />
                    <LogListItem title='starting project: the plan' date='02-15-2019' tag='start' />
                    <LogListItem title='easy router setup' date='02-15-2019' tag='react router' />
                    <LogListItem title='getting mongo connected' date='04-15-2019' tag='mongo' />
                </div>
            </div>

            <div id='logRightPane'>
                <LogPreview />
            </div>
        </div>
    )
}

export const LogListItem = props => {
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

export const LogPreview = props => {
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

export const LogModal = props => { 
    const [open, setOpen] = useState(false);
    const [title, setNewTitle] = useState('');
    const [tag, setNewTag] = useState('');
    const [text, setNewText] = useState('');
    
      const useStyles = makeStyles(theme => ({
        paper: {
          position: 'absolute',
          top: '100px',
          left: '300px',
          width: '500px',
          [theme.breakpoints.down('sm')]: {
            top: '80px',
            left: '150px',
            width: '400px'
          },
          [theme.breakpoints.down('xs')]: {
            top: '50px',
            left: '40px',
            width: '300px'
          },
          backgroundColor: theme.palette.background.paper,
          border: '2px solid #000',
          boxShadow: theme.shadows[5],
          padding: theme.spacing(2, 4, 4),
          outline: 'none',
        },
      }));

    const classes = useStyles();


    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
      setNewTag('')
      setNewText('')
      setNewTitle('')
    };

    const handleSubmit = () => {
        console.log('text: ', text, "title: ", title, 'tag: ', tag)
        handleClose()
    }
    

    return (
        <div>
            <button onClick={handleOpen} className='addBtn' ><i className="fas fa-plus-circle fa-2x"></i> </button>
            <Modal aria-labelledby="simple-modal-title" aria-describedby="simple-modal-description" open={open} onClose={handleClose}>
                <form id='addNewLog' className={classes.paper}>
                    <Typography id='modalName' color='primary'> add a new log</Typography>
                    <TextField onChange={e => setNewTitle(e.target.value)} value={title} name='title' className="formTitle" label="Title" margin="normal" variant="outlined"/>
                    <TextField onChange={e => setNewTag(e.target.value)} value={tag} name='tag' className="formTag" label="Tag" margin="normal" variant="outlined" placeholder='eg. Redux'/>
                    <TextField onChange={e => setNewText(e.target.value)} value={text} name='text' className='formText' id="outlined-multiline-static" label="write here" rows="5" margin="normal" variant="outlined" multiline />
                    <div id='modalButtons'>
                        <Button onClick={handleSubmit} className='formBtn' variant='outlined' color='primary'>Add New</Button>
                        <Button onClick={handleClose} className='closeBtn' variant='outlined' color='default'>cancel</Button>
                    </div>
                </form>
            </Modal>
        </div>
    )
}

Log.propTypes = {

}

export default Log
