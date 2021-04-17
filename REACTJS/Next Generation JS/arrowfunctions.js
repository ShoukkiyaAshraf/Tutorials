// arrow functions mainly help to avoid the conflicts of this keywords.

let person = (name) => {
  console.log(name);
}
person('shoukki');


// If you have only one argument, you can avoid '()'
let person = name => {
  console.log(name);
}
person('shoukki');


// another form
let add = num => num + 2;

console.log(add(2));
