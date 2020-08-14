const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Post = require('../models/post');

// Get all posts
router.get('/', async (req, res) => {
    const response = await Post.find();
    res.send(response);
});

module.exports = router;