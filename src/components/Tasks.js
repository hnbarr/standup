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

//   need to make modal for edit, use gett request to update.

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
        const task = this.state.task
        const date = new Date()

            let options = {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({ task, date })
            }
            fetch("/api/tasks", options).then((res)=>{
                return res.json()
            }).then((res)=>{
                this.props.listTasks()
                console.log(res)
            }).catch((err)=>{
                console.log(err)
            })
        // this.props.listTasks()
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
                        <TextField  onChange={e => this.setNewTask(e.target.value)} value={this.state.task} className="formTitle" name='task' label="task"  placeholder='eg. finish responsive button' margin="normal" variant="outlined"/>
                        <div id='modalButtons'>
                            <Button onClick={this.handleSubmit} type='submit' className='formBtn' variant='outlined' color='primary'>add new</Button>
                            <Button onClick={this.toggleOpen} className='closeBtn' variant='outlined'>cancel</Button>
                        </div>
                    </form>
                </Modal>
            </div>
        )
    }
}

const Task = props => {
    const tag = props.tag
    const handleCheck = (e) => {
        // console.log(e.target.value)
        e.preventDefault()
        props.deleteTask(tag)
        setTimeout(() => {
            props.listTasks()
          }, 300)
    }
    const handleEdit = (e) => {
        console.log(e.target)
        this.props.updateTask(e.target.value, e.target.id)
    }
    
    return (
        <div className='newItem' id='newTask'>
            <Checkbox onClick={(e)=>handleCheck(e)} tag={tag}inputProps={{'aria-label': 'primary checkbox'}}/>
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
                    return <Task key={i} tag={t._id} value={t.task} {...props}/>
                })}
            </div>         
        </div>
    )
}

Tasks.propTypes = {
    // title: String
}

export default withStyles(styles)(Tasks)
