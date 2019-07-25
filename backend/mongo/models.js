const mongoose = require('mongoose')
const { Tasks, Blockers, Logs, Projects, Stats } = require('./schemas')

const TasksModel = mongoose.model('Task', Tasks)
const StatsModel = mongoose.model('Stat', Stats)
const BlockersModel = mongoose.model('Blocker', Blockers)
const LogsModel = mongoose.model('Log', Logs)
const ProjectsModel = mongoose.model('Project', Projects)


module.exports = {
    TasksModel,
    BlockersModel,
    LogsModel,
    ProjectsModel,
    StatsModel
}