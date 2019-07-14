const mongoose = require('mongoose')
const { Tasks, Blockers, Logs, Projects } = require('./schemas')

const TasksModel = mongoose.model('Task', Tasks)
const BlockersModel = mongoose.model('Blocker', Blockers)
const LogsModel = mongoose.model('Log', Logs)
const ProjectsModel = mongoose.model('Project', Projects)


module.exports = {
    TasksModel,
    BlockersModel,
    LogsModel,
    ProjectsModel
}