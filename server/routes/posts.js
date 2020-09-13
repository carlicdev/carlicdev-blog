const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');
const mongoose = require('mongoose');

const { randomNumber } = require('../helpers/libs');

const Post = require('../models/post');

const AWS = require('aws-sdk');
const { v1: uuid } = require('uuid');
const multer = require('multer');
const multerS3 = require('multer-s3');

const accessKey = process.env.ACCESS_KEY_ID;
const secretKey = process.env.SECRET_ACCESS_KEY;

const s3 = new AWS.S3({
    accessKeyId: accessKey,
    secretAccessKey: secretKey,
    region: 'us-east-2'
});

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


// Create single key
let imageKey = `${uuid()}.jpeg`

//Save image to s3
let upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: 'bucket-for-carlicdev',
        acl: 'public-read',
        contentType: multerS3.AUTO_CONTENT_TYPE,
        key: function(req, file, cb) {
            cb(null, imageKey)
        }
    })
});

// New Post
router.post('/new-post', upload.single('file'), async (req, res) => {
    const { title, content, tags } = req.body;
    const newPost = new Post({
        _id: new mongoose.Types.ObjectId,
        title, 
        content,
        description: content.slice(0, 50),
        imageUrl: imageKey,
        tags: tags.split(',')
    });
    
    try {
        await newPost.save();
        res.status(201).json({msg: 'new blog-post created'})
    } catch (err) {
        console.log(err);
        res.sendStatus(err.status)
    }

});

module.exports = router;