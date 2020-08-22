const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');
const mongoose = require('mongoose');

const { randomNumber } = require('../helpers/libs');

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

// New post
router.post('/new-post', (req, res) => {
    const savePost = async () => {
        const imgUrl = randomNumber();
        const image = await Post.find({imageUrl: imgUrl});
        if(image.length > 0) {
            savePost();
        }  else {
            const { title, content, tags } = req.body;
            const imageTempPath = req.file.path;
            const ext = path.extname(req.file.originalname).toLowerCase();
            const targetPath = path.resolve(`./client/src/images/temp/${imgUrl}${ext}`);

            if (ext === '.png' || ext === '.jpg' || ext === '.jpeg' || ext === '.gif') {
                await fs.rename(imageTempPath, targetPath, (err) => {
                    if (err) {
                        console.log('There was an error in rename')
                    } else {
                        console.log('rename was OK')
                    }
                });

                const newPost = new Post({
                    _id: new mongoose.Types.ObjectId,
                    title, 
                    content,
                    description: content.slice(0, 50),
                    imageUrl: imgUrl + ext,
                    tags: tags.split(',')
                });

                newPost.save()
                    .then(() => {
                        console.log('blogpost created')
                        res.status(201).json({
                            msg: 'new blog-post created'
                        });
                    }).catch(err => {
                        console.log('couldnt create new blog post')
                        res.status(500).json({
                            msg: 'couldn´t create new blog-post'
                        });
                    });

            } else {
                await fs.unlink(imageTempPath, (err) => {
                    if (err) {
                        console.log('enter image. couldn´t unlin')
                        res.status(500).json({
                            msg: 'please enter an image. We couldn´t unlink the document'
                        });
                    } else {
                        console.log('enter image. unlinked')
                        res.status(500).json({
                            msg: 'please enter an image'
                        });
                    }
                })
            }
        }
    }
    savePost();
})

module.exports = router;