const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Get all posts
router.get('/', (req, res) => {
    res.send('Hello world');
});

module.exports = router;