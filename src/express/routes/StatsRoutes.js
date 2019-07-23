const express = require('express');
const router = express.Router();
const { list, update, reset } = require('../controllers/logsControllers');

router.get("/api/stats", list);
router.put("/api/stats/:id", update);
router.put("/api/stats/:id", reset)


module.exports = router;