console.log('--- Arrow 1 ---');
let add = function (x, y) {
	return x + y;
};

console.log(add(10, 20));

let addArrow = (x, y) => x + y;

console.log(addArrow(10, 20));

// (p1, p2, ..., pn) => expression;
// => { return expression; }

// -------------------
console.log('--- Arrow 2 ---');

let numbers = [4, 2, 6];

/* numbers.sort(function(a, b){ 
    return b - a; 
}); */

numbers.sort((a, b) => b - a);

console.log(numbers);

// -------------------
console.log('--- Arrow 3 ---');

let names = ['John', 'Mac', 'Peter'];
let lengths = names.map(name => name.length); // Miren el parametro!

/* let lengths = names.map(function (name) {
    return name.length;
}); */

console.log(lengths);

// -------------------
console.log('--- Arrow 4 ---');
// -----
/* function Car() {
    this.speed = 0;

    this.speedUp = function (speed) {
        console.log('Velocidad actual: ' + this.speed);
        this.speed = speed;
        console.log('Velocidad nueva: ' + this.speed);
        setTimeout(function () {
            console.log(this.speed); // undefined
        }, 1000);
    };
}

let car = new Car();
car.speedUp(50); */
// -----
/* function Car() {
    this.speed = 0;

    this.speedUp = function (speed) {
        this.speed = speed;
        let self = this;
        setTimeout(function () {
            console.log(self.speed);
        }, 1000);

    };
}

let car = new Car();
car.speedUp(50); */
// -----
/* function Car() {
    this.speed = 0;

    this.speedUp = function (speed) {
        this.speed = speed;
        setTimeout(() => console.log(this.speed), 1000);
    };
}

let car = new Car();
car.speedUp(50); */

// -------------------
console.log('--- Arrow 5 ---');

let testA = function () {
    console.log(arguments);
    return true;
}

let testB = () => {
    console.log(arguments)
    return true;
}

testA(100, 200, 300);
testB(400, 500, 600);

// -------------------
console.log('--- Object.is 1 ---');

let amount = +0;
let volume = -0;
console.log(volume === amount);
console.log(Object.is(amount, volume));

// -------------------
console.log('--- Object.is 2 ---');

let quantity = NaN;
console.log(quantity === quantity);
console.log(Object.is(quantity, quantity));