const mongoose = require('mongoose')
const { Notes, Tasks} = require('./schemas')

const NotesModel = mongoose.model('Note', Notes)
const TasksModel = mongoose.model('Task', Tasks)

module.exports = {
    NotesModel,
    TasksModel
}