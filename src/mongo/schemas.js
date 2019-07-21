const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Projects = new Schema ({
    title: String,
    description: String,
    deadline: Date,
})

const Logs = new Schema ({
    projectId: String,
    title: String,
    tag: String,
    description: String,
    date: Date
})

const Tasks = new Schema ({
    task: String,
    date: Date
})

const Blockers = new Schema ({
    blocker: String,
    date: Date
})

module.exports = {
    Projects,
    Logs,
    Tasks,
    Blockers
}