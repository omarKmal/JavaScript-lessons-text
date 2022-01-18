=======================================================================
				Lesson[1]
=======================================================================
/*
  ES6, ES7, ES8, ES9, ES10
  [E]CMA [S]cript 6 = ECMAScript 6 / ECMAScript 2015
*/
=======================================================================
				Lesson[2]
=======================================================================
/*
  let, const

  var
  - Function Scope
  - Can Be Redeclare
  - Undefined When Accessing A Variable Before It's Declared
  - Create Properties in The Window Object

  let
  - Block Scope
  - Cannot Be Redeclare
  - Reference Error When Accessing A Variable Before It's Declared
  - Does Not Create Properties in The Window Object

  const
  - Block Scope
  - Cannot Be Redeclare
  - Reference Error When Accessing A Variable Before It's Declared
  - Does Not Create Properties in The Window Object

*/

var osama = 1;
let ahmed = 2;

console.log(window.osama)
console.log(window.ahmed)

console.log(this.ahmed)
console.log(this.ahmed)

console.log(window)
console.log(this)

/* function letTest(){
    let x = 1;
    if(true){
        let x = 2;
        console.log(x);
    }
    console.log(x);
    return "done";
}
console.log(letTest());
 */


/* 
function varTest(){
    var x = 1;
    if(true){
        var x = 2;
        console.log(x);
    }
    console.log(x);
    return "done";
}
console.log(varTest()); */
=======================================================================
				Lesson[3]
=======================================================================
/*
  let, const

  var
  - Function Scope
  - Can Be Redeclare
  - Undefined When Accessing A Variable Before It's Declared
  - Create Properties in The Window Object

  let
  - Block Scope
  - Cannot Be Redeclare
  - Reference Error When Accessing A Variable Before It's Declared
  - Does Not Create Properties in The Window Object

  const
  - Block Scope
  - Cannot Be Redeclare
  - Reference Error When Accessing A Variable Before It's Declared
  - Does Not Create Properties in The Window Object

*/

const SETTINGS = {
  'name' : 'Osama',
  'age': 36
};

Object.freeze(SETTINGS);
SETTINGS.name = 'Sayed';
console.log(SETTINGS);
=======================================================================
				Lesson[4]
=======================================================================
/*
  Arrow Function
*/

// Regular Function With No Parameters
let regularTestOne = function () {
  return 2;
}

// Arrow Function With No Parameters
let arrowTestOne = () => 2;
let arrowTestTwo = _ => 2;

// Regular Function With One Parameter
let regularTestTwo = function (param) {
  return param * 2;
}

// Arrow Function With One Parameter
let arrowTestThree = (param) => param * 2;
let arrowTestFour = param => param * 2;

console.log(arrowTestFour(22))

// Regular Function With Multiple Parameters
let regularTestThree = function (param1, param2) {
  return param1 * param2;
}

console.log(regularTestThree(10, 30))

// Arrow Function With Multiple Parameters
let arrowTestFive = (param1, param2) => param1 * param2;

console.log(arrowTestFive(10, 30))
=======================================================================
				Lesson[5]
=======================================================================
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <body>
    <div id="show"></div>
    <button id="button">Click</button>
    <script src="main.js"></script>
  </body>
</html>

/*
  Arrow Function
*/

// First Try
let test = function () {
  document.getElementById('show').innerHTML = this;
}

// Window Object Called The Function
window.onload = test;

// Button Object Called The Function
document.getElementById('button').addEventListener('click', test);

// Second Try
let test2 = () => document.getElementById('show').innerHTML = this;

// Window Object Called The Function
window.onload = test2;

// Button Object Called The Function
document.getElementById('button').addEventListener('click', test2);

// ##########################################

function Person() {

  this.age = 0;

  setInterval(() => {

    this.age++;

    console.log(this.age);

  }, 1000);

}

=======================================================================
				Lesson[6]
=======================================================================
/*
  Template Literals [Template Strings]
*/

const theKind = "Male";

let oldWay = "Hello Its Me " + (theKind === "Male" ? "Mr" : "Mrs") + " Osama \n" +
"Iam " + theKind + " \n" +
"Iam From Elzero Web School \n" +
"I Love All My Followers";

let newWay = `Hello Its Me ${theKind === "Male" ? 'Mr' : 'Mrs'} Osama
Iam ${theKind}
Iam From Elzero Web School
I Love All My Followers`;

console.log(oldWay);
console.log(newWay);

// ################################

let username = "Osama",
    age = 36;

const myHtmlMarkup = `
  <div class="card">
    <h2 class="name">${username}</h2>
    <span class="age">${age}</span>
  </div>
`;

document.body.innerHTML = myHtmlMarkup;
=======================================================================
				Lesson[7]
=======================================================================/*
  Spread Operator ...
*/
w
// First Example

let arrayOne = [1, 2, 3],
    arrayTwo = [4, 5];

console.log(arrayOne.concat(arrayTwo));

let allArrays = [...arrayOne, ...arrayTwo];
console.log(allArrays);

function sum(x, y, z) {
  return x + y + z;
}

const myNumbers = [1, 2, 3];

console.log(myNumbers)
console.log(...myNumbers)
console.log(sum(...myNumbers))

// ###########################

// Second Example

let arrayOne = [1, 2, 3],
    arrayTwo = [4, 5],
    customArray = [1, 2, 3, ...arrayTwo, 6, 7];

console.log(customArray);

// ###########################

// Third Example

let arrayOne = [1, 2, 3],
    arrayTwo = [...arrayOne];

arrayTwo.push(4);

console.log(arrayOne);
console.log(arrayTwo);

// ###########################

// Fourth Example

let arrayOne = [1, 2, 3, 100, -10, 500];

console.log(Math.min(...arrayOne));

=======================================================================
				Lesson[8]
