"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
function doSomething() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log("Final value - " + i);
}
doSomething();
let a = 5;
let b;
let c;
let d;
let e;
let f = ['a', 'b', 'c'];
let g = ['hello', true, 1, 'world', false];
const ColorRed = 0;
const ColorBlue = 1;
const ColorGreen = 2;
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Blue"] = 1] = "Blue";
    Color[Color["Green"] = 2] = "Green";
})(Color || (Color = {}));
;
let backgroundColor = Color.Blue;
;
let small_size = 1;
console.log(small_size);
let message;
message = '123';
let endsWithC = message.slice(-1) === '1';
let alternativeWa_y = message.slice(-1) === '1';
let log = function (message) {
    console.log(message);
};
let doLog = (message) => console.log(message);
let drawPoint = (point) => {
};
drawPoint({
    _x: 1,
    _y: 2
});
let drawPointIn = (point) => {
};
const Point_1 = require("./Point");
let pointA = new Point_1.PointC(3, 4);
pointA.draw();
let pointer__x = pointA.get_x();
console.log("_x - " + pointer__x);
pointA.set_x(5);
pointer__x = pointA.get_x();
console.log("_x - " + pointer__x);
pointer__x = pointA.x;
console.log('_x - ' + pointer__x);
pointA.x = 10;
pointer__x = pointA.x;
console.log('_x - ' + pointer__x);
function render(message) {
    console.log(message);
}
render("hello");
let numbers = [];
numbers[0] = 1;
numbers[1] = 2;
numbers.forEach(n => console.log(n));
let tup = ['tup str', 1];
tup[0] = tup[0].concat(' World');
tup[1].valueOf();
tup.forEach(t => console.log(t));
tup.forEach(t => console.log(t));
function errorCheck(value, check) {
    if (value > 0)
        return value * 1.2;
    return value * 1.3;
}
let num_val = errorCheck(1);
render(num_val);
let emplyoyee = {
    id: 0,
    name: 'Teena',
    retire: (date) => {
        console.log(date);
    }
};
function kgToLbs(weight) {
    if (typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
console.log(kgToLbs(10));
console.log(kgToLbs('20'));
let textbox = {
    Drag: () => { },
    Resize: () => { }
};
let quantity = 50;
let metric;
function greet(name) {
    if (name)
        console.log(("Hello " + name).toUpperCase());
    else
        console.log("Hola !.. ");
}
greet(null);
greet("Albert");
greet(undefined);
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(1);
if (customer !== null && customer != undefined)
    console.log(customer.birthday);
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear());
let logi = null;
logi === null || logi === void 0 ? void 0 : logi('a');
//# sourceMappingURL=main.js.map