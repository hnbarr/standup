const express = require('express')
const mongoose = require('mongoose')
const app = express()
const router = require('./routes/TasksRoutes')
const bodyParser = require('body-parser')
const path = require('path')

// routes
const taskRoutes = require('./routes/TasksRoutes')
const projectRoutes = require('./routes/ProjectsRoutes')
const logRoutes = require('./routes/LogRoutes')
const blockerRoutes = require('./routes/BlockersRoutes')


require("dotenv").config()

// app.use(bodyParser.json())

mongoose.set('debug', true);
mongoose.Promise = global.Promise;

// const port = process.env.NODE_ENV === 'production' ? 'https://flamboyant-noyce-0c009c.netlify.com/' : 3001 

mongoose.connect('mongodb+srv://admin:admin@cluster0-kohaq.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true })
app.use(bodyParser.json())
app.use('/', router)
app.use(taskRoutes)
app.use(projectRoutes)
app.use(logRoutes)
app.use(blockerRoutes)


app.use(express.static(path.join(__dirname, "../../build")))

app.listen(3001, (err)=>{
    if(err) console.log(err)
    else console.log(`working on port 3001`)
})