import React from 'react'
import Task from './Task'
import Note from './Note'

const Home = () => {
    return(
        <React.Fragment>
            <p>i'm the home page</p>
            <Task />
            <Note />
        </React.Fragment>
    )
}

export default Home