import React from 'react'
import { Switch, Route } from 'react-router-dom'
// import components here
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import Log from './components/Log'

const Router = () => {
    return (
        <Switch>
            <Route exact path='/' component={Login}></Route>
            <Route path='/dashboard' component={Dashboard}></Route>
            <Route path='/log' component={Log}></Route>
            {/* <Route path='/settings' component={Settings}></Route> */}
        </Switch>
    );
}

export default Router