console.log('--- Promise.all 1 ---');

/* const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('The first promise has resolved');
        resolve(10);
    }, 1 * 1000);
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('The second promise has resolved');
        resolve(20);
    }, 2 * 1000);
});

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('The third promise has resolved');
        // resolve(30);
        reject('ERROR');
    }, 3 * 1000);
});

Promise.all([p1, p2, p3])
    .then(results => {
        const total = results.reduce((p, c) => p + c);

        console.log(`Results: ${results}`);
        console.log(`Total: ${total}`);
    }); */

// -------------------
console.log('--- Promise.all 2 ---');

/* const pro1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('The first promise has resolved');
        resolve(10);
    }, 1 * 1000);
});

const pro2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('The second promise has rejected');
        reject('Failed');
    }, 2 * 1000);
});

const pro3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('The third promise has resolved');
        resolve(30);
    }, 3 * 1000);
});

Promise.all([pro1, pro2, pro3])
    .then(() => console.log('THEN'))
    .catch(() => console.log('CATCH')); */

// -------------------
console.log('--- Promise.race ---');

/* const prom1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('The first promise has resolved');
        resolve(10);
    }, 1 * 1000);
});

const prom2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('The second promise has resolved');
        resolve(20);
    }, 2 * 1000);
});

Promise.race([prom1, prom2])
    .then(value => console.log(`Resolved: ${value}`))
    .catch(reason => console.log(`Rejected: ${reason}`)); */

// -------------------
console.log('--- Break ---');

for (var i = 1; i < 10; i++) {
    console.log(i);
    if (i % 3 === 0) {
        break;
    }
}

console.log('Divisible por 3:', i);

// -------------------
console.log('--- Continue 1 ---');

let s = 'This is a JavaScript continue statement demo.';
let counter = 0;

for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) !== 's') {
        continue;
    }

    counter++;
}

console.log('The number of s found in the string is ' + counter);

// -------------------
console.log('--- Continue 2 ---');
let number = 0;
let evenNumbers = [];

while (number < 100) {
    number++;

    if (number % 2 !== 0) {
        continue;
    }

    evenNumbers.push(number);
}

console.log('Numeros pares: ' + evenNumbers);