const express = require('express');
const router = express.Router();
const { list, create, update, remove } = require('../controllers/tasksControllers');

router.get("/api/tasks", list);
router.post("/api/tasks", create);
router.put("/api/tasks/:id", update);
router.delete("/api/tasks/:id", remove);

module.exports = router;




// const { TasksModel } = require('../../mongo/models')

// router.post('/tasks', (req, res) => {
//     TasksModel.create({
//         task: 'example',
//         date: 08-09-1994
//     })
//     .then(results=> res.json(results))
//     .catch(err => res.sendStatus(500))
// })

// router.get('/', (req, res) =>{
//     TasksModel.find({})
//     .then(results=> res.json(results))
//     .catch(err => res.sendStatus(500))
// })


// module.exports = router