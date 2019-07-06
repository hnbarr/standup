import React, { Component } from 'react'
import './styles/dash.css'
import Tasks from './Tasks'
import Blockers from './Blockers'
import Stats from './Stats'
import Progress from './Progress'
import Nav from './Nav'

export default class Dashboard extends Component {
    componentDidMount(){
        console.log('home component loaded')
    }

    render(){
        return(
            <div className='dashboard'>
                <Nav/>
                <Progress />
                <Stats />
                <Tasks />
                <Blockers />
            </div>
        )
    }
}
