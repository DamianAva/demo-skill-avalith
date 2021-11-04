const fs = require('fs/promises');

exports.readAsync = async function () {
    /* fs.readFile('test_file.txt', 'utf8')
        .then(data => console.log(data))
        .catch(err => console.log(err)); */

    try {
        const data = await fs.readFile('test_file.txt', 'utf8');
        console.log(data);
    } catch (err) {
        console.log(err);
    }
};
