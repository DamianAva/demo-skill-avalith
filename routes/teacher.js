const express = require('express');
const mysql = require('mysql2/promise');
const dbSettings = require('../config.json');
const queries = require('../queries');

const router = express.Router();

router.get('/:id(\\d+)', async (req, res) => {
    try {
        const teacherId = req.params.id;

        const connection = await mysql.createConnection(dbSettings);
        const [rows] = await connection.query(queries.getStudentsByTeacher, [teacherId]);

        console.log(rows);

        return res.send(rows);
    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
});

router.get('/student/:id(\\d+)', async (req, res) => {
    try {
        const studentId = req.params.id;

        const connection = await mysql.createConnection(dbSettings);
        const [rows] = await connection.query(queries.getTeachersByStudent, [studentId]);

        console.log(rows);

        return res.send(rows);
    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
});

module.exports = router;