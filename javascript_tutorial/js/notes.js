    document.body.innerHTML = "hello world";

    document.body.innerHTML = "Hello";

    //comments

    var name = "shoukkiya";

    alert(name)

    /* multi
    line*/

    var Name = "shoukkiya";

    alert(Name)

    const NAME = "fdfggv"

    document.body.innerHTML = "fgfgg";
    var name = "gfgg";

    var a = 20;
    var b = 50;
    var sum1 = a + b;

    var a, b, sum;
    a = 10;
    b = 30;
    sum2 = a + b;

    var a = 20,
      b = 20,
      sum3 = a + b;

    var myname = "my name is shoukki";

    console.log(sum1, sum2, sum3, myname);

    /* -------------------------------------------------------------- */

    // data types :

    console.log(typeof variable_name); // to know the typeof variable

    // strings - putting inside double/ single  quotes " " or ' '

    var name = " Shoukkiya 'ashraf' "; //can use escape characters \'

    // numeric -

    var num1 = 1233654478996;
    var num2 = 1234578.255;

    // Boolean -

    var bool1 = true;
    var bool2 = false;

    var bool3 = 1;
    var bool4 = 0;

    // undefined -

    var hey; // no value assigned

    // null data type

    var hey2 = null;

    console.log(typeof hey2); // to know the typeof variable


    /* -------------------------------------------------------------- */

    // Operators :

    // Assignment Operators -

    var num = 10;
    num += 4;
    num -= 2;
    num *= 3;
    num /= 4;
    num %= 5;

    // Arithmetic Operator -

    var num2 = 5 + 10;
    var num2 = 5 - 10;
    var num2 = 5 * 10;
    var num2 = 5 / 10;
    var num2 = 5 % 10;

    // ++ 	Increment
    // -- 	Decrement

    // String Operator -

    var age = 21;
    var info = "My name is Shoukki, I'm " + age + " years old";
    console.log(info);

    /* -------------------------------------------------------------- */

    // conditional Statements -

    // if Statements:

    var a = '10';
    var y = 200;
    if (a == 10 && y < 20) {
      console.log("20");
    } else if (y == 20) {
      console.log("else if");
    } else {
      console.log("else");
    }

    // == and ===
    true == true-- > true
    1 == true-- > true
    true === true-- > true
    1 === true-- > false // value same but datatype are different

    /* -------------------------------------------------------------- */

    // method and properties :

    var a = "water in bottle";
    console.log(a.length);
    console.log(a.indexOf("w"));
    console.log(a.substring(2, 7));
    console.log(a.replace("water", "juice"));
    console.log(a.toUpperCase());


    var a = ["water", 2, true];
    console.log(a);
    console.log(a.join()); // can made it into string
    console.log(a.join("-"));
    console.log(a.pop());
    a.pop()
    console.log(a);
    a.push("hello") // to insert
    console.log(a.push("hello")); // o/p will be the index which item has been inserted

    /* -------------------------------------------------------------- */

    // functions

    // 1) Named function

    function testExample() {
      var greeting = "Hi, Welcome!!.. "
      console.log(greeting);
    }

    testExample();

    // another method
    /* -------------------------------- */
    function testExample() {
      var greeting = "Hi, Welcome!!.. ";
      return greeting;
    }
    console.log(testExample());
    /* -------------------------------- */
    function testExample(a) {
      var greeting = "Hi " + a + ", Welcome!!.. ";
      return greeting;
    }
    console.log(testExample("shoukki"));
    /* -------------------------------- */

    // 2) Anonymus Function

    var testExample = function(a) {
      var greeting = "Hi " + a + ", Welcome!!... ";
      return greeting;
    }

    console.log(testExample("shoukki"));

    /* -------------------------------- */

    // difference between anonymus and scoped function is -- "SCOPE"
    // named function can be called from anywhere before/after defnition
    // where as anonymus function can't be called before defnition

    // immediate calling
    (function() {
      var greeting = "Hi, Welcome!!... ";
      console.log(greeting);
    }())
    /* -------------------------------------------------------------- */

    // Global and local SCOPE

    // global scope
    var number = 5;

    function calc() {
      return number;
    }
    console.log(calc());
    /* -------------------------------- */
    // local scope

    function calc() {
      var number = 5;
      return number;
    }
    console.log(calc(), number); // ---> reference error

    /* -------------------------------------------------------------- */

    // LET and CONST variable types :

    if (1 == 1) {
      let a = 10;
    }
    console.log(a); // ---> raise error

    /* -------------------------------- */
    const EXAMPLE = 10;
    EXAMPLE = 11; // --> raise an error

    /* -------------------------------------------------------------- */


    var a = "First";
    var b = "Second";
    console.log(a + b + d);
    var d = "Fourth";
    // ---------------------> raise error of undefined

    // But calling a variable through function before function defnition will not raise error like that


    // Incase of Anonymus function

    console.log(a());
    var a = function() {
      a = 100;
      return a;
    }
    //  -------------> raise error;

    /* -------------------------------- */

    /* -------------------------------------------------------------- */

    // Objects in javascript

    let person = new Object();

    person.name = "Shoukki";
    person.eyecolor = "Blue";
    person.age = 21;

    console.log(person.name);

    person.updateAge = function() {
      return ++person.age;
    }
    console.log(person.updateAge());
    /* -------------------------------- */
    // OR

    let person = {
      name: "shoukki",
      eyecolor: "black",
      age: 21,
      updateAge: function() {
        return ++person.age;
      }
    }

    console.log(person.updateAge());

    /* -------------------------------- */

    // construcrors and blueprint

    // blueprint

    function Person(name, eyecolor, age) { // Object always start with capital letter
      this.name = name;
      this.eyecolor = eyecolor;
      this.age = age;
      this.updateAge = function() {
        return ++this.age;
      }
    }

    //constructor

    let person_01 = new Person("Shoukki", "Black", 21);
