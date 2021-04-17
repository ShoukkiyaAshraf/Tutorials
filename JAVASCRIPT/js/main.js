function Person(name, eyecolor, age) {
  this.name = name;
  this.eyecolor = eyecolor;
  this.age = age;
  this.updateAge = function() {
    return ++this.age;
  }
}

let person_01 = new Person("Shoukki", "Black", 21);
let person_02 = new Person("Tom", "Blue", 5)
console.log(person_01.updateAge());
console.log(person_02);
