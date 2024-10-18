const express = require('express');
const router = express.Router();
const { login, register, getUser } = require('../controllers/authController');
const { protect, admin } = require('../middleware/authMiddleware');

router.post('/register', register);
router.post('/login', login);
router.get('/user', protect, getUser);
router.get('/admin', protect, admin, (req, res) => res.send('Admin Access'));

module.exports = router;
