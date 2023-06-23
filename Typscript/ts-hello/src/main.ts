function doSomething(){
    for(var i=0; i<5; i++){
        console.log(i);
    }
    console.log("Final value - "+i); // if let i was used, then te scope of i will be within the block of the code, not within the function
}
doSomething();

//T_ypes in t_ypescript
let a = 5;
// a = 'a'; will throw an error since the value of a is initislized to t_ype number
// defining t_ypes in t_ypescript
let b: number;
let c: string;
let d: boolean;
let e: any;
let f: string[] = ['a','b','c'];
let g: any[] = ['hello',true,1,'world',false];

//defining constants :

const ColorRed = 0;
const ColorBlue = 1;
const ColorGreen = 2;

// defining enum;
enum Color {Red = 0 , Blue = 1, Green = 2}; // adding value will help to keep the order, if we add new col, it will not break the value, otherwise auto value is assigned.
let backgroundColor = Color.Blue;
const enum Size {Small = 1, Medium, Large}; // const keyword will reduce the size od js code  (optimize more)
let small_size = Size.Small;
console.log(small_size);

// T_ype assertion

let message: unknown; // here the message t_ype will an_y
message = '123';
let endsWithC = (<string>message).slice(-1) === '1'; // one wa_y of t_ype assertion 
let alternativeWa_y = (message as string).slice(-1) === '1'; // both of these will not change the t_ype of message in runtime


// arrow functions
let log = function(message: string){
    console.log(message)
}
let doLog = (message: string) => console.log(message);

// passing parameters - inline annotations, using interfaces

//inline annotations
let drawPoint = (point: {_x: number,_y: number}) => {
}
drawPoint({
    _x:1,
    _y:2
});
//using interfaces
export interface Point {
    _x: number;
    _y: number

}
let drawPointIn = (point: Point) => {
    //...
}

//using classes:

import { PointC } from "./Point";
// creating an object of this t_ype
let pointA =  new PointC(3,4);
pointA.draw();
let pointer__x = pointA.get_x();
console.log("_x - "+ pointer__x);
pointA.set_x(5);
pointer__x = pointA.get_x();
console.log("_x - "+ pointer__x);

// using properties

pointer__x = pointA.x;
console.log('_x - '+ pointer__x);
pointA.x = 10;
pointer__x = pointA.x;
console.log('_x - '+ pointer__x);


function render(message: any){ // here if type not defined, typescript will show an error, to avoid it you can change the noImplicitAny in tsconfig.json to true, but defining type s always a better way
    console.log(message)
}
render("hello");

// using arrays : 

let numbers : number[] = [];
numbers[0] = 1;
numbers[1] = 2;
numbers.forEach(n => console.log(n));

// tuples - they are useful when we have two values like key value pair

let tup:[string, number] = ['tup str', 1];
tup[0] = tup[0].concat(' World');
tup[1].valueOf();
tup.forEach(t => console.log(t));
//tup.push(1);  // will break the tup syntax actually --drawback
tup.forEach(t => console.log(t));

//functions :

function errorCheck(value: number, check?:string) : number {  //no Unused Parameters check can be enable using noUnusedParameters
    if(value > 0)
        return value * 1.2; 
    return value * 1.3;  // noImplicitReturns will make the return mandatory
}
let num_val = errorCheck(1);
render(num_val);


// using type :
type Employe = {
    readonly id : number,
    name: string
    retire: (date: Date) => void
}

let emplyoyee:  Employe = {
    id : 0,
    name : 'Teena',
    retire: (date: Date) => {
        console.log(date);
    }
};

// Union :
function kgToLbs(weight :  number | string) : number {
    // narrowing for union 
    if(typeof weight === 'number')
        return weight * 2.2;
    else
       return parseInt(weight) * 2.2 ;
}
console.log(kgToLbs(10));
console.log(kgToLbs('20'));

// intersection

type Draggable = {
    Drag: () => void ;
}
type Resizable = {
    Resize : () => void;
}
type UIWidget = Draggable & Resizable;
let textbox: UIWidget = {
    Drag : () => {},
    Resize: () => {}
}

// Literals - to limit values to variables

type Quantity = 50 | 100;
let quantity : Quantity = 50;

type Metric = 'cm' | 'inch';
let metric: Metric;

// nullable types

function greet(name: string | null | undefined) {
    if(name)
        console.log(("Hello "+ name).toUpperCase());
    else
    console.log("Hola !.. ");
}
// greet(null) will return error since - strict is true in tsconfig.json will also make strictNullChecks to true, we can make it false to remove the other - not recommended
greet(null);
greet("Albert");
greet(undefined);


// Optional chaining

type Customer = {
    birthday?: Date
};

function getCustomer(id : number): Customer | null  | undefined{
    return id === 0 ? null : {birthday : new Date()};
}

let customer = getCustomer(1);
if(customer !== null && customer != undefined)
    console.log(customer.birthday);
// can be simply reduced using optional chanining

console.log(customer?.birthday?.getFullYear());

// optional element access operator
//customer?.[0]

// optional call
let logi: any = null;
logi?.('a');
