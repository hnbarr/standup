const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Projects = new Schema ({
    title: String,
    description: String,
    deadline: String,
})

const Logs = new Schema ({
    projectId: String,
    title: String,
    tag: String,
    description: String,
})

const Tasks = new Schema ({
    task: String,
    date: Date
})

const Blockers = new Schema ({
    blocker: String,
    date: Date
})

const Stats = new Schema ({
    count: Number
})

module.exports = {
    Projects,
    Logs,
    Tasks,
    Blockers,
    Stats
}