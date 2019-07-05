const mongoose = require('mongoose')
const { Notes, Tasks} = require('./schemas')

const NotesModel = mongoose.model('Note', notes)
const TasksModel = mongoose.model('Task', tasks)

module.exports = {
    NotesModel,
    TasksModel
}