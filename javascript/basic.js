// ----------------- [] -------------- (console)

console.error("Error");
console.table(["one", "two", "three"]);
console.log(
  "Hello form %cjs %cfile",
  "color : red; font-size: 40px;",
  "color: blue; font-size:40px;"
);
// ----------------- [] -------------- (ecma)
var my_name = "Omar";

console.log("Hello " + my_name); // ---> before ecma
console.log(`Hello ${my_name}`); // ---> ecma

// ----------------- [] -------------- (data type)
/*
  Data types
  -- String 
  -- number (integer)
  -- array -> object 
  -- object
  -- boolean
  -- undefined
  -- null -> object
*/

console.log(typeof "OmarKmal"); // => string
console.log(typeof 100); // ==> number
console.log(typeof 10.99); // ==> number
console.log(typeof [1, 2, 3, 4, 5, 5]);
// ==> object --> but in all another programming languages is [array] and the true name is array but in js name is object
console.log(typeof ["Omar", "ahmed", "yasser"]); // object
console.log(typeof { name: "omar", age: 20, country: "egypt" }); // object
console.log(typeof true);
console.log(typeof false); // boolean
console.log(typeof undefined); //undefined
console.log(typeof null); // object

// ----------------- [] -------------- (variables)

/* 

  var 
  - redeclare (Yes)
  - Access before declare (undefined)
  - variable scope drama [added to window object] (Yes)
  - block or function scope 


  let 
  - redeclare (NO => Error)
  - access befor declare (Error)
  - variable scope drama (NO)
  - block or function scope 

  const 
  - redeclare (NO => Error)
  - access before declare (Error)
  - variable scope drama (NO)
  - block or function scope 

*/
// ----------------- [] -------------- (Unary)

/* 
  + Unary plus [return number if its not number]
  - Unary negation [return number if its not number + negetes it]

*/
console.log(100);
console.log(+"100");
console.log(+"1.5");
console.log(+0xff);
console.log(-"100");
console.log(+true); // 1
console.log(+false); // 0
console.log(+null); // 0
console.log(-"-100"); // 100

console.log(Number("200")); // 200
console.log(parseInt("200"));

// ----------------- [] -------------- (coerction)
/*
  type coerction (type casting);
  - + 
  - - 
  - "" 2
  false - true 
*/

let a = "10",
  b = 20,
  c = true;

console.log(a - b);
console.log(true - false);
console.log(false - true);

console.log(+a + b + c);

// ----------------- [] -------------- (Number)
/* 
  Number 
  - double precision
  - syntactic sugar "_"
  - e
  - ** 
  - with decimal
  - Number + bigInt
  - Number min value
  - Number max value 

*/

console.log(1_000_000);
console.log(1e6);
console.log(10 ** 6);
console.log(1000000.0);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MAX_VALUE + 200000); // ! We can't add number to MAX_VALUE becouse this is max value in js
console.log(Number.MAX_VALUE);

// ----------------- [Lesson 24] -------------- (Number)
/*
  Number Methods
  - Two dots to call a methods
  - toString();
  - toFixed();
  - parseInt();
  - parseFloat();
  - isInteger() [ES6];
  - isNaN() [ES6];

*/

function c(a) {
  return console.log(a);
}

c((100).toString());
c((100).toString()); // .. 100..toString();
c((100.5555555).toFixed(2)); // 100.56 -> return string
c(parseInt("100.5 omar")); // parse int if have string (retrun only number) but must the number in the front
c(parseFloat("100.5 omar")); // return float number

c(Number.isInteger("100")); // false => string
c(Number.isInteger(100.5)); // false => float
c(Number.isInteger(100)); // true => number

c(Number.isNaN("oamr")); // false
c(Number.isNaN("omar" / 20)); // true

// ----------------- [Lesson 9] -------------- (Math Object)
/*
  Math Object
  - round()
  - ceil()
  - floor()
  - min()
  - max()
  - pow()
  - random()
  - trunc() [ES6]

*/

