const express = require('express');
const router = express.Router();

const Post = require('../models/post');


// Get all posts
router.get('/', async (req, res) => {
    const response = await Post.find();
    res.send(response);
});

// Get single post
router.get('/:slug', async(req, res) => {
    const response = await Post.find({slug: req.params.slug});
    res.status(200).json(response)
});

// Get by tags
router.get('/search', (req, res) => {
    console.log(req.query);
    res.json({msg: 'hello data'})
})

module.exports = router;