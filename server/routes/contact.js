const { Router } = require('express');
const router = Router();
const nodemailer = require('nodemailer');

const nodemailerUser = process.env.NODEMAILER_USER;
const nodemailerPass = process.env.NODEMAILER_PASS;

router.post('/', (req, res) => {
    
    // sendMail Function
    const sendMail = async () => {

        // message 
        const htmlEmail = `
        <h1>Email sent from carlic-dev.com</h1>
        <h3>Email details</h3>
        <ul>
            <li>${req.body.name}</li>
            <li>${req.body.email}</li>
            <li>${req.body.message}</li>
        </ul>
        `
        // transporter
        const transporter = nodemailer.createTransport({
            service: 'hotmail',
            auth: {
                user: nodemailerUser,
                pass: nodemailerPass
            },
            tls: {
                rejectUnauthorized: false
            }
        });

        // mail Options
        const mailOptions = {
            from: `"carlic-dev" <${nodemailerUser}>`,
            to: 'carlic.dev@gmail.com',
            subject: 'Contact Message from carlicDev',
            text: req.body.message,
            html: htmlEmail
        };

        // send mail
        const info = await transporter.sendMail(mailOptions);

        console.log('Email sent: ', info.messageId)

    };


    if (req.body.name && req.body.email && req.body.message) {
        sendMail()
            .then(() => res.status(201).json({ msg: 'Carlic has received your message'}))
            .catch(err => console.log({ errFromNodemailer: err}))
    } else {
        let errors = {name: '', email: '', message: ''};
        if (!req.body.name) {
            errors.name = 'Please include your name'
        }
        if (!req.body.email) {
            errors.email = 'Please include a valid email'
        }
        if (!req.body.message) {
            errors.message = 'Please include a message'
        }
        res.json({msg: errors})
    }

});

module.exports = router;