console.log(Math.round(99.5)); // if 99.2 -> 99 , if 99.5 -> 100;
console.log(Math.ceil(99.1)); // if 99.(1 to 9) -> 100; go to top
console.log(Math.floor(99.9)); // if 99.(1 to 9) -> 99; go to same
console.log(Math.min(10, 20, 100, -100, 80)); // --> -100
console.log(Math.max(10, 20, 100, -100, 80)); // --> 100
console.log(Math.pow(2, 4)); // power -> 16 === 2 ** 4
console.log(Math.random()); // return random number
console.log(Math.trunc(99.5)); // return just integer without float number if (99.1 to 9) -> 99

// ----------------- [Lesson 27]String ==> -[charAt() - trim() - toLowerCase() - toUpperCase() ]

/* 
  String Methods 
  - access with index
  - access with cahrAt();
  - length
  - trim()
  - toUpperCase();
  - toLowerCase();
  - Chain Methods
*/

let theName = "  Ahmed  ";
let theList = [1, 2, 3, 4, 5];

console.log(theName);

console.log(theName.charAt(5)); // --> not return any thing
console.log(theName[5]); // -> undefined

console.log(theName.length); // 9
console.log(theName.trim()); // clear all spaces after and before
console.log(theName.trim().length); // 5

console.log(theName.toLowerCase()); // lower case
console.log(theName.toUpperCase()); // Upper case

console.log(theName.trim()[2].toUpperCase());

// ----------------- [Lesson 28] String ==> -[indexOf() - lastIndexOf() - slice() - repeat() - split()]

/* [mand] -> required , [opt] -> option
  String Methods
  - indexOf(value [mand] , start [opt] 0);
  - lastIndexOf(value [mand] , start [opt] length)
  - slice(strat [mand] , end [opt] not include end)
  - repeat(times) [ES6];
  - split(separator [opt] , Limit [opt])

*/

let a = "Elzero Web School";

console.log(a.indexOf("Web")); // 7
console.log(a.indexOf("Web", 8)); // -1 becouse position 8 is not have this string

console.log(a.indexOf("o")); // 5 -> the first "o" from index 0 -> is index 5
console.log(a.lastIndexOf("o")); // 15 -> the first "o" from last index -> is index 15

console.log(a.slice(0)); // return all string
console.log(a.slice(2, 10)); // return "zero web" -> start from index 2 to 10 "note //* not including end position"

console.log(a.slice(-5)); // cool
console.log(a.slice(-5, -3)); // ch //* becouse not including the end

console.log(a.repeat(5)); // repeate 5

console.log(a.split()); // return one array -> ["Elzero Web School"]
console.log(a.split("")); // retrun all caractor in array
console.log(a.split(" ")); // split when found space " "; -> ["Elzero" , "Web" , "School"]
console.log(a.split(" ", 2)); // split just 2 only
console.log(a.split("", 6));

// ----------------- [Lesson 29] -------------- (String)

/* 
  String methods 

  - subString(start [mand] , end [opt] Not including end);
  - start  >  end will swap
  - start < 0 it start from 0 
  - use length to get last character 
  - substr(start [mind] , characters to extract)
  - start  >= length = ""
  - negative start from end 
  - inculdes(value [mand] , start [opt] default 0) [ES6]
  - startsWith(value [mand] , start [opt] default 0) [ES6] 
  - endWith(value [mand] , length [opt] default full length) [ES6] 
*/

// ------- [subString]

let a = "Elzero Web School";

// if start bigger than end it will swap (6 , 2) ? will swap to => (2 ,6)
console.log(a.substring(2, 6));

// any negative number will start from 0
console.log(a.substring(-10, 6));

console.log(a.length); // 17

// not retrun any thing becouse index start from 0 and length start from 1 /// to return last value (a.length -1)
console.log(a.substring(17));

//* ------- [substr]

console.log("*".repeat(30));

// return value from index 0 to 6
console.log(a.substr(0, 6));

// if negative will count from last index
console.log(a.substr(-3));

// from index -5 will split 2 character
console.log(a.substr(-5, 2)); // ch

//* ------- [includes]

console.log("*".repeat(30));

