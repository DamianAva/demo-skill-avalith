console.log('--- Template Literals 1 ---');
const people = 500;

console.log('Hay unas ' + people + ' personas esperando en la fila.');
console.log(`Hay unas ${people} personas esperando en la fila.`);
console.log('Hay unas 500 personas esperando en la fila.');

// -------------------
console.log('--- Template Literals 2 ---');
let valA = 5;
let valB = 10;

console.log('Fifteen is ' + (valA + valB) + ' and\nnot ' + (2 * valA + valB) + '.');
console.log(`Fifteen is ${valA + valB} and
not ${2 * valA + valB}.`);

// ------------------
console.log('--- Destructoring (Array 1) ---');
let a;
let b;
let rest;
let arrayTest = [10, 20];
let arrayTest2 = [10, 20, 30, 40, 50];

[a, b] = arrayTest;
// a = arrayTest[0]
// b = arrayTest[1]

console.log(a);
console.log(b);

[a, b, ...rest] = arrayTest2;

console.log(a);
console.log(b);
console.log(rest);
// ------------------
console.log('--- Destructoring (Array 2) ---');
const foo = ['one', 'two', 'three'];

const [red, yellow, green, blue] = foo;
console.log(red);
console.log(yellow);
console.log(green);
console.log(blue)

// ------------------
console.log('--- Destructoring (Array 3) ---');
let defA, defB;

[defA = 5, defB = 7] = [1];
console.log(defA);
console.log(defB);

// -----------------
console.log('--- Destructoring (Object 1) ---');
const user = {
    id: 20,
    username: 'damian'
};

const {id, username} = user;

console.log(id);
console.log(username);

// -----------------
console.log('--- Destructoring (Object 2) ---');
let objA, objB;

({objA, objB} = {objA: 1, objB: 2});

console.log(objA)
console.log(objB)
// --------------
console.log('--- Destructoring (Object 3) ---');
const oldUser = {id: 20, username: 'damian'};
const {id: identificador, username: nombre} = oldUser;

console.log(identificador);
console.log(nombre);

// -----------------
console.log('--- Destructoring (Object 4) ---');
let {id_book, tittle: titulo, ...more} = {id_book: 20, genre: 'Mistery', tittle: 'Who knows?', author: 'John'};

console.log(id_book);
console.log(titulo);
console.log(more);


const userDB = {
    id: 123,
    username: 'juan',
    age: 29,
    password: 'admin123',
}

const {password, ...userParsed} = userDB;

console.log(userParsed)