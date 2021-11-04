console.log('--- .concat() ----')
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3);

//------------------
console.log('--- .find() ----')
const array4 = [5, 12, 8, 130, 44];

const found = array4.find(function (value) {
    return value > 10
});

console.log(found);

const found2 = array4.find(function (value) {
    return value > 1000
});

console.log(found2);

//--------------------
console.log('--- .flat() ----')
const array5 = [
    [
        0,
        1
    ],
    2,
    [
        [
            [
                3,
                4
            ]
        ]
    ]
];

console.log(array5.flat(1));
console.log(array5.flat(2));
console.log(array5.flat(3));

//--------------------
console.log('--- .forEach() ----')
const array6 = ['a', 'b', 'c'];

array6.forEach(function (value) {
    return console.log(value)
});

//--------------------
console.log('--- .includes() ----')
const pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));

console.log(pets.includes('lemon'));

//--------------------
console.log('--- .indexOf() ----')
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison'));

// start from index 2
console.log(beasts.indexOf('bison', 2));

const indexs = [];
let indexRes = undefined;

for (let i = 0; i < beasts.length; i++) {
    const element = beasts[i];
    if (element === 'bison') {
        indexs.push(i);
    }
}

console.log('-------------------------')
console.log(indexs)
console.log(indexRes)

//-------------------
console.log('--- .join() ----')
const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());

console.log(elements.join(''));

console.log(elements.join('-'));

//-------------------
console.log('--- .length() ----')
const clothing = ['shoes', 'shirts', 'socks', 'sweaters'];

console.log(clothing.length);

//-------------------
console.log('--- .push() ----')
const animals = ['pigs', 'goats', 'sheep'];

const count = animals.push('cows');
console.log(count);
console.log(animals);

//-------------------
console.log('--- .shift() ----')
const array7 = [1, 2, 3];

const firstElement = array7.shift();

console.log(array7);
console.log(firstElement);

//----------------------
console.log('--- .slice() ----')
const animals2 = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(animals2.slice(2));
console.log(animals2.slice(2, 4));
console.log(animals2.slice(-2));

//---------------------
console.log('--- .some() ----')
const array8 = [1, 2, 3, 4, 5];

const isTwo = function (element) { return element === 2 };

console.log(array8.some(isTwo));

//---------------------
console.log('--- .sort() ----')
/* The default sort order is ascending, built upon converting the elements into strings,
then comparing their sequences of UTF-16 code units values. */
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);

const array9 = [1, 30, 4, 21, 100000];
array9.sort();
console.log(array9);

/* function compare(a, b) {
    if (a is less than b by some ordering criterion) {
      return -1;
    }
    if (a is greater than b by the ordering criterion) {
      return 1;
    }
    // a must be equal to b
    return 0;
  } */

const pepe = [{ age: 12 }, { age: 21 }, { age: 8 }]
pepe.sort(function(a, b) {
    return a.age - b.age;
});

const numbers = [4, 2, 5, 1, 3];
numbers.sort(function(a, b) {
  return a - b;
});

const numbers2 = [4, 2, 5, 1, 3];
numbers2.sort(function(a, b) {
  return b - a;
});

console.log(pepe);
console.log(numbers);
console.log(numbers2);

//---------------------
console.log('--- .toString() ----')
const array10 = [1, 2, 'a', '1a'];

console.log(array10.toString());