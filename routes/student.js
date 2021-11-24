const express = require('express');
const mysql = require('mysql2/promise');
const dbSettings = require('../config.json');
const queries = require('../queries');

const router = express.Router();

/* connection.query(queries.getAllStudents, [], (err, rows) => {
    if (err) {
        console.log(err);
        return res.status(500).send(err);
    }

    console.log(rows);

    return res.send(rows);
}) */

router.get('/list', async function (req, res) {
    try {
        const connection = await mysql.createConnection(dbSettings);
        const [rows] = await connection.query(queries.getAllStudents, []);

        console.log(rows);

        return res.send(rows);
    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
});

router.get('/:id(\\d+)', async (req, res) => {
    try {
        const connection = await mysql.createConnection(dbSettings);
        const [rows] = await connection.query(queries.getStudent, [req.params.id]);

        console.log(rows[0]);

        return res.send(rows[0]);
    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
});

router.put('/:id(\\d+)', async (req, res) => {
    try {
        const id = req.params.id;
        const student = req.body;

        const connection = await mysql.createConnection(dbSettings);
        const [results] = await connection.query(queries.updateStudent, [student, id]);

        if (results.affectedRows) {
            return res.send('Actualizado con exito!');
        } else {
            return res.status(500).send('Fallo!');
        }
    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
});

router.post('/', async (req, res) => {
    try {
        const student = req.body;

        console.log(student);

        const connection = await mysql.createConnection(dbSettings);
        const [results] = await connection.query(queries.addStudent, [student]);

        console.log(results.insertId);

        return res.send('Creado con exito!');
    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
});

router.delete('/:id(\\d+)', async (req, res) => {
    try {
        const id = req.params.id;

        const connection = await mysql.createConnection(dbSettings);
        const [results] = await connection.query(queries.deleteStudent, [id]);

        console.log(results.affectedRows);

        if (!results.affectedRows) {
            return res.status(400).send('No se borro nada!');
        }

        return res.send('Borrado con exito!');
    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
});

router.delete('/flag/:id(\\d+)', async (req, res) => {
    try {
        const id = req.params.id;

        const connection = await mysql.createConnection(dbSettings);
        const [results] = await connection.query(queries.deleteFlagStudent, [id]);

        console.log(results.affectedRows);

        return res.send('Borrado con exito!');
    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
});

module.exports = router;