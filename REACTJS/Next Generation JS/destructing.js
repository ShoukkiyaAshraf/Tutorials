// allows to extract array elements or object properties and store them in variables
/* while comparing with rest and spread
      [they allow to split array and objects, merge function arguments - of all elements]
  But destucting will extract only single elements and store them into variables
*/
//array

[a,b] = [1,2];
console.log(a);
console.log(b);

//object

{name} = {name:'Shoukki',age:28};
console.log({name}); // Shoukki
console.log({{age}}); //Undefined

const numbers = [1,2,3];
[num1,num2] = numbers;
console.log(num1);
console.log(num2);
[num1, ,num2] = numbers;
console.log(num1);
console.log(num2);