=======================================================================
/*
  Default Parameters
*/
function showMe(username, role, theme){
    username = (username === undefined) ? "Default username" : username;
    role     = (role === undefined) ? "Default role" : role;
    theme    = (theme === undefined) ? "Default theme" : theme;

    return `Hello ${username} Your role is ${role} And your color is ${theme}`;
    
    
// First Example

function showMyInfo(username, role, theme) {

  username = username || 'Default User';
  role = role || 'Default Role';
  theme = theme || 'Default Theme';

  return `Hello ${username}, Your Role Is: ${role}, Website Theme is: ${theme}`;

}

console.log(showMyInfo());
console.log(showMyInfo("Osama"));
console.log(showMyInfo("Osama", "Admin"));
console.log(showMyInfo("Osama", "Admin", "Black"));

// ###########################

// Second Example

function showMyInfo(username = "Default User", role = "Default Role", theme = "Default Theme") {
  return `Hello ${username}, Your Role Is: ${role}, Website Theme is: ${theme}`;
}

console.log(showMyInfo());
console.log(showMyInfo("Osama"));
console.log(showMyInfo("Osama", "Admin"));
console.log(showMyInfo("Osama", "Admin", "Black"));

=======================================================================
				Lesson[9]
=======================================================================/*
  Rest Parameters ...
*/

// First Example

function showInfo(a, b, c, ...myParams) {

  console.log("Param a", a);
  console.log("Param b", b);
  console.log("Param c", c);
  console.log("Param myParams", myParams);

  return `Console Output Done`;

}

console.log(showInfo("One", "Two", "Three", "Four", "Five", "Six", "Seven"));

// ###########################

// Second Example

function addAll(...myParams) {

  let myNumber = 0;

  for (let myParam of myParams) myNumber += myParam;

  return myNumber;

}

console.log(addAll(1));
console.log(addAll(1, 2, 3));
console.log(addAll(1, 2, 10, 50, 100));

===================================================================
				Lesson[10]
===================================================================
/*
  New String Methods
  startsWith => string.startsWith(Search String, Position = 0)
  endsWith => string.endsWith(Search String, End Position = string.length)
*/

let x = 'Video - Learn How To Learn';
console.log(x.endsWith('o', 20));
console.log('Video - Learn How To Learn'.length);
===================================================================	
			Lesson[11]
===================================================================
/*
  New String Methods
  startsWith => string.startsWith(Search String, Position = 0)
  endsWith => string.endsWith(Search String, End Position = string.length)
  ---
  includes => string.includes(Search String, Position = 0)
  repeat => string.repeat(count)
*/

let x = 'Elzero Web School';
console.log(x.includes('eb', 8));
console.log(x.repeat(4));
===================================================================
				Lesson[12]
===================================================================
let name = "Default",
    age  = "Default",
    gender= "Default";

const user = {
    name: 'Osama',
    gender: 'Male',
    age: 36,
    city: 'Cairo',
    website: 'Elzero',
    theme: 'red'
  };
  
({name, gender, age} = user);
  
console.log(`My Name Is: ${name}, Iam ${gender}, My Age Is: ${age}`);

/*
  Destructuring
  - Object
  - Array
  - Parameter
*/

const user = {
  name: 'Osama',
  gender: 'Male',
  age: 36,
  city: 'Cairo',
  website: 'Elzero',
  theme: 'red'
};

const {name, gender, age, theme = 'Default'} = user;

console.log(`My Name Is: ${name}, Iam ${gender}, My Age Is: ${age}, My Theme Color Is: ${theme}`);
===================================================================			
	Lesson[13]
===================================================================
/*
  Destructuring
  - Object
  - Array
  - Parameter
*/

// First Example

const user = {
  name: 'Osama',
  gender: 'Male',
  age: 36,
  city: 'Cairo',
  website: 'Elzero',
  theme: 'red'
};

const {name: theName, gender: theGender, age: theAge, theme: theTheme = 'Default'} = user;

console.log(`My Name Is: ${theName}, Iam ${theGender}, My Age Is: ${theAge}, My Theme Color Is: ${theTheme}`);
// ###########################
const user = {
    name    : "Omar",
    gender  : "Male",
    age     : 26,
    city    : "Mansoura",
    webSite : "Elzero",
    theme   : "black",
    langs   : {
        html : "70%",
        css  : "80%",
        js   : "10%",
        python: "30%"
    }
};
const {name : TheName , gender : theGender, age : theAge, theme : theTheme = "Default Theme", langs: {html,css,python} }= user;

console.log(`My name is: ${TheName}, And gender is: ${theGender}, And the age is : ${theAge}, and The theme is ${theTheme} 
And the python is ${python} and ${css} and ${html}
`)
// ###########################

// Second Example

const user = {
  name: 'Osama',
  gender: 'Male',
  age: 36,
  city: 'Cairo',
  website: 'Elzero',
  theme: 'Default',
  langs: {
    html: '70%',
    css: '80%',
    js: '10%',
    python: '20%'
  }
};

const {html, css, js} = user.langs;

console.log(`${html} ${css} ${js}`);
===================================================================	
			Lesson[14]
===================================================================
/*
  Destructuring
  - Object
  - Array
  - Parameter
*/

const food = ["Burger", "Pizza", "Chicken", "Meat", "Rice"];

const [one, , , four] = food;

console.log(`The Food I Love Is: ${one}, ${four}`);
===================================================================	
			Lesson[15]
===================================================================
/*
  Destructuring
  - Object
  - Array
  - Parameter
*/

// First Example

const food = ["Burger", "Pizza", "Chicken", ["Apple", "Banana", "Mango", ['EgyOrange', "PakistanOrange"]]];

const [one, two, three, [fr1, fr2, , [o1, o2]]] = food;

console.log(`The Food I Love Is: ${one}, ${two}, ${three}.`);
console.log(`The Fruits I Love Is: ${fr1}, ${fr2}, ${three}`);
console.log(`And I Love All Kinds Of Orange Specially ${o1}, ${o2}`);

// ###########################

// Second Example

const food = ["Burger", "Pizza", "Chicken", "Apple", "Banana", "Mango", "Rice", "Meat"];

const [one, two, three, ...otherFood] = food;

console.log(`The Food I Love Is: ${one}, ${two}, ${three}, ${otherFood}`);
===================================================================	
			Lesson[16]
===================================================================

/*
  Destructuring
  - Object
  - Array
  - Parameter
*/

// First Example

let book = "Video",
    video = "Book";

// Copy First Variable Into Stash
let stash = book;

// Swapping Variables
book = video;

// Get Book Value From Stash
video = stash;

console.log(`Book Is ${book} and Video Is ${video}`);

// ###########################

// Second Example

let book = "Video",
    video = "Book";

[book, video] = [video, book];

console.log(`Book Is ${book} and Video Is ${video}`);
===================================================================	
			Lesson[17]
===================================================================
/*
  Destructuring
  - Object
  - Array
  - Parameter
*/

const user = {
  username: 'Osama',
  city: 'Cairo',
  skills: {
    html: '80%',
    css: '85%',
    js: {
      frameone: 'Vuejs',
      frametwo: 'Reactjs',
      framethree: 'Angularjs'
    }
  }
};

const {username, city, skills: {html, css, js: {frameone: one, frametwo: two, framethree: three}}} = user;

console.log(`My Name Is ${username}, And I Live in ${city}.`);
console.log(`My Html Skill Progress Is: ${html}, and CSS is ${css}`);
console.log(`I Have Knowledge in Js Frameworks Like ${one}, ${two}, ${three}`);

===================================================================	
			Lesson[18]
===================================================================
/*
  Destructuring
  - Object
  - Array
  - Parameter
*/

// First Example

const user = {
  username: 'Osama',
  city: 'Cairo',
  skills: {
    html: '80%',
    css: '85%',
    js: ['Vuejs', 'Reactjs', 'Angularjs']
  }
};

// const {username, city, skills: {html, css, js: [one, two, three]}} = user;

function showMyInfo(user) {
  console.log(`My Name Is ${user.username}, And I Live in ${user.city}.`);
  console.log(`My Html Skill Progress Is: ${user.skills.html}, and CSS is ${user.skills.css}`);
  console.log(`I Have Knowledge in Js Frameworks Like ${user.skills.js[0]}, ${user.skills.js[1]}, ${user.skills.js[2]}`);
}

showMyInfo(user);

// ###########################

// Second Example

const user = {
  username: 'Osama',
  city: 'Cairo',
  skills: {
    html: '80%',
    css: '85%',
    js: ['Vuejs', 'Reactjs', 'Angularjs']
  }
};

// const {username, city, skills: {html, css, js: [one, two, three]}} = user;

function showMyInfo({username, city, skills: {html, css, js: [one, two, three]}}) {
  console.log(`My Name Is ${username}, And I Live in ${city}.`);
  console.log(`My Html Skill Progress Is: ${html}, and CSS is ${css}`);
  console.log(`I Have Knowledge in Js Frameworks Like ${one}, ${two}, ${three}`);
}

showMyInfo(user);
===================================================================	
			Lesson[19]
===================================================================
/*
  Enhanced Object Literals
  1- Property Value Shorthand
  2- Methods Shorthand
  3- Computed Object Property Name
*/

// Before Property Value Shorthand

const username = "Osama",
      website = "Elzero.org";

const user = {
  username: username,
  website: website
}

console.log(user)
console.log(user.username)
console.log(user.website)

// After Property Value Shorthand

const username = "Osama",
      website = "Elzero.org";

const user = {
  username,
  website
}

console.log(user)
console.log(user.username)
console.log(user.website)

// Before Methods Shorthand

const user = {
  myMethod: function (param1) {
    return param1;
  }
}

console.log(user.myMethod('Hello From Parameter'));

// After Methods Shorthand

const user = {
  myMethod (param1) {
    return param1;
  }
}

console.log(user.myMethod('Hello From Parameter'));

// Before Computed Object Property Name

const myVariable = 'Key'; // Create Normal Variable
const myObject = { myProperty: 'MyValue' }; // Create New Object
myObject[myVariable] = 'Value'; // Add Dynamic Property and Assign A Value

console.log(myObject);

// After Computed Object Property Name

const myVariable = 'Key'; // Create Normal Variable
const myObject = {  // Create New Object
  myProperty: 'MyValue',
  [myVariable]: 'Value'
};

console.log(myObject);
===================================================================	
			Lesson[20]
===================================================================
/*
  Set: new Set(Iterable)
*/

let myArray = [1, 2, 3, 3, 4, 4, 2];
let myBooks = new Set(myArray);

console.log(myBooks);
console.log([...myBooks]);
===================================================================	
			Lesson[21]
===================================================================
/*
  Set: Methods
*/

let myBooks = new Set('Osama');

myBooks.add('osama');
myBooks.delete('s');
myBooks.clear();

console.log(myBooks);
console.log(myBooks.has('Osama'.toLowerCase()));
===================================================================	
			Lesson[22]
===================================================================
/*
  Map
*/

let user = {} // Empty Object
user['username'] = "Osama";
user.website = "Elzero.org";
user["10"] = "String";
user[10] = "Number";

console.log(user);
console.log(user.username);
console.log(user['website']);

let myMap = new Map();

myMap.set("10", "String");
myMap.set(10, "Number");
myMap.set(false, "Boolean");
myMap.set({a: 1, b: 2}, "Object");
myMap.set(function doSomething() {}, "Function");

console.log(myMap);

// ###########################

// Another Example Of Setting Properties Inside Map

let myMap = new Map([
  ["10", "String"],
  [10, "Number"],
  [false, "Boolean"],
  [{a: 1, b: 2}, "Object"],
  [function doSomething() {}, "Function"]
]);

console.log(myMap);
===================================================================	
			Lesson[23]
===================================================================
/*
  Map: Methods
*/

let user = {} // Empty Object
user['username'] = "Osama";
user.website = "Elzero.org";
user["10"] = "String";
user[10] = "Number";

console.log(user);
console.log(user.username);
console.log(user['website']);

let myMap = new Map();

myMap.set("10", "String");
myMap.set(10, "Number");
myMap.set(false, "Boolean");
myMap.set({a: 1, b: 2}, "Object");
myMap.set(function doSomething() {}, "Function");

console.log(myMap);

// ###########################

// Another Example Of Setting Properties Inside Map

let myMap = new Map([
  ["10", "String"],
  [10, "Number"],
  [false, "Boolean"],
  [{a: 1, b: 2}, "Object"],
  [function doSomething() {}, "Function"]
]);

console.log(myMap);

// ###########################

// Map Methods

console.log(`My Map Elements Count Is: ${myMap.size}`);

console.log(`Using Get Method: ${myMap.get("10")}`);

console.log(`Using Get Method: ${myMap.get(10)}`);

console.log(`Using Has Method: ${myMap.has(false)}`);

console.log(`Using Delete Method: ${myMap.delete(false)}`);

console.log(`My Map Elements Count Is: ${myMap.size}`);

myMap.clear();

console.log(`My Map Elements Count Is: ${myMap.size}`);
===================================================================	
			Lesson[24]
===================================================================
/*
  Symbols
*/

const mySymbol = Symbol();
console.log(typeof(mySymbol)); // Symbol Data Type

const mySymboleOne = Symbol("Testing");
const mySymboleTwo = Symbol("Testing");
console.log(mySymboleOne === mySymboleTwo); // Unique

const myNewSymbol = Symbol();

const myObject = {
  username: "Osama Elzero",
  website: "Elzero.org",
  [myNewSymbol]: "This Is Hidden From Iteration"
}

console.log(myObject);

for (let val of Object.entries(myObject)) {
  console.log(val);
}

console.log(Object.getOwnPropertyNames(myObject));

console.log(Object.keys(myObject));

console.log(Object.getOwnPropertySymbols(myObject));

console.log(JSON.stringify(myObject));
===================================================================	
			Lesson[25]
===================================================================
/*
  Symbols
*/

// First Example

const mySymboleOne = Symbol.for("One"); // Symbol Not Exists, Create It
const mySymboleTwo = Symbol.for("One"); // Symbol is Exists, Return It

console.log(mySymboleOne === mySymboleTwo);
console.log(Symbol.keyFor(mySymboleTwo));

// ###########################

// Second Example

const mySymboleOne = Symbol("One");

alert(mySymboleOne.toString());

console.log(mySymboleOne.description);

Symbol.iterator

===================================================================		
		Lesson[26]
===================================================================
/*
  forEach(CurrentValue, index, array)
*/

const arr = ["A", "B", "C", "D", ,"F"];

for (let i = 0; i < arr.length; i++) {

  console.log(`${i} - ${arr[i]}`);

}

console.log(`${"#".repeat(30)}`);

arr.forEach((el, i) => {

  console.log(`${i} - ${el}`);
});

console.log(`${"#".repeat(30)}`);

let callbacks = 0;

arr.forEach((el, i) => {

  console.log(`${i} - ${el}`);

  callbacks++;

});

console.log(callbacks);

console.log(`${"#".repeat(30)}`);

function makeTheLoop(element, index) {

  console.log(`${index} - ${element}`);

}

arr.forEach(makeTheLoop);
===================================================================		
		Lesson[27]
===================================================================
/*
  forEach(currentKey, currentValue, Set)
*/

const mySet = new Set([1, 1, 1, 2, 2, 2, 3, 4, 5]);

mySet.forEach((item1, item2) => {

  console.log(`${item1} - ${item2}`);

});

console.log(`${"#".repeat(20)}`);

/*
  forEach(Value, Key, Map)
*/

const myMap = new Map([ ["A", 1], ["C", 3], ["B", 2], ["X", {}] ]);

myMap.forEach((v, k) => {

  console.log(`${k} => ${v}`);

});
===================================================================		
		Lesson[28]
===================================================================
/*
  Set vs WeakSet
  ======================

  Set
  - Contain Any Type Of Values
  - Get Elements Count With .size
  - forEach Available To Iterate
  - You can Get Its Keys

  WeakSet
  - Contains Only Object
  - You Can't Use Size To Get Elements Count
  - forEach Not Available To Iterate
  - You Cant Get Keys

*/

let mainObject = {A: 1};

let mySet = new Set([ mainObject ]);

let objectOne = {B: 2};
let objectTwo = {C: 3};

mySet.add(objectOne);
mySet.add(objectTwo);

console.log(mySet);

console.log(mySet.has(objectOne));
console.log(mySet.has(objectTwo));

console.log(mySet.size);
console.log(mySet.keys());

mySet.delete(objectOne);
console.log(mySet.has(objectOne));

objectTwo = null;
console.log(mySet.has(objectTwo));

console.log(mySet);

mySet.add("String");
mySet.add(12);

console.log(mySet);

mySet.forEach(v => {

  console.log(v);

});


let mainObject = {A: 1};

let myWeakSet = new WeakSet([ mainObject ]);

let objectOne = {B: 2};
let objectTwo = {C: 3};

myWeakSet.add(objectOne);
myWeakSet.add(objectTwo);

console.log(myWeakSet);

console.log(myWeakSet.has(objectOne));
console.log(myWeakSet.has(objectTwo));

// console.log(myWeakSet.size);
// console.log(myWeakSet.keys());

myWeakSet.delete(objectOne);
console.log(myWeakSet.has(objectOne));

objectTwo = null;
console.log(myWeakSet.has(objectTwo));

console.log(myWeakSet);

// myWeakSet.add("String");
// myWeakSet.add(12);

// myWeakSet.forEach(v => {

//   console.log(v);

// });
===================================================================		
		Lesson[29]
===================================================================
/*

  Map vs WeakMap
  ======================

  Map
  - Contain Any Type Of Values
  - Get Elements Count With .size
  - forEach Available To Iterate
  - You can Get Its Keys

  WeakMap
  - Contains Only Object
  - You Can't Use Size To Get Elements Count
  - forEach Not Available To Iterate
  - You Cant Get Keys

*/

let myMap = new Map();
let objectOne = {a: 1};
myMap.set(objectOne, "Test");
myMap.set("b", 2);
myMap.set("c", 3);
myMap.set(1, 15);

console.log(myMap);
console.log(myMap.get("c"));
console.log(myMap.get(objectOne));

console.log(myMap.has("b"));
myMap.delete("b");
console.log(myMap.has("b"));

objectOne = null;
console.log(myMap.get(objectOne));

console.log(myMap.size);

let myWeakMap = new WeakMap();
let objectOne = {a: 1};
let objectTwo = {b: 2};
myWeakMap.set(objectOne, "Test1");
myWeakMap.set(objectTwo, "Test2");
// myWeakMap.set("b", 2);
// myWeakMap.set("c", 3);
// myWeakMap.set(1, 15);

console.log(myWeakMap);

console.log(myWeakMap.get(objectOne));

console.log(myWeakMap.has(objectTwo));
myWeakMap.delete(objectTwo);
console.log(myWeakMap.has(objectTwo));

objectOne = null;
console.log(myWeakMap.get(objectOne));

console.log(myWeakMap);

// console.log(myWeakMap.size);
===================================================================		
		Lesson[30]
===================================================================
/*

  Symbol Iterator & For Loop

  Iterable => Object Has Symbol.Iterator
  Iterator
    - Object With Interface Designed For Iteration
    - All Iterators Has Next() Method That Return Result Object
    - The Result Object Has Two Props
    --- [1] Value => The Next Value
    --- [2] Done => Boolean Value To Tell If The Next Value Exists Or No

  For ... Of Loop

  [1] Call Symbol.Iterator With Next Method
  [2] Save Value Inside Variable
  [3] Check For Done If Its True => Exit The Loop

*/

let myArray = [1, 2, 3];
let myName = "Osama";
let myNumber = 1000;
let myObject = {};

console.log(typeof(myArray[Symbol.iterator]));
console.log(typeof(myName[Symbol.iterator]));
console.log(typeof(myNumber[Symbol.iterator]));
console.log(typeof(myObject[Symbol.iterator]));

let theIterator = myName[Symbol.iterator]();

console.log(theIterator);
console.log(theIterator.next());
console.log(theIterator.next());
console.log(theIterator.next());
console.log(theIterator.next());
console.log(theIterator.next());
console.log(theIterator.next());

for (let char of myName) {

  console.log(char);

}

// for (let num of myNumber) {

//   console.log(num);

// } 

// for (let a of myObject) {

//   console.log(a);

// }
===================================================================		
		Lesson[31]
===================================================================
/*
  Custom Iterable Object
*/

const myObject = {
  name: "Osama",
  age: 36,
  country: "Egypt",
  favSkill: "JavaScript",
  [Symbol.iterator] () {
    let step = 0;
    let properties = Object.keys(this);
    // console.log(properties);
    return {
      next() {
        return {
          value: myObject[properties[step]],
          done: step++ === properties.length
        }
      }
    }
  }
}

for (let prop of myObject) {
  console.log(prop);
}

console.log(myObject['favSkill']);
===================================================================		
		Lesson[32]
===================================================================
/*
  Generators Part 1
  Intro And What's Generators
*/

function * generateTickets() {

  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;

}

let iterator = generateTickets();

console.log(typeof(iterator));
console.log(iterator.next().value);

console.log(`${"#".repeat(20)}`);
console.log(`We Will Do Something Before Yielding The Next Ticket`);

console.log(iterator.next().value);

console.log(`${"#".repeat(20)}`);
console.log(`Function Stop Execution After Each Yield`);

console.log(iterator.next().value);

console.log(`${"#".repeat(20)}`);
console.log(`Function Give You The Control To Yield`);

console.log(iterator.next().value);

console.log(`${"#".repeat(20)}`);

let myNumbers = [10, 20, 30, 40, 50];

function * generateNumbers(nums) {

  for (let i = 0; i < nums.length; i++) {

    yield nums[i];

  }

}

let generator = generateNumbers(myNumbers);

console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);