// return boolean value
console.log(a.includes("Web"));

//* ------- [startsWith]

console.log("*".repeat(30));

// if a start with charcter E -> boolean
console.log(a.startsWith("E"));

//* ------- [endsWith]

console.log("*".repeat(30));

// if a ends with character l -> boolean
console.log(a.endsWith("l"));

// ----------------- [Lesson 36] -------------- (Logical Or) [ || , ?? ]
/* 
  Logical Or || 
  
  Null + undefined + any falsy value
  nullish coalescing operator ??
  Null + Undefined 

*/

let price = 0;

// || will return if data have null or undefined or any falsy  value
console.log(`The price is ${price || 200}`);

// - ?? will return if data have null or undefined
console.log(`The price is ${price ?? 200}`);

// ----------------- [Lesson 38] -------------- (Switch statement)
/* 
    Switch statement

    switch(expression) {
      case 1:
        code block
        break;
      case 2: 
        code block
        break;
      default: 
        code block
        break;
    }
    - default ordering
    - multiple match
*/

let day = 0;

switch (day) {
  case 0:
    console.log("Saturday");
    break;
  case 1:
    console.log("sunday");
    break;
  case 2:
    console.log("monday");
    break;
  default:
    console.log("no thing");
}

// ----------------- [Lesson 40] -------------- (Array)
/*
  Arrays
  - create arrays [two methods] new Array() + []
  - access arrays elements
  - nested arrays
  - change arrays elements
  - check from array array.isArray(arr);
*/

let myFriends = ["Ahmed", "Mohamed", "Sayed", ["Marwan", "Ali"]];

console.log(`Hello ${myFriends[0]}`);
console.log(`Hello ${myFriends[2][1]}`); // sayed[1] -> a
console.log(`Hello ${myFriends[3][0][1]}`); // ["Marwan", "Ali"][0] -> "Marwan"[1] -> a

myFriends[1] = "Gamal"; // change index 1 to "Gamal"

console.log(myFriends);

myFriends[3] = "Karim"; // change array to "Karim";

console.log(myFriends);

console.log(Array.isArray(myFriends)); // return boolean

// ----------------- [Lesson 41] -------------- (Array methods)
/* 
  Array methods
  - length
*/

let myFriends = ["Ahemd", "Mohamed", "Sayed", "Alaa"];

console.log(myFriends);
console.log(myFriends.length);

myFriends[myFriends.length] = "Gamal";

myFriends.length = 3;

console.log(myFriends);

// ----------------- [Lesson 42] -------------- (String)
/*
  Arrays methods [adding and removing]
  - unshift("" , "") add element to first 
  - push("" ,"") add element to the end
  - shift() remove first element from array 
  - pop() remove last element from array

 */

let myFriends = ["Ahmed", "Mohammed", "Sayed", "Alaa"];

console.log(myFriends);

myFriends.unshift("Osama", "Nabil");

console.log(myFriends);

myFriends.push("Salam", "Faiz");

console.log(myFriends);

myFriends.shift();

console.log(myFriends);

myFriends.pop();

console.log(myFriends);

// ----------------- [Lesson 43] -------------- (String)
/*

  Array methods [search] 

  - indexOf(search element , from index [opt])
  - lastIndexOf(search element , from index [opt])
  - includes(value to find , from index [opt]) [ES6]

  */

let myFriends = ["Ahmed", "Mohammed", "Sayed", "Alaa", "Ahmed"];

console.log(myFriends);

console.log(myFriends.indexOf("Ahmed"));

console.log(myFriends.lastIndexOf("Ahmed"));

console.log(myFriends.includes("Ahmed"));

// ----------------- [Lesson 44] -------------- (String)

/*
  Array methods [sort] 
  - sort(function [opt])
  - reverse 
*/

let myFriends = [10, "Sayed", "Mohammed", "90", 2000, 100, 20, "10", -20, -10];

console.log(myFriends);

console.log(myFriends.sort());
console.log(myFriends.reverse());

// ----------------- [Lesson 46] -------------- (String)
/*
  Arrays methods [Joining]
  -- concat(array , array) => return a new array
  -- join(Seperator)
*/

