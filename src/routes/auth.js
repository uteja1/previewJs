// src/routes/authRoutes.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.get('/', authController.getLoginPage);
router.post('/login', authController.postLogin);

module.exports = router;
