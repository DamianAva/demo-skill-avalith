/* eslint-disable */
const express = require('express');
const path = require('path');
const userRouter = require('./routes/user');
const studentRouter = require('./routes/student');
const app = express();
const port = 3000;

app.use(express.json());
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

app.use('/user', userRouter);
app.use('/student', studentRouter);

app.listen(port, function () {
    console.log(`Example app listening at http://localhost:${port}`);
});