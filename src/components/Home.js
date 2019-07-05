import React, { Component } from 'react'
import './styles/main.css'
import Task from './Task'
import Note from './Note'

class Home extends Component {
    componentDidMount(){
        console.log('home component loaded')
    }
    render(){
        return(
            <div className='homePage'>
            <h4>i'm the home page</h4>
                <div className='layout'>
                    <Task />
                    <Note />
                </div>
            </div>
        )
    }
}

export default Home