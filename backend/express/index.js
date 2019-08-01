const express = require('express')
const mongoose = require('mongoose')
const app = express()
const router = require('./routes/TasksRoutes')
const bodyParser = require('body-parser')

// routes
const taskRoutes = require('./routes/TasksRoutes')
const projectRoutes = require('./routes/ProjectsRoutes')
const logRoutes = require('./routes/LogRoutes')
const blockerRoutes = require('./routes/BlockersRoutes')


require("dotenv").config()

app.use(bodyParser.json())

mongoose.set('debug', true);
mongoose.Promise = global.Promise;


mongoose.connect('mongodb+srv://admin:admin@cluster0-kohaq.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true })

app.use('/', router)
app.use(taskRoutes)
app.use(projectRoutes)
app.use(logRoutes)
app.use(blockerRoutes)


app.get('/', (req,res)=>{
    res.send('server says wassup')
})

app.listen(3000)