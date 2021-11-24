const express = require('express');
const nodemailer = require('nodemailer');
const config = require('../config');

const router = express.Router();

router.get('/', async function (req, res) {
    let mailOptions = {
        from: "echevarriadamian@gmail.com",
        to: "damian@avalith.net",
        subject: "Testing",
        html: "<b>Hello!</b>"
    };

    let transporter = nodemailer.createTransport(config.email);

    transporter.sendMail(mailOptions, (err, info, resp) => {
        if (err) {
            return res.status(500).send(err);
        }

        return res.send(resp);
    });
});

module.exports = router;