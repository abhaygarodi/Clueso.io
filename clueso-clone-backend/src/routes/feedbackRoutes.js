const express = require('express');
const router = express.Router();
const { createFeedback, getFeedback } = require('../controllers/feedbackController');
const auth = require('../middleware/auth');

router.post('/', auth, createFeedback);
router.get('/', auth, getFeedback);

module.exports = router;