console.log(`${"#".repeat(20)}`);

function * generateNums() {

  yield * [1, 2, 3, 4, 5, 6];
  yield 7;

}

let theGenerator = generateNums();

console.log(theGenerator.next().value);
console.log(theGenerator.next().value);
console.log(theGenerator.next().value);
console.log(theGenerator.next().value);
console.log(theGenerator.next().value);
console.log(theGenerator.next().value);
console.log(theGenerator.next().value);
===================================================================		
		Lesson[33]
===================================================================
/*
  Generators Part 2
  Functionality & Return
*/

function orderBook() {

  window.alert("You Clicked On Button To Order A Book");
  console.log("You Clicked On Button To Order A Book");

  window.alert("You Added The Book To Cart");
  console.log("You Added The Book To Cart");

  window.alert("Payment Is Done");
  console.log("Payment Is Done");

}

let ordering = orderBook();

function * orderBook() {

  window.alert("You Clicked On Button To Order A Book");
  console.log("You Clicked On Button To Order A Book");

  window.alert("You Added The Book To Cart");
  console.log("You Added The Book To Cart");

  window.alert("Payment Is Done");
  console.log("Payment Is Done");

}

// let ordering = orderBook();

function * mySkills() {

  yield "HTML";
  yield "CSS";
  yield "PHP";
  yield "Python";
  yield "JavaScript";

}

