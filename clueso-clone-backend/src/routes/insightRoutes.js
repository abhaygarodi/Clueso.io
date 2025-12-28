const express = require('express');
const router = express.Router();
const { generateInsights } = require('../controllers/insightController');

router.post('/', generateInsights);

module.exports = router;
