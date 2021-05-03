/*
Not actuall Next gen js but need to be note as N.B
*/

const person = {
  name : 'Shoukki'
};
const secondPerson = person; //make an actual copy
person.name = 'Shoukkiya';
console.log(secondPerson);
/*
[object Object] {
  name: "Shoukkiya"   // real copy will also change
}
*/

const person = {
  name : 'Shoukki'
};
const secondPerson = {...person};
person.name = 'Shoukkiya';
console.log(secondPerson);

/*
[object Object] {
  name: "Shoukki"
}
*/



//Arrays
const numbers = [1,2,3];

const doubleArray = numbers.map((num1) => {
  return num1 * 2;
})
console.log(doubleArray);

console.log(numbers);
/*
[2, 4, 6]
[1, 2, 3]
 */
