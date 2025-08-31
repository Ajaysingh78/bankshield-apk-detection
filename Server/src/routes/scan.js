const express = require('express');
const router = express.Router();
const scanController = require('../controllers/scanController');
const authMiddleware = require('../middleware/auth');

// Route to scan a link
router.post('/scan/link', authMiddleware, scanController.scanLink);

// Route to upload a file for scanning
router.post('/scan/file', authMiddleware, scanController.scanFile);

// Route to get scan history for the authenticated user
router.get('/scan/history', authMiddleware, scanController.getScanHistory);

module.exports = router;