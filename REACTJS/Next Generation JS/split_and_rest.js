// with ... (3 dots) operator

//spread : used to split up array elements or object properties
const oldArray = [1,2,3,4];
const newArray = [...oldArray,5,6];
console.log(newArray);

const person = {
  name:'Shoukki'
};

const newPerson = {
  ...person,
  age : 22
};
console.log(newPerson);

// and also const newObject = {...oldObject,newProp:5};

//rest : used to merge a list of function arguments into an array
/* ex : myFunction sortArg(...arg) {
              return arg.sort();
          }

*/
const filter = (...arg) => {
  return arg.filter(el => el === 1);
}

console.log(filter(1,2,3));
