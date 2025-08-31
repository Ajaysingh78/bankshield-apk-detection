const express = require('express');
const router = express.Router();
const { getAllSubmissions, reportFraud } = require('../controllers/fraudController');
const { isAdmin } = require('../middleware/admin');

// Route to get all user submissions
router.get('/submissions', isAdmin, getAllSubmissions);

// Route to report fraud
router.post('/report-fraud', isAdmin, reportFraud);

module.exports = router;