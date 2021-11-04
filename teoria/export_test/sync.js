const fs = require('fs');

exports.readSync = function () {
    const dataSync = fs.readFileSync('test_file.txt', 'utf8');
    console.log(dataSync);
};