let theSkills = mySkills(); // Iterator

for (let skill of theSkills) {

  console.log(skill);

}

for (let s of mySkills()) {

  console.log(s);

}

// Test Return

function * sayNames() {

  yield "Osama";
  yield "Ahmed";
  return "Sayed";
  yield "Eman";

}

let theNames = sayNames();

console.log(theNames.next());
console.log(theNames.next());
console.log(theNames.next());
console.log(theNames.next());
===================================================================		
		Lesson[34]
===================================================================
/*
  Generators Part 3
  Create Infinite Numbers
*/

function * createInfinite() { // DO NOT LOOP ON THIS

  let i = 0;

  while (true) {

    yield i++;

  }

}

let infiniteIterator = createInfinite();

console.log(infiniteIterator.next());
console.log(infiniteIterator.next());
console.log(infiniteIterator.next());
console.log(infiniteIterator.next());
console.log(infiniteIterator.next());
console.log(infiniteIterator.next());

for (let number of infiniteIterator) {

  if (number > 20) {

    break;

  }

  console.log(number);

}
===================================================================		
		Lesson[35]
===================================================================
/*
  Generators Part 4
  Delegating Generators
*/

function * generateNumbers() {

  yield 1;
  yield 2;
  yield 3;

}

function * generateNames() {

  yield "Osama";
  yield "Ahmed";
  yield "Sayed";

}

