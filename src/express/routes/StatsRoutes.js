const express = require('express');
const router = express.Router();
const { list, update } = require('../controllers/logsControllers');

router.get("/api/tasks", list);
router.put("/api/tasks/:id", update);


module.exports = router;