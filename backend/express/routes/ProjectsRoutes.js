const express = require('express');
const router = express.Router();
const { list, show, create, update, remove } = require('../controllers/projectsController');

router.get("/api/projects", list);
router.get("/api/projects/:id", show); //this will pull up logs for that project
router.post("/api/projects", create);
router.put("/api/projects/:id", update);
router.delete("/api/projects/:id", remove);

module.exports = router;