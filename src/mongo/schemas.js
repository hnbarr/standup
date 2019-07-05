const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Notes = new Schema ({
    title: String,
    description: String,
    topic: String,
    date: Date
})

const Tasks = new Schema ({
    task: String,
    date: Date
})

module.exports = {
    Notes,
    Tasks
}