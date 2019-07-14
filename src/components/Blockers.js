import React from 'react'
import { Typography, Checkbox, TextField, Button, Modal } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import './styles/sections.css'

// import PropTypes from 'prop-types'

const Blockers = props => {
    return (
        <div className='component' id='blockers'>
                <div className='toolbar'>
                    <Typography variant="subtitle1" color='inherit'><i id='iconQ' className="fas fa-brain"></i> Current Blockers </Typography>
                    <BlockerModal />
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

export const BlockerModal = props => {
    const [open, setOpen] = React.useState(false);
    
    const useStyles = makeStyles(theme => ({
      paper: {
        position: 'absolute',
        top: '100px',
        left: '250px',
        width: '500px',
        height: '300px',
        [theme.breakpoints.down('sm')]: {
            top: '80px',
            left: '100px',
            width: '400px'
        },
        [theme.breakpoints.down('xs')]: {
            top: '50px',
            left: '50px',
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
  };
    return (
        <div>
            <button onClick={handleOpen} className='addBtn'><i className="fas fa-plus-circle fa-2x"></i> </button>
            <Modal aria-labelledby="simple-modal-title" aria-describedby="simple-modal-description" open={open} onClose={handleClose}>
                <div id='addNewProject' className={classes.paper}>
                    <Typography id='modalName' color='primary'> what's getting in your way?</Typography>
                    <TextField className="formTitle" label="blocker" placeholder='eg. hiding connection string'margin="normal" variant="outlined"/>
                    <div id='buttons'>
                        <Button className='formBtn' variant='outlined' color='primary'>add new</Button>
                        <Button onClick={handleClose} className='closeBtn' variant='outlined'>cancel</Button>
                    </div>
                </div>
            </Modal>
        </div>
    )
}


Blockers.propTypes = {
    // title: String
}

export default Blockers
