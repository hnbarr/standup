import React, { Component } from 'react'
import { Typography, Checkbox, TextField, Button, Modal } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';
import './styles/sections.css'
// import PropTypes from 'prop-types'

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
          width: '300px',
      },
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 4),
      outline: 'none',
    }
  });

class BlockerModal extends Component {
    state = {
        open: false,
        blocker: '',
        checked: [] //for blockers defeated in stats
    }
    toggleOpen = () => this.setState({ open: !this.state.open })

    setNewBlocker = (value) => this.setState({ blocker: value })

    handleClose = () => {this.setState({blocker: ''})};

    handleSubmit = (e) => { 
        e.preventDefault()
        // console.log('new blocker onSubmit: ', this.state.blocker)
        // this.props.createBlocker(this.state.blocker)
            const {blocker} = this.state
            let options = {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({ blocker })
            }
            fetch("/api/blockers", options).then((res)=>{
                return res.json()
            }).then((res)=>{
                console.log(res)
            }).catch((err)=>{
                console.log(err)
            })
        this.props.listBlockers()
        this.toggleOpen()
        this.handleClose()
    }

    render() {
        const { classes } = this.props

        return (
            <div>
                <button onClick={this.toggleOpen} className='addBtn'><i className="fas fa-plus-circle fa-2x"></i> </button>
                <Modal aria-labelledby="simple-modal-title" aria-describedby="simple-modal-description" open={this.state.open} onClose={this.toggleOpen}>
                    <form id='addNewBlocker' className={classes.paper} onSubmit={this.handleSubmit}>
                        <Typography id='modalName' color='primary'> what's getting in your way?</Typography>
                        <TextField onChange={e => this.setNewBlocker(e.target.value)} value={this.state.blocker} name='blocker' className="formTitle" label="blocker" placeholder='eg. hiding connection string'margin="normal" variant="outlined"/>
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



const Blocker = props => {
    const handleEdit = (e) => {
        console.log(e.target, 'editing')
    }

    const handleCheck = (e) => {
        console.log(e.target.value, 'checkd')
    }
    return (
        <div className='newItem' id='newBlocker'>
            <Checkbox value={props.title} onClick={handleCheck} inputProps={{'aria-label': 'primary checkbox'}}/>
            <p id='blockerTitle'> {props.value}</p>
            <div id='blockerButtons'>
                <button onClick={handleEdit} className='edit'><i className="fas fa-pencil-alt fa-2x"></i></button>
            </div>
        </div>
    )
}

const Blockers = (props) => {
    console.log('blockers props: ', props)
    return (
        <div className='component' id='blockers'>
                <div className='toolbar'>
                    <Typography variant="subtitle1" color='inherit'><i id='iconQ' className="fas fa-brain"></i> Current Blockers </Typography>
                    <BlockerModal {...props} />
                </div>
                <div id='blockerList'>
                    {props.blockers.map((b, i)=>{
                        return <Blocker key={i} value={b.blocker}/>
                    })}
                </div>     
        </div>
    )
}


// Blockers.propTypes = {
//     title: String
// }

export default withStyles(styles)(Blockers)