let myFriends = ["Ahmed", "Sayed", "Osama", "Gamal", "Ameer"],
  myNewFriends = ["Samar", "Sameh"],
  schoolFriends = ["Haytham", "Shady"];

let allFriends = myFriends.concat(myNewFriends, schoolFriends, "Faris", [
  "mohammed",
]);

console.log(allFriends);

console.log(allFriends.join(" | ").toUpperCase());
// ----------------- [Lesson 47 + 48 + 49] -------------- (String)
/*
  Loop
  -- for -> 
            for ([1] [2] [3]){
              // block of code
            }
    [1] -> initial
    [2] -> condition
    [3] -> update

  -- Loop on sequences
*/

for (let i = 0; i < 10; i++) {
  console.log(i);
}

// --------------------

// let myFriends = ["Osama" , "Ahmed" , "Sayed" ,"Farouk" , "Amira"];

// for (let i = 0; i < myFriends.length; i++){
//   console.log(myFriends[i].slice(i, myFriends.length));
// }

// ------------------

let myFriends = [1, 2, "Omar", "Ahmed", "Sayed", "Ali"];
let onlyString = [];
let onlyNumber = [];

for (i = 0; i < myFriends.length; i++) {
  if (typeof myFriends[i] == "string") {
    onlyString.push(myFriends[i]);
  } else if (typeof myFriends[i] == "number") {
    onlyNumber.push(myFriends[i]);
  }
}

console.log(onlyString);
console.log(onlyNumber);
// ----------------- [Lesson 50] -------------- (String)
/*
  Loop
  -- Nested Loops
*/

let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"];
let colors = ["Red", "Green", "Black"];
let models = [2020, 2021];

for (let i = 0; i < products.length; i++) {
  console.log("#".repeat(10));
  console.log("# " + products[i]);
  console.log("#".repeat(10));

  console.log("Colors: ");
  for (let j = 0; j < colors.length; j++) {
    console.log("- " + colors[j]);
  }

  console.log("Models: ");
  for (let m = 0; m < models.length; m++) {
    console.log("- " + models[m]);
  }
}

// ----------------- [Lesson 51] -------------- (String)
/*
  Loop Control
   - break
   - continue
   - label
*/

let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"];
let colors = ["Red", "Green", "Black"];

// for (let i = 0; i < products.length; i++){
//   if (products[i] === "Pen" ) {
//     break;
//   }
//   console.log(products[i]);

// }

// console.log("*".repeat(20))

mainLoop: for (let i = 0; i < products.length; i++) {
  if (typeof products[i] === "number") {
    continue;
  }
  console.log(products[i]);

  nestedLoop: for (let j = 0; j < colors.length; j++) {
    console.log(`- ${colors[j]}`);
    if (colors[j] === "Green") {
      break mainLoop;
    }
  }
}
// ----------------- [Lesson 53] -------------- (String)
/*
  Products Practice
*/

let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "IPhone"];
let colors = ["Red", "Green", "Blue"];

let showCount = 5;

document.write(`<h1>Show ${showCount} product </h1>`);

for (let i = 0; i < showCount; i++) {
  document.write("<div>");
  document.write(`<h3>${i + 1}- ${products[i]}</h3>`);
  document.write("</div>");

  for (let j = 0; j < colors.length; j++) {
    document.write(`<p> - ${colors[j]}</p>`);
  }
  document.write(`<p> - ${colors.join(" | ")}</p>`);
}
// ----------------- [Lesson 54] -------------- (String)
/*
Loop
  - while
*/

let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "IPhone"];
let index = 0;

while (index < 10) {
  console.log(index);
  if (products[index] == undefined) {
    break;
  }
  console.log(products[index]);
  index++;
}
// ----------------- [Lesson 55] -------------- (String)
/*
Loop
  do - while
*/

let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "IPhone"];
let i = 0;

// while (false){
//   console.log(i);
//   i++
// }

do {
  console.log(i);
  i++;
} while (false);

console.log(i);
// ----------------- [Lesson 43] -------------- (String)
