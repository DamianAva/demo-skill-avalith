console.log('--- Scope ---');
let x = 10;

if (x == 10) {
    let x = 20;
    console.log(x);
}

console.log(x);

// -------------------
console.log('--- Scope 2 ---');
var a = 10;
let b = 20;

console.log(globalThis.a); // window.a
console.log(globalThis.b); // window.b

// -------------------
console.log('--- Scope 3 ---');

/* for (var i = 0; i < 5; i++) {
    console.log('a:', i)
    setTimeout(function () {
        console.log('A:', i);
    }, 1000);
}

for (let i = 0; i < 5; i++) {
    console.log('b:', i)
    setTimeout(function () {
        console.log('B:', i);
    }, 1000);
} */

// -------------------
console.log('--- Const ---');

let varA = 10;
varA = 20;
varA = varA + 5;
console.log(varA);

const constA = 0.1;
// constA = 0.2;
// const constA;

// -------------------
console.log('--- Const 2 ---');

const user = { age: 20 };
user.age = 30;
console.log(user.age);

// user = { age: 30 };

const chillUser = Object.freeze({ age: 20 });
chillUser.age = 30;
console.log(chillUser)

// -------------------
console.log('--- Default parameters ---');

function say(message = 'Hi') {
    console.log(message);
}

say();
say('Hello');

// -------------------
console.log('--- for...of ---');

let scores = [80, 90, 70];

for (let score of scores) {
    score = score + 5;
    console.log(score);
}


for (let i = 0; i < scores.length; i++) {
    let score = scores[i];
    score = score + 5;
    console.log(score);
}

// -------------------
console.log('--- for...of 2 ---');

let colors = ['Red', 'Green', 'Blue'];

for (const [index, color] of colors.entries()) {
    console.log(`${color} is at index ${index}`);
}

// -------------------
console.log('--- for...of 3 ---');

let str = 'abc';
for (let c of str) {
    console.log(c);
}