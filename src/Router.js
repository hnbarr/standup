import React from 'react'
import { Switch, Route } from 'react-router-dom'
// import components here
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import Logs from './components/Log'

const Router = () => {
    return (
        <Switch>
            <Route exact path='/' component={Login}></Route>
            <Route path='/dashboard' component={Dashboard}></Route>
            <Route path='/log' component={Logs}></Route> 
            {/* need to update the log path to include project ids */}
        </Switch>
    );
}

export default Router