function * generateAll() {

  yield * generateNumbers();
  yield * generateNames();

}

let genAll = generateAll();

console.log(genAll.next());
console.log(genAll.next());
console.log(genAll.next());
console.log(genAll.next());
console.log(genAll.next());
console.log(genAll.next());
===================================================================		
		Lesson[36]
===================================================================
/*
  New Array Methods
  Array.of
  Array.from
  Array.fill
*/

// Array.of(Elements To Create The Array)

let oldArray = Array(100);
console.log(oldArray);
console.log(oldArray.length);

let newArray = Array.of(100);
console.log(newArray);
console.log(newArray.length);

// Array.from(Iterable, Mapfn, This)

let myName = "Osama";
let arrayOfLetters = Array.from(myName);

console.log(myName);
console.log(arrayOfLetters);

let myNumbers = [10, 20, 30, 15, 18, 100, 60];

let numbersMinusTen = Array.from(myNumbers, (number) => number - 10);

console.log(numbersMinusTen);

// Array.fill(Value To Fill, Start Default 0, End Default Array.length)

let theNumbers = [1, 10, 30, 70, 90];

theNumbers.fill(100); // All Will Be 100
theNumbers.fill(100, 2); // From 30
theNumbers.fill(100, 1, 3); // Will Fill 10 And 30

