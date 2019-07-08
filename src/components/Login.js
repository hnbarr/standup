import React, { Component } from 'react'
import './styles/login.css'
import { TextField, Button, Input, Typography} from '@material-ui/core'

export default class Login extends Component {
    render() {
        return (
            <div className='loginPage'>
                {/* <Paper className='loginPane' id='loginLeft'> */}
                    <div id='detail'>
                        <div id='leftBox'>
                            <div id='boxText'>
                                <h1 id='brand'>standup</h1>
                                <h3 variant='h6'> <i className="fas fa-tasks"></i> Manage your daily tasks. </h3>
                                <h3 variant='h6'> <i className="fas fa-folder-open"></i> Log development progress. </h3>
                                <h3 variant='h6'> <i className="fas fa-paperclip"></i> Take notes on projects. </h3>
                            </div>
                        </div>
                    </div>
                {/* </Paper> */}
                <div className='loginPane' id='loginRight'>
                    <div id='loginSignup'>
                        <Typography variant='h5'color='primary'> Welcome back! Sign in!</Typography>
                        <form id='loginForm'>
                            <TextField id="outlined-email-input" label="Email" type="email" name="email" autoComplete="email" variant="outlined"/>
                            <TextField id="outlined-password-input" label="Password" type="password" autoComplete="current-password" variant="outlined"/>
                            <div id='buttonSection'>
                                <Button variant='outlined' color='primary'>Login</Button>
                            </div>
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
                </div>
            </div>
        )
    }
}
