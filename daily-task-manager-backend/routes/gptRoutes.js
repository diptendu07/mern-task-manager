const express = require('express');
const router = express.Router();
const { getDailySummary } = require('../controllers/gptController');

// Route to get GPT summary of today's tasks
router.get('/summary', getDailySummary);

module.exports = router;
