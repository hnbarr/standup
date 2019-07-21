const express = require('express');
const router = express.Router();
const { list, create, update, remove } = require('../controllers/blockersController');

router.get("/api/blockers", list);
router.post("/api/blockers", create);
router.put("/api/blockers/:id", update);
router.delete("/api/blockers/:id", remove);

module.exports = router;