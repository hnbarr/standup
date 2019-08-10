import React, { Component } from 'react'
// import Moment from 'react'
// import PropTypes from 'prop-types'
// import { useState } from 'react'
import { withStyles } from '@material-ui/core/styles';
import { Typography, TextField, Button, Modal } from '@material-ui/core'
import { Link } from 'react-router-dom'
import './styles/sections.css'

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
    container: {
        display: 'flex',
        flexWrap: 'wrap',
      },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    }
  });


class ProjectModal extends Component {
    state = {
        open: false,
        title: '',
        description: '',
        deadline: '',
        submitted: [], //for stats
        // id: this.state._id,
        logs: [] //for log section
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
            description: '',
            deadline: '',
            submitted: [...this.state.submitted],
            // id: this.state._id,
            logs: []
        })
    };

    handleSubmit = () => {
        const {title, description, deadline} = this.state
        // const DATE = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        // const updatedDeadline = deadline.toLocaleDateString('en-US', DATE)
        let options = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({ title, description, deadline })
        }
        fetch("/api/projects", options).then((res)=>{
            return res.json()
        }).then((res)=>{
            this.props.listProjects()
            console.log(res)
        }).catch((err)=>{
            console.log(err)
        })
        this.handleClose()
    }

    handleChange = (e) => {
        const newState = {...this.state}
        newState[e.target.name] = e.target.value
        this.setState(newState)
    }

    
    render(){
        const { classes } = this.props

        return (
            <div>
                <button onClick={this.handleOpen} className='addBtn'><i className="fas fa-plus-circle fa-2x"></i> </button>
                <Modal aria-labelledby="simple-modal-title" aria-describedby="simple-modal-description" open={this.state.open} onClose={this.handleClose}>
                    <form id='addNewProject' className={classes.paper} onSubmit={this.handleSubmit}>
                        <Typography id='modalName' color='primary'> add a new project</Typography>
                        <TextField onChange={this.handleChange} value={this.state.title} name='title' className="formTitle" label="title" margin="normal" variant="outlined"/>
                        
                        
                        <TextField onChange={this.handleChange} value={this.state.deadline} name='deadline' className="formTag" label="deadline" margin="normal" variant="outlined" placeholder='mm/dd/yyyy'/>
                        {/* <DatePicker date={this.state.deadline} onChange={this.handleDate}/> */}
                        
                        <TextField onChange={this.handleChange} value={this.state.description} name='description' className='formText' id="outlined-multiline-static" label="description" rows="5" margin="normal" variant="outlined" multiline />
                        <div id='modalButtons'>
                            <Button onClick={this.handleSubmit} type='submit' className='formBtn' variant='outlined' color='primary'>Add New</Button>
                            <Button onClick={this.handleClose} className='closeBtn' variant='outlined'>cancel</Button>
                        </div>
                    </form>
                </Modal>
            </div>
        )
    }
}


const Project = props => {
    console.log('project props : ', props)
    const handleDelete = (e) => {
        console.log(e.target)
    }
    const handleSubmit = (e) => {
        console.log(e.target)
    }

    return (
        <div className='newItem' id='newProject'>
            <div id='projTitle'>
                <p>{props.title}</p>
            </div>
            <div id='projDeadline'>
                <div id='dline'>
                    <b>Deadline:</b>
                    <p>{props.deadline}</p>
                    {/* <Moment format='MM/DD/YYYY'>{props.deadline}</Moment>  */}
                </div>
            </div>
            <div id='projDes'>
                <p> {props.description}</p>
            </div>
            <div id='projButtons'>
            {/* pretty sure I need to change to tic marks and access project Id from state, postman workign able to post diff logs to specific projects */}
                <Link to={`/projects/${props.id}/logs`} className='edit'>details{/*number of log list items for project*/} </Link>
                <button onClick={handleDelete} className='trash'>delete</button>
                <button onClick={handleSubmit} className='submit'>submit</button>
            </div>
        </div>
    )
}

const Projects = (props) => {
    console.log('projects props: ', props)

    return (
        <div className='component' id='projects'>
            <div className='toolbar'>
                <Typography variant="subtitle1" color='inherit'> <i id='iconP' className="fas fa-project-diagram"></i> Projects </Typography>
                <ProjectModal {...props}/>
            </div>
            <form id='search'>
                <TextField id="searchBar" color='primary' label="search" placeholder='eg. crud'/>
                <Button id='searchBtn' color='primary' type='submit' variant='outlined' >go</Button>
            </form>
            <div id='projectList'>
                {props.projects.map((p)=>{
                    return <Project key={p._id} id={p._id} logs={p.logs} title={p.title} description={p.description} deadline={p.deadline}/>
                })}
            </div>        
        </div>
    )
}

Projects.propTypes = {
    // title: String,
    // description: String,
    // deadline: Date
}

export default withStyles(styles)(Projects)


