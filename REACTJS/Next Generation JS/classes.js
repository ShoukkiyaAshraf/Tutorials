/* Structure
    class Person {
        name:'Shoukki'
        call = () => {
              .....
              .....
                  }
          }
*/

/*Usage
  const myPerson = new Person();
  myPerson.call();
  console.log(myPerson.name);
*/
class Human {
  constructor(){
    this.val = 5;
  }
  printVal(){
    console.log(this.val);
  }
}
class Person extends Human {
    constructor(){
      super();
      this.name = 'Shoukki';
    }
    printMyName(){
      console.log(this.name);
    }
      }

const person1 = new Person();
person1.printMyName();
person1.printVal();

// using next genration
// use babel to compile

class Human {
  val = 5;
  printVal = () => {
    console.log(this.val);
  }
}
class Person extends Human {
      name = 'Shoukki';
      printMyName = () => {
      console.log(this.name);
    }
      }

const person1 = new Person();
person1.printMyName();
person1.printVal();
