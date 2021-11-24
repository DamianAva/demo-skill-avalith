/* eslint-disable */
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser')
const userRouter = require('./routes/user');
const studentRouter = require('./routes/student');
const teacherRouter = require('./routes/teacher');
const examRouter = require('./routes/exam');
const fileRouter = require('./routes/file');
const emailRouter = require('./routes/email');
const app = express();
const port = 3000;

app.use(express.json());
app.use(cookieParser());

app.use((req, res, next) => {
    let oneof = false;
    if (req.headers.origin) {
        res.header('Access-Control-Allow-Origin', req.headers.origin);
        oneof = true;
    }

    res.header('Access-Control-Allow-Headers', 'X-Requested-With, Authorization, Content-Type, Accept, Origin');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');

    if (oneof) {
        res.header('Access-Control-Max-Age', 60 * 60 * 24 * 365);
    }

    if (req.method == 'OPTIONS') {
        res.status(200).send();
    } else {
        next();
    }
});

app.use('/static', express.static(path.join(__dirname, 'public')))

/* app.use(function(req, res, next) {
    const token = req.headers.authorization;
    console.log(req.headers)
    console.log('token')
    console.log(token)

    if (!token || token !== 'TEST') {
        return res.status(403).send('ERROR');
    }

    return next();
}); */

app.use(function(req, res, next) {
    console.log('-------------------');
    req.requestTime = Date.now();
    return next();
});

app.get('/', function (req, res) {
    res.send('TEST');
});

app.get('/test', function (req, res, next) {
    res.sendMsg = 'TEST2';
    return next();
});

/* app.get('/error', function (req, res, next) {
    setTimeout(function () {
        res.errStatus = 403;
        res.sendMsg = 'No esta autorizado';
        return next();
    }, 1000)
});

app.use(function(req, res, next) {
    const diff = Date.now() - req.requestTime;
    if (!res.errStatus && res.sendMsg) {
        console.log('La peticion pedida el ' + diff + ' fue respondida con exito');
        return res.send(res.sendMsg);
    } else {
        res.status(res.errStatus ? res.errStatus : 500);

        console.log('La peticion pedida el ' + diff + ' fallo con un error');
        return res.send(res.sendMsg || 'ERROR');
    }
}); */

app.get('/error', function (req, res) {
    throw new Error('Error!');
})

app.use('/user', userRouter);
app.use('/student', studentRouter);
app.use('/teacher', teacherRouter);
app.use('/exam', examRouter);
app.use('/file', fileRouter);
app.use('/email', emailRouter);

app.use(function (err, req, res, next) {
    console.error(err.stack);
    return res.status(500).send('Error!')
});

app.use(function(req, res, next) {
    console.log(req.path);
    console.log(404)
    return res.status(404).send('Pagina no encontrada');
});

app.listen(port, function () {
    console.log(`Example app listening at http://localhost:${port}`);
});