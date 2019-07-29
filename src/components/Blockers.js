import React from 'react'
import { useState } from 'react'
import { Typography, Checkbox, TextField, Button, Modal } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import './styles/sections.css'
import { createBlocker } from '../redux/actions/blockerActions';

// import PropTypes from 'prop-types'

class Blockers extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
            title: '' 
        }
    }

    componentDidMount(){
        
    }

    render(){
        console.log(this.props)
    return (
        <div className='component' id='blockers'>
                <div className='toolbar'>
                    <Typography variant="subtitle1" color='inherit'><i id='iconQ' className="fas fa-brain"></i> Current Blockers </Typography>
                    <BlockerModal />
                </div>
                <div id='blockerList'>
                </div>     
        </div>
    )}
}

export const BlockerModal = props => {
    const [open, setOpen] = useState(false);
    const [blocker, setNewBlocker] = useState('')
    
    const useStyles = makeStyles(theme => ({
      paper: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '500px',
        height: '300px',
        margin: '0 auto',
        [theme.breakpoints.down('sm')]: {
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '400px'
        },
        [theme.breakpoints.down('xs')]: {
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '300px',
            height: '250px',
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
    setNewBlocker('')
  };

  const handleSubmit = (e) => { 
    e.preventDefault()
    console.log('new blocker onSubmit: ', blocker)
    createBlocker(blocker)
    handleClose()
  }
    return (
        <div>
            <button onClick={handleOpen} className='addBtn'><i className="fas fa-plus-circle fa-2x"></i> </button>
            <Modal aria-labelledby="simple-modal-title" aria-describedby="simple-modal-description" open={open} onClose={handleClose}>
                <form id='addNewBlocker' className={classes.paper} onSubmit={handleSubmit}>
                    <Typography id='modalName' color='primary'> what's getting in your way?</Typography>
                    <TextField onChange={e => setNewBlocker(e.target.value)} value={blocker} name='blocker' className="formTitle" label="blocker" placeholder='eg. hiding connection string'margin="normal" variant="outlined"/>
                    <div id='modalButtons'>
                        <Button onClick={handleSubmit} type='submit' className='formBtn' variant='outlined' color='primary'>add new</Button>
                        <Button onClick={handleClose} className='closeBtn' variant='outlined'>cancel</Button>
                    </div>
                </form>
            </Modal>
        </div>
    )
}


export const Blocker = props => {
    const handleEdit = (e) => {
        console.log(e.target, 'editing')
    }

    const handleCheck = (e) => {
        console.log(e.target.value, 'checkd')
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


// Blockers.propTypes = {
//     title: String
// }

export default Blockers
