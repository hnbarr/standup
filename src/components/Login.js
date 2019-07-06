import React, { Component } from 'react'
import './styles/login.css'
import { TextField, Button , Paper, Input, Typography} from '@material-ui/core'

export default class Login extends Component {
    render() {
        return (
            <div className='loginPage'>
                <Paper className='loginPane' id='loginLeft'>
                    <div id='leftBox'>
                        <Typography variant='h3' id='brand'>standup</Typography>
                        <Typography variant='h6'> <i className="fas fa-tasks"></i> Manage your daily tasks. </Typography>
                        <Typography variant='h6'> <i className="fas fa-folder-open"></i> Log development progress. </Typography>
                        <Typography variant='h6'> <i className="fas fa-paperclip"></i> Take notes on projects. </Typography>
                    </div>
                </Paper>
                <Paper className='loginPane' id='loginRight'>
                    <div id='login'>
                        <Typography variant='h5'color='primary'> Welcome back! Sign in!</Typography>
                        <form>
                            <TextField id="outlined-email-input" label="Email" type="email" name="email" autoComplete="email" variant="outlined"/>
                            <TextField id="outlined-password-input" label="Password" type="password" autoComplete="current-password" variant="outlined"/>
                            <Button variant='outlined' color='primary'>Login</Button>
                        </form>
                    </div>
                    
                        <form id='signup'>
                            <Typography variant='h5'color='primary'>No account? Sign up now! </Typography>
                            <Input placeholder='email' type="email"></Input>
                            <Input placeholder='first name' type="name"></Input>
                            <Input placeholder='last name' type="name"></Input>
                            <Input placeholder='password'type="password"></Input>
                            <Button variant='outlined' color='primary'>Sign Up!</Button>
                        </form>
                </Paper>
            </div>
        )
    }
}
