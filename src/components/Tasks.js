import React from 'react'
// import PropTypes from 'prop-types'
import { Typography, Checkbox, TextField, Button, Modal } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import './styles/sections.css'
import { useState } from 'react'
// import TaskModal from './Modals'

const Tasks = props => {
    return (
        <div className='component' id='tasks'>
            <div className='toolbar'>
                <Typography variant="subtitle1" color="inherit"> <i id='iconT' className="fas fa-tasks"></i> Today's Checklist</Typography>
                <TaskModal />
            </div>
            <div id='taskList'>
                {/* <Task title={'item 1'}/>
                <Task title={'item 2'}/>
                <Task title={'item 3'}/>
                <Task title={'item 4'}/>
                <Task title={'item 5'}/>
                <Task title={'item 6'}/>
                <Task title={'item 7'}/>
                <Task title={'item 8'}/>
                <Task title={'item 9'}/>
                <Task title={'item 10'}/>
                <Task title={'item 11'}/> */}
            </div>          
        </div>
    )
}

export const Task = props => {
    const handleCheck = (e) => {
        console.log(e.target.value)
        // setTimeout to remove from array
        // setTimeout to add +1 to tasksCompleted in stats
    }
    const handleEdit = (e) => {
        console.log(e.target)
    }
    
    return (
        <div className='newItem' id='newTask'>
            <Checkbox value={props.title} onClick={handleCheck} inputProps={{'aria-label': 'primary checkbox'}}/>
            <p id='taskTitle'>{props.title}</p>
            <div id='taskButtons'>
                <button onClick={handleEdit} className='edit'><i className="fas fa-pencil-alt fa-2x"></i></button>
            </div>
        </div>
    )
}

export const TaskModal = props => {
    const [open, setOpen] = useState(false);
    const [task, setNewTask] = useState('');
    
    const useStyles = makeStyles(theme => ({
      paper: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '500px',
        height: '300px',
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
    setNewTask('');
  };

  const handleSubmit = () => {
    console.log('new task: ', task,)
    handleClose()
  }
  
    return (
        <div>
            <button onClick={handleOpen} className='addBtn'><i className="fas fa-plus-circle fa-2x"></i> </button>
            <Modal aria-labelledby="simple-modal-title" aria-describedby="simple-modal-description" open={open} onClose={handleClose}>
                <form id='addNewTask' className={classes.paper} onSubmit={handleSubmit}>
                    <Typography id='modalName' color='primary'> what else to do today?</Typography>
                    <TextField  onChange={e => setNewTask(e.target.value)} className="formTitle" name='task' value={task} label="task"  placeholder='eg. finish responsive button' margin="normal" variant="outlined"/>
                    <div id='modalButtons'>
                        <Button onClick={handleSubmit} type='submit' className='formBtn' variant='outlined' color='primary'>add new</Button>
                        <Button onClick={handleClose} className='closeBtn' variant='outlined'>cancel</Button>
                    </div>
                </form>
            </Modal>
        </div>
    )
}


Tasks.propTypes = {
    // title: String
}

export default Tasks
