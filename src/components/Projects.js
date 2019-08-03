import React, { Component } from 'react'
// import PropTypes from 'prop-types'
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
  });

class ProjectModal extends Component {
    state = {
        open: false,
        title: '',
        description: '',
        deadline: ''
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
            deadline: ''
        })
    };

    handleSubmit = () => {
        const {title, description, deadline} = this.state
        this.props.createProject({title, description, deadline})
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
                        <TextField onChange={e => this.handleChange(e)} value={this.state.title} name='title' className="formTitle" label="title" margin="normal" variant="outlined"/>
                        <TextField onChange={e => this.handleChange(e)} value={this.state.deadline} name='deadline' className="formTag" label="deadline" margin="normal" variant="outlined" placeholder='mm/dd/yyyy'/>
                        <TextField onChange={e => this.handleChange(e)} value={this.state.description} name='description' className='formText' id="outlined-multiline-static" label="description" rows="5" margin="normal" variant="outlined" multiline />
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
                <p>{props.value.title}</p>
            </div>
            <div id='projDeadline'>
                <div id='dline'>
                    <b>Deadline:</b>
                    <p>{props.value.deadline}</p>
                </div>
            </div>
            <div id='projDes'>
                <p> {props.value.description}</p>
            </div>
            <div id='projButtons'>
                <Link to='./log' className='edit'>details <span>{props.logs}</span>{/*number of log list items for project*/} </Link>
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
                {props.projects.map((p, i)=>{
                    return <Project key={i} value={p}/>
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


