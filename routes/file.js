const express = require('express');
const fs = require('fs');

const router = express.Router();

router.get('/read', async function (req, res) {
    try {
        const data = await fs.readFile('test_file.txt', 'utf8');
        console.log(data);
        return res.send(data);
    } catch (err) {
        console.log(err);
        return res.status(500).send('Error!');
    }
});

router.post('/write', async function (req, res) {
    const data = req.body.data;

    if (!data) {
        return res.status(400).send('Falta el data');
    }

    try {
        await fs.writeFile('test_file.txt', data, 'utf8');
        return res.send('Todo OK!');
    } catch (err) {
        console.log(err);
        return res.status(500).send('Error!');
    }
});

router.post('/append', async function (req, res) {
    const data = req.body.data;

    if (!data) {
        return res.status(400).send('Falta el data');
    }

    try {
        await fs.appendFile('test_file.txt', data, 'utf8');
        return res.send('Todo OK!');
    } catch (err) {
        console.log(err);
        return res.status(500).send('Error!');
    }
});

router.get('/exists', async function (req, res) {
    const file = req.headers.file;

    if (!file) {
        return res.status(400).send('Falta el file');
    }

    try {
        await fs.access(file);
        return res.send('OK');
    } catch (err) {
        console.log(err);
        return res.status(500).send('Error!');
    }
});

router.get('/stats', async function (req, res) {
    const file = req.headers.file;

    if (!file) {
        return res.status(400).send('Falta el file');
    }

    try {
        const stats = await fs.stat(file);
        console.log(stats.size);
        return res.send(stats);
    } catch (err) {
        console.log(err);
        return res.status(500).send('Error!');
    }
});

module.exports = router;