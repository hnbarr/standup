import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles';
import { Typography, TextField, Button, Modal } from '@material-ui/core'
import './styles/sections.css'
import { Link } from 'react-router-dom'

const styles = theme => ({
    paper: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '500px',
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
    // const [open, setOpen] = useState(false);
    // const [description, setNewDescription] = useState('')
    // const [title, setNewTitle] = useState('');
    // const [deadline, setNewDeadline] = useState('');

    // const classes = useStyles();

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
        // console.log('new title: ', title, 'new description: ', description, 'new deadline: ', deadline)
        this.props.createProject({title, description, deadline})
        this.handleClose()
    }

    handleTextChange = (e) => {
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
                        <TextField onChange={e => this.handleTextChange(e)} value={this.state.title} name='title' className="formTitle" label="title" margin="normal" variant="outlined"/>
                        <TextField onChange={e => this.handleTextChange(e)} value={this.state.deadline} name='deadline' className="formTag" label="deadline" margin="normal" variant="outlined" placeholder='mm/dd/yyyy'/>
                        <TextField onChange={e => this.handleTextChange(e)} value={this.state.description} name='description' className='formText' id="outlined-multiline-static" label="description" rows="5" margin="normal" variant="outlined" multiline />
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
                </div>
            </div>
            <div id='projDes'>
                <p> {props.description}</p>
            </div>
            <div id='projButtons'>
                <Link to='./log' className='edit'>details <span>{props.logs}</span>{/*number of log list items for project*/} </Link>
                {/* <i className="fas fa-pencil-alt fa-2x"></i> */}
                <button onClick={handleDelete} className='trash'>delete</button>
                {/* <i  className="fas fa-trash-alt fa-2x"></i> */}
                <button onClick={handleSubmit} className='submit'>submit</button>
                {/* <i className="fas fa-clipboard-check fa-2x"></i> */}
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
                {/* map here */}
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


