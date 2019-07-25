const express = require('express');
const router = express.Router();
const { list, show, create, update, remove } = require('../controllers/logsController');

router.get("/api/projects/:id/logs", list);
router.get("/api/projects/:id/logs/:id", show)
router.post("/api/projects/:id/logs", create);
router.put("/api/projects/:id/logs/:id", update);
router.delete("/api/projects/:id/logs/:id", remove);

module.exports = router;