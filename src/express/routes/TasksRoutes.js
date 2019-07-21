const express = require('express');
const router = express.Router();
const { list, create, update, remove } = require('../controllers/tasksControllers');

router.get("/api/tasks", list);
router.post("/api/tasks", create);
router.put("/api/tasks/:id", update);
router.delete("/api/tasks/:id", remove);

module.exports = router;