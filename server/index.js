const express = require('express');
require('dotenv').config();
const app = express();
const cors = require('cors');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const multer = require('multer');

// Database
require('./db/db');

//Routes
const postsRouter = require('./routes/posts');
const searchRouter = require('./routes/search');
const contactRouter = require('./routes/contact');

// Settings
app.set('PORT', process.env.PORT || 5000);


// Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true, parameterLimit: 50000}));
app.use(multer({dest: path.join(__dirname, '../client/src/images/temp')}).single('file'));

// React static files
app.use(express.static(path.join(__dirname, '../client/build')));

// Sessions

// Passport

// Api
app.use('/api/blog', postsRouter);
app.use('/api/posts', searchRouter);
app.use('/api/contact', contactRouter);

// Handles any requests that don't match the ones above
app.get('*', (req, res) =>{
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

// Start server
app.listen(app.get('PORT'), () => {
    console.log(`Server on PORT: ${app.get('PORT')}`);
});