console.log(theNumbers);
===================================================================		
		Lesson[37]
===================================================================
/*
  New Array Methods
  Array.find()
  Array.findIndex()
  Array.copyWithin()
*/

// Array.find() Not Returning All Values

let myNumbers1 = [1, 10, 20, 30, 40];
let found1 = myNumbers1.find(el => el > 10);
console.log(found1);

console.log(`${"#".repeat(20)}`);

// Array.findIndex() Not Returning All Values

let myNumbers2 = [1, 10, 20, 30, 40];
let found2 = myNumbers2.findIndex(el => el > 10);
console.log(found2);

console.log(`${"#".repeat(20)}`);

// Array.copyWithin(Target, Start Default 0, End Default Array.length)

// "A", "F", "G", "D", "E", "F", "G", "H"
let myLetters = ["A", "B", "C", "D", "E", "F", "G", "H"];
myLetters.copyWithin(1, 5, 7);
console.log(myLetters);
===================================================================		
		Lesson[38]
===================================================================
// Method One

export const a = 1;

export let myArray = [1, 2, 3, 4, 5, 6];

export function sayHello(name) {

  return `Hello ${name}`;

}

// Method Two

const a = 1;

let myArray = [1, 2, 3, 4, 5, 6];

function sayHello(name) {

  return `Hello ${name}`;

}

export {
  a,
  myArray,
  sayHello
}

/*
  Modules Part 1 Export & Import
*/

import { a, myArray, sayHello } from './app.js';

console.log(a);
console.log(myArray);
console.log(sayHello("Osama"));

for (let number of myArray) {

  console.log(number);

}
===================================================================		
		Lesson[39]
===================================================================
const a = 100;

function sayHello(name) {

  return `Hello ${name}`;

}

let myArray = [1, 2, 3, 4, 5];

export {
  a as myRank,
  sayHello,
  myArray
}

/*
  Modules Part 2 Import All And Aliases
*/

// import { myRank, sayHello } from './app.js';

console.log(myRank);
console.log(sayHello("Osama"));

import * as all from './app.js';

console.log(all.myRank);
console.log(all.sayHello("Osama"));

console.log(all);
===================================================================		
		Lesson[40]
===================================================================
const a = 100;
const b = 200;

export {
  a, b
}

const c = 300;

export default function sayHello() {

  return `Hello`;

}

const myObject = {
  name: "Osama",
  age: 36,
  country: "Egypt"
}

export default c;

/*
  Modules Part 3 Named Export vs Default Export
*/

import defaultExp, { a, b } from './app.js';

console.log(a);
console.log(b);
console.log(defaultExp);
===================================================================		
		Lesson[41]
===================================================================
/*
  OOP => Classes Part 1
  Old and New Class Syntax
*/

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  getInfo() {
    console.log(`Hello ${this.name} Your Age Is ${this.age}`);
  }
  getDays() {
    console.log(`You Lived For ${this.age * 365} Days`);
  }
}

const firstUser = new User("Osama", 36);

firstUser.getInfo();
firstUser.getDays();
===================================================================	
			Lesson[42]
