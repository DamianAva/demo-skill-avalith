/* eslint-disable */
const express = require('express');

const router = express.Router();

router.post('/login', function (req, res) {
    console.log('req.query')
    console.log(req.query);
    console.log('req.body');
    console.log(req.body);
    return res.send('OK');
});

router.get('/params/test', function (req, res, next) {
    console.log('TEST');
    return res.send('OK');
});

router.get('/params/:id', function (req, res) {
    console.log('req.params');
    console.log(req.params);
    return res.send('OK');
});

module.exports = router;