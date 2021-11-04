const { message, myDateTime } = require('./export_test/test.js');
const { tellName } = require('./export_test/test_all.js');

const readFileStandard = require('./export_test/standard');
const readFileAsync = require('./export_test/async_await');
const readFileSync = require('./export_test/sync');

console.log(message);
console.log(myDateTime());

tellName();

readFileStandard.readStandard();
readFileAsync.readAsync();
readFileSync.readSync();

console.log('ANTES');