==================================================================	

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  getInfo() {
    console.log(`Hello ${this.name} Your Email is ${this.email}`);
  }
}

export default User;

// main.js

/*
  OOP => Classes Part 2
  Extend Class From Another Module
*/

import User from './app.js';

class Admin extends User {
  constructor(name, email) {
    super(name, email);
  }
}

let firstAdmin = new Admin("Osama", "o@nn.sa");
firstAdmin.getInfo();
==================================================================	
			Lesson[43]
===================================================================
/*
  Important Knowledge
  For Promises
  - Call Stack
  --- Mechanism To Make Interpreter Track Your Calls
  --- When You Call A Function Its Added To The Stack
  --- When Function Executed Its Removed From The Stack
  --- The Interpreter Continue Calling From The Last Point Reached
  --- Call Stack Detect Web API And Leave It To The Browser To Handle It
  - Web API
  --- Methods Available From Environment => Browser
  --- When Complete It Add The Callback To The Callback Queue
  - Event Loop
  --- Wait The Call Stack To Finish
  --- Get Callback From Callback Queue
  --- Add Callback To Call Stack
  - Callback Queue
*/

// Example One

let i = 10;
let j = 20;
console.log(i + j);

function first() {
  console.log("Hello First");
}

function second() {
  first();
  console.log("Hello Second");
}

second();

// Example Two

window.setTimeout(() => console.log("Last"), 1000);
console.log("One");
window.setTimeout(() => console.log("Two"), 0);
console.log("Three");

// Example Three

window.setTimeout(() => console.log(myVariable), 0);

let myVariable = 100;

myVariable += 200;
===================================================================	
			Lesson[44]
===================================================================
/*
  Important Knowledge
  For Promises
  - Call Stack
  --- Mechanism To Make Interpreter Track Your Calls
  --- When You Call A Function Its Added To The Stack
  --- When Function Executed Its Removed From The Stack
  --- The Interpreter Continue Calling From The Last Point Reached
  --- Call Stack Detect Web API And Leave It To The Browser To Handle It
  - Web API
  --- Methods Available From Environment => Browser
  --- When Complete It Add The Callback To The Callback Queue
  - Event Loop
  --- Wait The Call Stack To Finish
  --- Get Callback From Callback Queue
  --- Add Callback To Call Stack
  - Callback Queue
  =============================================
  Asynchronous Vs Synchronous Programming
*/

// Example One

console.log("One");
window.alert("Bad");
console.log("Two");

// Example Two

console.log("Function To Do Something");

window.setTimeout(() => console.log("Get Friends List"), 1000);

window.setTimeout(() => console.log("Get Latest News"), 2000);

console.log("Do Important Things, Waiting Is A Big Problem");
===================================================================	
			Lesson[45]
===================================================================
/*
  Promise Intro
  - Promise Is One Of The Best Features In ES6
  - Promise Make It Easy To Support Asynchronous Programming
  - Promise in JavaScript Is Like Promise in Real Life
  - Promise Is Something That Will Happen in The Future
  - Promise Is A Placeholder For A Future Value
  - You Booked A Cinema Ticket, You Have A Promise From Cinema Owner 2 Have A Seat
  - You Got Task To Do, U Promised Your Boss To Do The Task
  - You Ordered Food From Restaurant
  --- [ Promise ] Is The Order Record
  --- [ The Future Value ] Is The Food You Will Receive
  - You Ordered iPhone From Souq Shop
  --- [ Promise ] Is The Order Record
  --- [ The Future Value ] Is The iPhone You Will Receive
  - Promise Is An Object
  - Promise Is The Event Completion Or Failure of Async Operation & Its Resulting Value.
  - JavaScript Use Callbacks For Asynchronous Programming
  --- [1] Function Called And Do The Task
  --- [2] Action Complete
  --- [3] Another Function Called
  --- [4] Action Complete
  --- [5] Another Function Called
  - In Complex Cases => Every Call Add Nesting Level
  - http://callbackhell.com/
  - Promise Avoiding Callback Hell Or Pyramid Of Doom
  - Promise Is One Of This States
  [1] Pending => Not Fulfilled Or Rejected
  [2] Fulfilled => Operation Succeeded
  [3] Rejected => Operation Failed
*/
===================================================================	
			Lesson[46]
===================================================================
/*
  Promise Intro
  - Promise Is One Of The Best Features In ES6
  - Promise Make It Easy To Support Asynchronous Programming
  - Promise in JavaScript Is Like Promise in Real Life
  - Promise Is Something That Will Happen in The Future
  - Promise Is A Placeholder For A Future Value
  - You Booked A Cinema Ticket, You Have A Promise From Cinema Owner 2 Have A Seat
  - You Got Task To Do, U Promised Your Boss To Do The Task
  - You Ordered Food From Restaurant
  --- [ Promise ] Is The Order Record
  --- [ The Future Value ] Is The Food You Will Receive
  - You Ordered iPhone From Souq Shop
  --- [ Promise ] Is The Order Record
  --- [ The Future Value ] Is The iPhone You Will Receive
  - Promise Is An Object
  - Promise Is The Event Completion Or Failure of Async Operation & Its Resulting Value.
  - JavaScript Use Callbacks For Asynchronous Programming
  --- [1] Function Called And Do The Task
  --- [2] Action Complete
  --- [3] Another Function Called
  --- [4] Action Complete
  --- [5] Another Function Called
  - In Complex Cases => Every Call Add Nesting Level
  - http://callbackhell.com/
  - Promise Avoiding Callback Hell Or Pyramid Of Doom
  - Promise Is One Of This States
  [1] Pending => Not Fulfilled Or Rejected
  [2] Fulfilled => Operation Succeeded
  [3] Rejected => Operation Failed
*/

