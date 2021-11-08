const express = require('express');
const mysql = require('mysql2/promise');
const dbSettings = require('../config.json');
const queries = require('../queries');

const router = express.Router();

router.get('/:id(\\d+)', async function (req, res) {
    try {
        const studentId = req.params.id;
        const includeStudent = req.query.complete;

        let query;

        if (!includeStudent) {
            query = queries.getExamsByStudent;
        } else {
            query = queries.getExamsByStudentComplete;
        }

        const connection = await mysql.createConnection(dbSettings);
        const [rows] = await connection.query(query, [studentId]);

        console.log(rows);

        return res.send(rows);
    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
});

module.exports = router;