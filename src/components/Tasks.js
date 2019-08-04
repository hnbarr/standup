import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { Typography, Checkbox, TextField, Button, Modal } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';
import './styles/sections.css'


const styles = theme => ({
    paper: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '500px',
      height: '300px',
      [theme.breakpoints.down('sm')]: {
          width: '400px'
      },
      [theme.breakpoints.down('xs')]: {
          width: '300px',
          height: '250px',
      },
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 4),
      outline: 'none',
    },
  });

class TaskModal extends Component {
    state = {
        open: false,
        task: '',
        checked: [] //for task progress in stats
    }

    toggleOpen = () => this.setState({ open: !this.state.open })

    setNewTask = (value) => this.setState({ task: value })

    handleClose = () => {this.setState({task: ''})};

    handleSubmit = (e) => { 
        e.preventDefault()
        // this.props.createTask(this.state.task)
        const {tasks} = this.state
            let options = {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({ tasks })
            }
            fetch("/api/tasks", options).then((res)=>{
                return res.json()
            }).then((res)=>{
                console.log(res)
            }).catch((err)=>{
                console.log(err)
            })
        this.props.listTasks()
        this.toggleOpen()
        this.handleClose()
    }
    render() {
        const { classes } = this.props

        return (
            <div>
                <button onClick={this.toggleOpen} className='addBtn'><i className="fas fa-plus-circle fa-2x"></i> </button>
                <Modal aria-labelledby="simple-modal-title" aria-describedby="simple-modal-description" open={this.state.open} onClose={this.handleClose}>
                    <form id='addNewTask' className={classes.paper} onSubmit={this.handleSubmit}>
                        <Typography id='modalName' color='primary'> what else to do today?</Typography>
                        <TextField  onChange={e => this.setNewTask(e.target.value)} className="formTitle" name='task' value={this.state.task} label="task"  placeholder='eg. finish responsive button' margin="normal" variant="outlined"/>
                        <div id='modalButtons'>
                            <Button onClick={this.handleSubmit} type='submit' className='formBtn' variant='outlined' color='primary'>add new</Button>
                            <Button onClick={this.handleClose} className='closeBtn' variant='outlined'>cancel</Button>
                        </div>
                    </form>
                </Modal>
            </div>
        )
    }
}

const Task = props => {
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
            <p id='taskTitle'>{props.value}</p>
            <div id='taskButtons'>
                <button onClick={handleEdit} className='edit'><i className="fas fa-pencil-alt fa-2x"></i></button>
            </div>
        </div>
    )
}

const Tasks = props => {
    console.log('tasks props: ', props)

    return (
        <div className='component' id='tasks'>
            <div className='toolbar'>
                <Typography variant="subtitle1" color="inherit"> <i id='iconT' className="fas fa-tasks"></i> Today's Checklist</Typography>
                <TaskModal {...props}/>
            </div>
            <div id='taskList'>
                {props.tasks.map((t, i)=>{
                    return <Task key={i} value={t.task}/>
                })}
            </div>         
        </div>
    )
}

Tasks.propTypes = {
    // title: String
}

export default withStyles(styles)(Tasks)