const myPromise = new Promise((resolve, reject) => {
  // console.log("Welcome To My First Promise");
  /*
    Asynchronous Operation
    Fulfilled => resolve
    Rejected => reject
  */

  let connect = true;
  if (connect) {
    resolve("Connection Established");
  } else {
    reject(Error("Connection Failed"));
  }
}).then(
  (resolved) => console.log(resolved),
  (rejected) => console.log(rejected)
);

console.log(typeof myPromise);

// Another Syntax

const theResolved = (resolved) => console.log(resolved);
const therejected = (rejected) => console.log(rejected);

myPromise.then(theResolved, therejected);
===================================================================	
			Lesson[47]
===================================================================
// First Example

const myPromise = new Promise((resolve, reject) => {
  // Only One State Allowed
  // resolve("Resolved");
  // reject("Rejected"); // Ignored

  if (Math.random() * 100 < 50) {
    resolve("Good");
  } else {
    reject("Bad");
  }
});

myPromise.then(
  (resolved) => console.log(resolved),
  (rejected) => console.log(rejected)
);

// Other Syntax

myPromise.then(null, (rejected) => console.log(rejected));
myPromise.catch((rejected) => console.log(rejected));

// Second Example

firstRequest(function (response) {
  secondRequest(
    response,
    function (nextResponse) {
      thirdRequest(
        nextResponse,
        function (finalResponse) {
          console.log("Final response: " + finalResponse);
        },
        failureCallback
      );
    },
    failureCallback
  );
}, failureCallback);

firstRequest()
  .then((response) => secondRequest(response))
  .then((nextResponse) => thirdRequest(nextResponse))
  .then((finalResponse) => console.log("Final response: " + finalResponse))
  .catch(failureCallback);
===================================================================	
			Lesson[48]
===================================================================
// Without Promise

function getFirstRepo(apiURL) {
  let myRequest = new XMLHttpRequest();

  myRequest.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      /*
        Ready State => The Status Of The Request
        [0] Request Not Initialized
        [1] Server Connection Established
        [2] Request Recieved
        [3] Processing Request
        [4] Request Is Finished And Response Is Ready
        Status => Response Status Code
        [200] Ok
        [404] Not Found
      */

      // console.log(this.responseText);
      console.log(JSON.parse(this.responseText)[0].name);
    }
  };

  // XMLHttpRequest.open(Method, URL, Async, User, Pass)
  myRequest.open("GET", apiURL, true);

  // Send The Request
  myRequest.send();
}

getFirstRepo("https://api.github.com/users/ElzeroWebSchool/repos");

// With Promise

const getFirstRepo = (apiURL) => {
  return new Promise((resolve, reject) => {
    let myRequest = new XMLHttpRequest();
    myRequest.onload = function () {
      if (this.readyState === 4 && this.status === 200) {
        resolve(JSON.parse(this.responseText)[0].name);
      } else {
        reject(Error(this.statusText));
      }
    };
    myRequest.open("GET", apiURL, true);
    myRequest.send();
  });
};

getFirstRepo("https://api.github.com/users/ElzeroWebSchool/repos").then(
  (result) => {
    let newElement = document.createElement("div");
    let elementText = document.createTextNode(result);
    newElement.appendChild(elementText);
    document.body.appendChild(newElement);
  },
  (error) => console.log(error)
);
===================================================================		
		Lesson[49]
===================================================================
const myPromise = new Promise((resolve, reject) => {
  let thePosts = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
  resolve(thePosts);
});

myPromise
  .then((result) => {
    console.log(`Total Number Of Posts Is ${result.length} Posts`);
    return result;
  })
  .then((result) => {
    console.log("#".repeat(15));
    console.log(`The First Post Is ${result[0]}`);
    return result;
  })
  .then((result) => {
    console.log("#".repeat(15));
    console.log(`The Last Post Is ${result[result.length - 1]}`);
    return result;
  })
  .then((result) => {
    console.log("#".repeat(15));
    console.log(`Every Page Has 2 Posts`);
    console.log(`Application Has ${result.length / 2} Pages`);
  });
===================================================================
		Lesson[50]
===================================================================
fetch("https://api.github.com/users/ElzeroWebSchool/repos")
  .then((result) => {
    let allRepos = result.json();
    console.log(allRepos);
    return allRepos;
  })
  .then((repos) => {
    console.log(`Total Number Of Repos Is ${repos.length}`);
    return repos;
  })
  .then((repos) => {
    console.log(`First Repo Is ${repos[0].name}`);
    return repos;
  })
  .then((repos) => {
    console.log(`Last Repo Is ${repos[repos.length - 1].name}`);
    return repos;
  })
  .then((repos) => {
    for (let i = 0; i < repos.length; i++) {
      let newElement = document.createElement("div");
      let elementText = document.createTextNode(repos[i].name);
      newElement.appendChild(elementText);
      document.body.appendChild(newElement);
    }
  });
===================================================================
		Lesson[51]
===================================================================
// Promise All

const myFirstPromise = new Promise((resolve, reject) => {
  let connect = true;
  if (connect) {
    resolve("First Promise Resolved");
  } else {
    reject("First Promise Rejected");
  }
});

const mySecondPromise = new Promise((resolve, reject) => {
  let settings = true;
  if (settings) {
    resolve("Second Promise Resolved");
  } else {
    reject("Second Promise Rejected");
  }
});

Promise.all([myFirstPromise, mySecondPromise]).then((result) => {
  console.log(result);
});

// Promise Race

const myFirstPromise = new Promise((resolve, reject) => {
  window.setTimeout(() => {
    resolve("First Promise Resolved");
  }, 50);
});

const mySecondPromise = new Promise((resolve, reject) => {
  window.setTimeout(() => {
    resolve("Second Promise Resolved");
  }, 100);
});

// myFirstPromise.then((result) => console.log(result));
// mySecondPromise.then((result) => console.log(result));

Promise.race([myFirstPromise, mySecondPromise]).then((result) => {
  console.log(result);
});
===================================================================		
		Lesson[52]
===================================================================



