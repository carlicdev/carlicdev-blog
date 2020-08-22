const express = require('express');
const router = express.Router();

const Post = require('../models/post');

router.get('/search', async (req, res) => {
    let postsByTag = await Post.find({tags: req.query.tag})
    res.status(200).json(postsByTag);
})

module.exports = router;