import React from 'react'
// import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles';
import { Typography, TextField, Button, Modal } from '@material-ui/core'
import './styles/sections.css'
import { Link } from 'react-router-dom'

const Projects = props => {
    return (
        <div className='component' id='projects'>
            <div className='toolbar'>
                <Typography variant="subtitle1" color='inherit'> <i id='iconP' className="fas fa-project-diagram"></i> Projects </Typography>
                <ProjectModal />
            </div>
            <div id='projectList'>
                <Project title={"trails n' tails"} logs={'5'} description={'dog friendly trail finding app'} deadline={'12-12-2019'}/>
                <Project title={'standup'} logs={'3'} description={'CRUD Application'} deadline={'08-10-2019'}/>
                <Project title={'testApp'} logs={'7'} description={'testing scroll testing scroll testing scroll testing scroll testing scroll testing scroll testing scroll testing scroll testing scroll '} deadline={'10-10-2019'}/>
                <Project title={"trails n' tails"} logs={'2'} description={'dog friendly trail finding app'} deadline={'12-12-2019'}/>
            </div>        
        </div>
    )
}

export const Project = props => {
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

export const ProjectModal = props => {
    const [open, setOpen] = React.useState(false);
    
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
    };
    return (
        <div>
            <button onClick={handleOpen} className='addBtn'><i className="fas fa-plus-circle fa-2x"></i> </button>
            <Modal aria-labelledby="simple-modal-title" aria-describedby="simple-modal-description" open={open} onClose={handleClose}>
                <div id='addNewBlocker' className={classes.paper}>
                    <Typography id='modalName' color='primary'> add a new project</Typography>
                    <TextField className="formTitle" label="title" margin="normal" variant="outlined"/>
                    <TextField className="formTag" label="deadline" margin="normal" variant="outlined" placeholder='mm/dd/yyyy'/>
                    <TextField className='formText' id="outlined-multiline-static" label="description" rows="5" margin="normal" variant="outlined" multiline />
                    <div id='modalButtons'>
                        <Button className='formBtn' variant='outlined' color='primary'>Add New</Button>
                        <Button onClick={handleClose} className='closeBtn' variant='outlined'>cancel</Button>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

Projects.propTypes = {
    // title: String,
    // description: String,
    // deadline: Date
}

export default Projects


