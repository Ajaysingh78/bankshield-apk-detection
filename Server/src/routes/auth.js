// Sure, here's the contents for the file `/suspicious-app-scanner/suspicious-app-scanner/server/routes/auth.js`:

const express = require('express');
const { register, login } = require('../controllers/authController');
const { authenticate } = require('../middleware/auth');

const router = express.Router();

// User registration route
router.post('/register', register);

// User login route
router.post('/login', login);

// Example of a protected route
router.get('/profile', authenticate, (req, res) => {
    res.json({ user: req.user });
});

module.exports = router;