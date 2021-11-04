const { readFile } = require('fs');

exports.readStandard = function () {
    readFile('test_file.txt', 'utf8', function(err, data) {
        if (err) {
            return console.log(err);
        }
    
        console.log(data);
    });
};
