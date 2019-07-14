const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Projects = new Schema ({
    title: String,
    description: String,
    deadline: Date
})

const Logs = new Schema ({
    title: String,
    description: String,
    tag: String,
    date: Date
})

const Tasks = new Schema ({
    task: String,
    date: Date
})

const Blockers = new Schema ({
    task: String,
    date: Date
})
module.exports = {
    Projects,
    Logs,
    Tasks,
    Blockers
}