/* eslint-disable */
const crypto = require('crypto');
const express = require('express');
const mysql = require('mysql2/promise');
const jwt = require('jsonwebtoken');
const dbSettings = require('../config.json');
const queries = require('../queries');

const router = express.Router();
const secret = 'mytoken';

router.post('/login', async function (req, res) {
    const email = req.body.email;
    const password = req.body.password;

    let user = null;

    try {
        const connection = await mysql.createConnection(dbSettings);
        const hashedPassword = crypto.createHash('sha256').update(password).digest('hex');
    
        console.log(hashedPassword)

        const [rows] = await connection.query(queries.getUserByEmailPassword, [email, hashedPassword]);
    
        user = rows[0]
    } catch (error) {
        console.log(error)
        return res.status(500).send('Internal Server Error.');
    }

    // return res.send(user)

    if (!user) {
        return res.status(400).send('User not found.');
    }

    const payload = {
        userId: user.id,
        email: email,
        test: 'FUNCIONA'
    };

    const options = {
        algorithm: 'HS256',
        expiresIn: 15,
    };

    jwt.sign(payload, secret, options, (encodeError, encoded) => {
        if (encodeError) {
            return res.status(500).send('Internal Server Error.');
        }

        return res.send(encoded);
    });
});

router.get('/verify', function (req, res, next) {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).send('No envio token');
    }

    jwt.verify(token, secret, (error, decoded) => {
        if (error) {
            return res.status(401).send('Token invalido');
        }

        console.log(decoded);

        return res.send('OK');
    });
});

router.get('/params/:id', function (req, res) {
    console.log('req.params');
    console.log(req.params);
    return res.send('OK');
});

module.exports = router;