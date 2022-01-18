----------------------
--comment========

//  			single comment
/* .... */		multi line comment
=============================================
varibales -------------- lesson 7
==============================================
var myPrice = 1000,
    mySmallDiscound = 50,
    myMediumDiscound = 100,
    myBigDiscound = 150;


document.getElementById("product").innerHTML = myPrice;
document.getElementById("product1").innerHTML = myPrice - mySmallDiscound;
document.getElementById("product2").innerHTML = myPrice - myMediumDiscound;
document.getElementById("product3").innerHTML = myPrice - myBigDiscound;

---------------------------------------------------------------------------
date type  ===================== lesson 8
----------------------------------------------------------

/*global console, alert*/
/*

Boolean : true , false
Array: ["one","two","three"]
object: {one:"omar" , two:"ahmed"}
string: "omar"
number: 20
undefined ...when variable has no value
Null
NaN = Not a Number
symbol

*/

var one = [ "one" , "two" , "three" ],
    two = {first:"omar",secound:"kmal"},
    three = "omar",
    four = 450;

document.getElementById("product").innerHTML = one;
document.getElementById("product1").innerHTML = two;
document.getElementById("product2").innerHTML = three;
document.getElementById("product3").innerHTML = four;

===================================================================
============== concatintion with js ====== lesson 9 ===============
===================================================================

var myName = "omar",
	age = 26,
	myCountry = "Egypt";

document.getElementById("test").innerHTML =
	
	 "my name is " + myName + "<br>" +
	 "my age is " + age + "<br>"  +
	 "my country is " + myCountry ;


===================================================================
============== output with js ====== lesson 10 ===============
===================================================================

var myName = "omar",
	age = 26,
	myCountry = "Egypt",
	myDiv = document.getElementById("test");

//myDiv.innerHTML = "Hello my name is: " + myName + " and my age is : " + age ;
//document.write("Hello my name is: " + myName + " and my age is : " + age);
//alert("Hello my name is: " + myName + " and my age is : " + age);
//console.log("Hello my name is: " + myName + " and my age is : " + age)

===================================================================
============== operators with js ====== lesson 11 ===============
===================================================================
var myCounter = 1;
alert(myCounter++)

var myCounter = 1;
alert(myCounter--)


===================================================================
============== if condition with js ====== lesson 12 ===============
===================================================================

var ticketPrice = 2000;
if (ticketPrice < 1500){
	console.log("Yes its cheap");
} else {
	console.log("No its expensive");
}

-------------

var yourAge = prompt("whats your age?");
if (yourAge < 18){
	document.getElementById("test").innerHTML =
	"Sorry your age is " + yourAge + " Your are Not Allowed here";
} else {
	document.getElementById("test").innerHTML =
	"Hello your age is " + yourAge + "you are welcome here";
}

-------------------------------------



===================================================================
============== javascript ====== lesson 13 ===============
===================================================================

(!=)			// Not Equal
(!==)			// Not Identical 
(&&)			// And
(||)			// or



===================================================================
============== javascript ====== lesson 15 ===============
===================================================================
function sayHi(){
	"use strict"
	var myName = "omar";
	if (myName == "omar"){
		alert("Hello " + myName + "You are Welcome");
	} else {
		alert("Hello " + myName + " You are Not Welcome");
	}
}

sayHi();



===================================================================
============== javascript ====== lesson 16 ===============
===================================================================

function myAgeInHours(){
	var myAge = 25;
	return myAge * 365 ;

}
var one = myAgeInHours();
document.getElementById("test").innerHTML =
"Your age in days is " + one;




===================================================================
============== javascript ====== lesson 17 ===============
===================================================================

function colect(a,b,c){
	return a * b * c ;
}
document.getElementById("test").innerHTML = colect(20,10,50);


===================================================================
============== javascript ====== lesson 18 =============== Not Running
===================================================================

function convertNumber() { 
	var amount = document.getElementById("dollar").innerHTML.valueOf;
	result = amount, 
	massege = document.getElementById("ma");

	if (amount === "") {
		massege.innerHTML = "this field can't be empty";
	} else if (isNaN(amount)){
		massege.innerHTML = "this field accept Numbers only";
	} else {
		massege.innerHTML = amount + " Dollar is worth " + result + " Riyal";
	}
}

===================================================================
============== javascript ====== lesson 19 ===============
===================================================================

var season = prompt("What's The Best Season For You?");
switch (season) {
	case "winter" :
		alert("winter is too cold");
		break;
	case "summer":
		alert("summer is too hot");
		break;
	case "autunn":
		alert("autunn is very good");
		break;
	case "spring":
	case "morning":
		alert("sprint is amazing");
		break;
	default:
		alert("your don't write a season");
		break;
}

===================================================================
============== javascript ====== lesson 20 ===============
===================================================================
var myName = "omar";
console.log(myName);
function myNameFunc(){
	myName = "ahmed";
	console.log(myName); 
}
console.log(myName);
myNameFunc();12
console.log(myName);


===================================================================
============== javascript ====== lesson 21 ===============
===================================================================

var x = 1;
function test_global(){
	"use strict";
	x = 5;  // globla if he with var will . (local)
	console.log(x);
	function test_child(){
		var clac = x * 5;
		console.log(clac);
	}
	return test_child();
}
test_global();
console.log(x);


------------------------------------------------------------

===================================================================
============== javascript ====== lesson 21 ===============
===================================================================

<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8" />
        <title>first project</title>
        <link rel="stylesheet" href="file_two.css"/>
        <script>function change_me(){
            document.getElementById("test").innerHTML =
            "text from js";
        }
         </script>
   
    </head>
    <body>
        <button onclick="change_me()">change me</button>
        <div id="test">Hello</div>
        <script src="fille_three.js"></script>
    </body>
</html>
================
onclick=""
onload =""
ondblclick =""

===========================================
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8" />
        <title>first project</title>
        <link rel="stylesheet" href="file_two.css"/>
        <script>function one_click(){
            document.getElementById("test").innerHTML =
            "you one click in button";
        }
            function double_click(){
                document.getElementById("test").innerHTML =
                "you double click in button";
        }
         </script>
   
    </head>
    <body>
        <button onclick="one_click()" ondblclick="double_click()">change me</button>
        <div id="test">Hello</div>
        <script src="fille_three.js"></script>
    </body>
</html>
===========================================================================
===================================================================
============== javascript ====== lesson 23 ===============
===================================================================

var my_input = document.getElementById("input"),
	my_div   = document.getElementById("div"),
	//my_button= document.getElementById("button");

my_input,onkeypress = function (){
	"use strict";
	my_div.innerHTML = my_input.value * 3.7;
};

// onkeyup , onkeypress , onkeydown


===================================================================
============== javascript ====== lesson 24 ===============
===================================================================

/* global console , alert , prompet */

var my_div = document.getElementById("div");

my_div.onmouseout = function () {
    "use strict"
    my_div.innerHTML = "you hovered on me"
};
/*  onmouseover 
    onmouseout
*/
===================================================================
    <body>
        <input type="text" id="text"/>
        <select id="one">
            <option value="18">Dollar</option>
            <option value="5">Riyal</option>
            <option value="4">Yin</option>
        </select>
        <div id="div"></div>
        <script src="fille_three.js"></script>
    </body>
==================================================================
/*golobal console,alert,prompt*/
var 

    my_input = document.getElementById("text"),
    my_div = document.getElementById("div"),
    my_one = document.getElementById("one");

my_one.onchange = function () {
    "use strict";
    my_div.innerHTML = my_input.value * my_one.value + " Egyption Pounds";
}; 

===================================================================
============== javascript ====== lesson 25 ===============
===================================================================
============== js code ============================================
===================================================================
var friends = ["Omar","Ahmed","Yasser","Mohammed","Amr","Islam"];

console.log(friends);
===================================================================
============== javascript ====== lesson 26 ===============
===================================================================
============== js code ============================================
===================================================================
var friends = ["Omar","Ahmed","Yasser","Mohammed","Amr","Islam"];
    hello = "ahmed"
console.log(friends);
if(Array.isArray(hello)) {
    console.log("Good This is Array")
}else {
    console.log("This is Not Array")
}


===================================================================
============== javascript ====== lesson 27 ===============
===================================================================
============== js code ============================================
===================================================================

var friends = ["Omar","Ahmed","Yasser","Mohammed","Amr","Islam"];
    hello = "ahmed"
console.log(friends);

var my_variable = "Hello javascript";

console.log(friends.length);        // Get length
console.log(friends);
friends.length = 3;                 // Set length to 3
console.log(friends);


===================================================================
============== javascript ====== lesson 28 ===============
var friends = ["Omar","Ahmed","Yasser","Mohammed","Amr","Islam"];

console.log(friends);
friends = friends.toString(); // Convert it to string
console.log(friends);

var my_date = new Date(),
    my_string = my_date.toLocaleString();

console.log(my_date);
console.log(my_string)
------------------------------------
var friends = ["Omar","Ahmed","Yasser","Mohammed","Amr","Islam"];

console.log(friends);
friends = friends.join("-");
console.log(friends);

===================================================================
============== javascript ====== lesson 29 ===============
===================================================================
============== js code ============================================
===================================================================

var friends = ["Omar","Ahmed","Yasser","Mohammed","Amr","Islam","mohammed"];

console.log(friends);

friends.push("Nada");   // add value in the last index
console.log(friends);
----------------------------------
var friends = ["Omar","Ahmed","Yasser","Mohammed","Amr","Islam","mohammed"];

console.log(friends);

friends.push("Nada");   // add value in the last index
console.log(friends);
--------------------------------------
var friends = ["Omar","Ahmed","Yasser","Mohammed","Amr","Islam","mohammed"];

console.log(friends);

friends.splice(3,2); // From index 3 remove 2 vlaue

console.log(friends);

-------------------------------
var friends = ["Omar","Ahmed","Yasser","Mohammed","Amr","Islam","mohammed"];

console.log(friends);

friends.splice(2,0,"fozy"); // add a vlaue in index 2 without remove
console.log(friends);



===================================================================
============== javascript ====== lesson 30 ===============
===================================================================
var friends = ["Omar","Ahmed","Yasser","Mohammed","Amr","Islam","mohammed"];

console.log(friends);

friends.splice(2,4);
console.log(friends);
-------------------------
var friends = ["Omar","Ahmed","Yasser","Mohammed","Amr","Islam","mohammed"];

console.log(friends);

friends.pop();  // Remove last value in Array
console.log(friends);

var last_item = friends.pop();

console.log(last_item);
--------------------------
var friends = ["Omar","Ahmed","Yasser","Mohammed","Amr","Islam","mohammed"];

console.log(friends);

friends.shift();  // Remove first value in Array
console.log(friends);

var last_item = friends.shift();

console.log(last_item); 
===================================================================
============== javascript ====== lesson 31 ===============
===================================================================
var friends = ["Omar","Ahmed","Yasser","Mohammed","Amr","Islam","mohammed"];

console.log(friends);
 
friends.sort();
console.log(friends);
friends.reverse();
console.log(friends);

===================================================================
============== javascript ====== lesson 32 ===============
===================================================================
var friends = ["Omar","Ahmed","Yasser","Mohammed","Amr","Islam","mohammed"];

console.log(friends);

var my_sliced_Array = friends.slice(1,5);   //cut from 1 to 5 

console.log(my_sliced_Array);

-----------------------
var friends = ["Omar","Ahmed","Yasser","Mohammed","Amr","Islam","mohammed"];

console.log(friends);

var my_sliced_Array = friends.slice(1,5);   //cut from 1 to 5 

console.log(my_sliced_Array);

var other_frinends =["saleh" , "ahmed","Norham"];

var all_friends = friends.concat(other_frinends);

console.log(all_friends);
===================================================================
============== javascript ====== lesson 33 ===============
===================================================================
============== Html code  =========================================
===================================================================
        <div id="all"></div>
        <div id="spechial"></div>
        <script src="fille_three.js"></script>
===================================================================
============== js code ============================================
===================================================================

var friends = ["Hassen", "Ahmed", "Mohammed", "Sayed", "Hind", "Salma", "Sameh","Ali"];

var Spechial_friend = friends.lastIndexOf("Salma",8);
console.log(Spechial_friend);

document.getElementById("all").innerHTML = "my friends are " + friends;

document.getElementById("spechial").innerHTML = "my spechial friends is "+ "<span style='color:#00f'>" + friends[Spechial_friend] + "</span>";

// indexof("valeu To search", Starting Index);

===================================================================
============== javascript ====== lesson 34 ===============
===================================================================
/*
var my_massage = ["Wellcom", "to", "javascrit"];

if (Array.isArray(my_massage)){
    console.log("Yes this is Array");
} else {
    console.log("No this is Not Array");
}
*/
/*
var my_massage = [
    "msg1",
    "msg2",
    "msg3",
    "msg4",
];

console.log(my_massage.length);
console.log(my_massage);

my_massage.length = 2;
console.log(my_massage)
*/
/*
var my_massage = [
    "msg1",
    "msg2",
    "msg3",
    "msg4",
];

console.log(my_massage);
console.log(my_massage.toString());
*/


/*
var my_date = new Date();
    my_string = my_date.toString();

console.log(my_string);
console.log(my_date.toLocaleString());
*/

/*
var my_massage = [
    "msg1",
    "msg2",
    "msg3",
    "msg4",
];

console.log(my_massage.join("-"));
*/  



/*
var my_massage = [
    "msg1",     // 0 index 1 in length
    "msg2",     // 1 index 2 in length
    "msg3",     // 2 index 3 in length
    "msg4",     // 3 index 4 in length
];

console.log(my_massage);
//my_massage[my_massage.length] = "msg5";
my_massage.push("msg5");
my_massage.unshift("msg0");
my_massage.splice(1,0,"msg2");
console.log(my_massage);
*/

/*
var my_massage = [
    "msg2",     // 0 index 1 in length
    "msg1",     // 1 index 2 in length
    "msg3",     // 2 index 3 in length
    "msg4",     // 3 index 4 in length
];

console.log(my_massage);

//my_massage.splice(2,2);

//my_massage.pop();
//my_massage.shift();

my_massage.sort();
console.log(my_massage);
my_massage.reverse();
console.log(my_massage);

*/

var my_massage = [
    "msg1",     // 0 index 1 in length
    "msg2",     // 1 index 2 in length
    "msg3",     // 2 index 3 in length
    "msg4",     // 3 index 4 in length
];

console.log(my_massage.slice(1));


============== javascript ====== lesson 35 ===============
===================================================================
/*  var my_string = "I love javascript";

 console.log(my_string);
 console.log(typeof(my_string));

 console.log(my_string.length);
 */
 var my_number = 100;

 console.log(typeof(my_number));

 var my_new_number = my_number.toString();

/*  Or 
 var my_new_number = String(my_number);
 */
 console.log(my_new_number);
 console.log(typeof(my_new_number));

===================================================================
============== javascript ====== lesson 36 ===============
===================================================================
/* 
    Syntax: indexOf(Value,Start Position) // Default = 0
    Syntax: lastIndexOf(Value,Start Position) // Default = 0
    Syntax: search(value);
*/
var my_string = "I'm In Love With Javascript And In Love With Php",
    my_word   = my_string.search("Love");

console.log(my_word);

===================================================================
============== javascript ====== lesson 37 ===============
===================================================================
/* Split : split( Separator , Limit) */

/* var my_main_string = "I Love Javascript And JSON",
    my_splitted_string = my_main_string.split(" ",3);

console.log(my_splitted_string);
console.log(typeof(my_splitted_string)) */ // convert to list

/* var my_main_string = "I Love Javascript And JSON",
    my_sliced_string = my_main_string.slice(22);

console.log(my_main_string);
console.log(typeof(my_main_string));
console.log(my_sliced_string);
console.log(typeof(my_sliced_string)); 
 */
/* slice : slice(start[required], end [optional]) */

// ==========================================================

/* var my_main_string = "I Love Javascript And JOSN",
    my_sub_string  = my_main_string.substr(7,12);

console.log(my_main_string);
console.log(typeof(my_main_string));
console.log(my_sub_string);
console.log(typeof(my_sub_string));
 */
// Substr : substr(start [required],length [optional]);

// ================================================================

var my_main_string = "I Love Javascript And JSON",
    my_sub_string  = my_main_string.substring(19,7); // => substr(7,19) 

console.log(my_main_string);
console.log(typeof(my_main_string));
console.log(my_sub_string);
console.log(typeof(my_sub_string));

// substring : substring(start [required], end [optional]) . if the start is biger than end he is swap autoumatic
===================================================================
============== javascript ====== lesson 38 ===============
===================================================================
/* var my_string = "I Love Javascript Too Much",
    //my_char   = my_string.charAt(2);                // select The secound charcter
    my_char   = my_string.charAt(my_string.length-1);   // select the last charcter 
console.log(my_string);
console.log(my_char); */

// ================================================

/* var my_string = "I Love Javascript Too Much",
    my_char   = my_string.charCodeAt(2);            // utf-8   (L) htmlcode 76

console.log(my_string);
console.log(my_char); */

// ================================================

/* var my_string = "I Love Javascript Too Much",
    my_replace = my_string.replace("Javascript","Php");     // replace the value => replace(value , new value);

console.log(my_string);
console.log(my_replace);
 */

// ================================================

var my_string = "I Love Javascript Too Much Javascript Is very fun",
    my_replace = my_string.replace(/Javascript/g,"Php");     // replace with regular exeprtion
console.log(my_replace);


===================================================================
============== javascript ====== lesson 39 ===============
===================================================================
/* 
    string.fromCharCode(num,num2,num3,num4);
*/

/* var message =" String.fromCharCode(79,77,65,82);             // print OMAR with uni code
console.log(message);
 */
// =========================================================

/* var my_message  = "Hello I Love",
    my_message2 = "Php And Javascript",
    my_all      = my_message.concat(" ",my_message2," And python");
     */

    var my_all  = "Hello I Love".concat(" ","Php And Javascript"," And Python");            // short code
console.log(my_all);

// =========================================================

===================================================================
============== javascript ====== lesson 40 ===============
===================================================================
/* var my_string   = "I Love Js",
    my_small_string = my_string.toLowerCase();              // convert to lower case 

console.log(my_string);                                     // upper case 
console.log(my_small_string);                               // lower case
 */

//  ================================================================

var my_string   = "i love js",
    my_small_string = my_string.toUpperCase();              // convert to upper case 

console.log(my_string);                                     // lower case 
console.log(my_small_string);                               // upper case
===================================================================
============== javascript ====== lesson 41 ===============
===================================================================
/* var my_string   = "                 Hello Iam Omar                  ",
    my_new_string = my_string.trim();                           // clear the white space like space and tap

console.log(my_string);
console.log(my_new_string); */

// =======================================================

/* var my_string = "Google";

console.log("Go To google by this link => " + my_string.link("http://www.google.com")); */

// =======================================================

mdn and w3school
===================================================================
============== javascript ====== lesson 42 ===============
===================================================================
/* var my_number = 120,
    my_string = my_number.toString();

console.log(my_number);
console.log(my_string);

var my_new_number = my_string.replace(2,3);
console.log(my_new_number);

var my_last_number = my_new_number.split("");

console.log(my_last_number); */


// Short code .......


var my_number = 120,
    my_string      = my_number.toString().replace(2,3).split("");

console.log(my_number);
console.log(my_string);
===================================================================
============== javascript ====== lesson 43 ===============
===================================================================
/* var my_string = "I love programming languages";

console.log(my_string.length);
 */


/* var my_string = 120,
    my_new_string = String(my_string);                              // convert number to string
console.log(my_new_string);
console.log(typeof(my_new_string));
console.log(my_string); */


/* var my_string = "I love programming languages";
    my_search = my_string.indexOf("s");                             // indexOf(string , position);

console.log(my_search);
 */


/* var my_string = "I love programming languages",
    my_search = my_string.lastIndexOf("l",10);                      // search from last to start  (THE IDEX IS STABLE);

console.log(my_search); */



/* var my_string = "I love programming languages",
    my_search = my_string.search("l");                      

console.log(my_search); */



/* var my_string = "I love programming languages",
    my_search = my_string.split("",4);                               // convert "l" to ","   split(string , limit)

console.log(my_search);
 */


/* var my_string = "I love programming languages",
    my_search = my_string.slice(2,7);                               // slice(start,end);  cut some specify string

console.log(my_search);

 */


var my_string = "I love programming languages",
my_search = my_string.substr(2,10);                                 // substr(start,limit);

console.log(my_search);


===================================================================
============== javascript ====== lesson 44 ===============
===================================================================
var friends = ["Ahmed" , "Sayed" , "Mahmoud", "Kamel"],
    i;
for (i = 0; i < friends.length; i +=2){
    console.log(friends[i]);
}
===================================================================
============== javascript ====== lesson 45 ===============
===================================================================
var my_car = {
    color: "white",
    type : "sedan",
    price: "50.000",
    model: "2015"
};
console.log(my_car.type);

var prop;
for (prop in my_car){
    if (my_car.hasOwnProperty(prop)){
        console.log(prop + ": " + my_car[prop]);
    }
}
===================================================================
============== javascript ====== lesson 46 ===============
===================================================================
/* var i = 0;

for (;;) {
    if (i > 10) break;
    console.log(i);
    i++;
} */

/* function generate_years(start,end){
    "use strict";
    var years;
    document.write("<select>");
    for (years = start; years <= end; years++){
        document.write("<option value='"+ years + "'>" + years + "</option>");
    }
    document.write("</select>");
}
generate_years(1994 , 2020);
generate_years(2000,2020);
generate_years(1,1000); */
===================================================================
============== javascript ====== lesson 47 ===============
===================================================================
/* 
            Syntax while: 

            while ( condition ) {
                Statement

            }

*/
/* var i = 0;
while (i <= 10) {
    console.log(i);
    i++
} */

/* function generate_yeares (start , end) {
    "use strict";
    var years = start;
    document.write("<select>");
    while (years <= end) {
        document.write("<option value =\"" + years + "\">" +years + "</option>");
        years ++;
    }
    document.write("</select>");
}
generate_yeares(1900 , 2015);
generate_yeares(1950 , 2010);
generate_yeares(2000,2012); */



/* var i = 0;
do {
    console.log(i);
    i++
} while (i <= 10);
 */






function generate_yeares (start , end) {
    "use strict";
    var years = start;
    document.write("<select>");
    do {
        document.write("<option value =\"" + years + "\">" +years + "</option>");
        years ++;
    } while (years <= end);
    document.write("</select>");
}
generate_yeares(1900 , 2015);
generate_yeares(1950 , 2010);
generate_yeares(2000,2012); 
===================================================================
============== javascript ====== lesson 48 ===============
===================================================================
/* var i;

for (i = 1; i < 10; i++){
    if (i === 4){
        break;                                              // stop when you show number 4
    }
    console.log(i);
}
 */
/* var i;

for (i = 1; i < 10; i++){
    if (i === 4){
        continue;                                               // skip number 4
    }
    console.log(i);
}
 */

var i , x ;
MainLoop:
for (i = 1; i < 5; i++){
    ChildLoop:
    for (x = 15; x < 20; x++){
        if (x === 17){
            continue ChildLoop;         // Or ChildLoop:
        }
        console.log(i +"=> "+ x);
    }
}
===================================================================
============== javascript ====== lesson 49 ===============
===================================================================
/*  var i = 0;
 for (;;){
     if (i > 10){
         break;
     }
     console.log(i);
     i++;
 } */

/* var my_car = {
    name: "Toyota",
    type: "Car",
    color: "Red"
};

var prop;
for (prop in my_car){
    if (my_car.hasOwnProperty(prop))
    console.log(my_car[prop]);
} */

/* var i = 0;
while (i <= 10){
    console.log(i);
    i++;

} */

/* var i = 0;
do {
    console.log(i);
    i++;
}while(i <= 10); */


/* var i , x;
MainLoop:
for (i = 0; i < 5; i++){
    ChildLoop:
    for (x = 10; x < 15; x++){
        if (x === 13){
            break ChildLoop;        // Or contunie , or MainLoop
        }
        console.log(i + "=> "+ x);

    }
} */


===================================================================
============== javascript ====== lesson 50 ===============
===================================================================
var x = Math.ceil(8.3);             // تفريب للرقم الاعلي دائما
console.log(x);

//__________________________________________________________


===================================================================
============== javascript ====== lesson 51 ===============
===================================================================
var x = Math.floor(8.9);  // تقريب الي القيمه الاصعر دائما
console.log(x);
===================================================================
============== javascript ====== lesson 52 ===============
===================================================================
var x = Math.round(2.6);             //   التقريب بالطريقه الصحيحه
console.log(x);


===================================================================
============== javascript ====== lesson 53 ===============
===================================================================
var x = Math.min(200,100,50,20,10,-20,-120,100.200);
console.log(x);


var x = Math.max(200,100,50,20,10,-20,-120,100.200);
console.log(Math.ceil(Math.round(x) + 10.5));
===================================================================
============== javascript ====== lesson 54 ===============
===================================================================
var x = Math.random();
console.log(x);
//-------------------------------------
var x = Math.random();
console.log(x * 20);
//-------------------------------------
var x = Math.random();
console.log(Math.floor((x * 10 + 1))); 
//------------------------------------
var x = Math.random(),
    my_end_pattern = 1000;

console.log(Math.floor((x * my_end_pattern) + 1));
===================================================================
============== javascript ====== lesson 55 ===============
===================================================================
//[ i ] => case insensitive // عدم حساسيه الاحرف
//[ g ] => Global search   // search and change in all syntax
//[ m ] => multi line search

var string = "I Love Elzero Web School",
    search = string.replace(/L/gi,"@");

console.log(search);
===================================================================
============== javascript ====== lesson 56 ===============
===================================================================
//[ i ] => case insensitive // عدم حساسيه الاحرف
//[ g ] => Global search   // search and change in all syntax
//[ m ] => multi line search

var string = "I Love Elzero Web School",
    search = string.replace(/L/gi,"@");

console.log(search);
===================================================================
============== javascript ====== lesson 57 ===============
===================================================================
//[ i ] => case insensitive // عدم حساسيه الاحرف
//[ g ] => Global search   // search and change in all syntax
//[ m ] => multi line search
//Brackets use
//[...] Charactcer
//[^...] Not chararacter
//[a-e] Range small letters
//[A-Z] range capital letters
//[0-9] range Numbers
//[^0-9] Not range numbers
//[A-g] = range [A-Z] and range[a-g]
//[0-9a-z] double range

var string = "1234567890ABCDEFGHIJKabcdefghijk"
    search = string.replace(/[0-9a-z]/g,"@");

console.log(search);
===================================================================
============== javascript ====== lesson 58 ===============
===================================================================
//[ i ] => case insensitive // عدم حساسيه الاحرف
//[ g ] => Global search   // search and change in all syntax
//[ m ] => multi line search
//Brackets use
//[...] Charactcer
//[^...] Not chararacter
//[a-e] Range small letters
//[A-Z] range capital letters
//[0-9] range Numbers
//[^0-9] Not range numbers
//[A-g] = range [A-Z] and range[a-g]
//[0-9a-z] double range
// Quantifiers
/* Letter+ => word contain one letter
   Letter{number} => word contain number of letter
   Letter{number , number} => word contain number or number 
   Letter{number,} => word containt at least
*/


/* var string = "I Love Elzeero Weeeb School"
    search = string.replace(/e{2,3}/gi,"@");

console.log(search); */

var string = "I Love Elzeero Weeeb School"
    search = string.replace(/e{3,}/gi,"@");

console.log(search);
===================================================================
============== javascript ====== lesson 59 ===============
===================================================================
/*
    new Date();   // print current Date and Time
    new Date(millseconds); // print millseconds from utc 1 jan 1970 00:00:00
    new Date(Date string): can add date string
    new Date(Year , month, day[hour , minutes , second , millseconds])
*/

var the_date = new Date(1994,11,16);
console.log(the_date)
===================================================================
============== javascript ====== lesson 60 ===============
===================================================================
/*
    Full format
    long format
    short format
    iso format


    Js igone commas 
    js month insensitive 
    [month day year] or [year month day]

*/

var the_date = new Date("");
console.log(the_date);
===================================================================
============== javascript ====== lesson 61 ===============
===================================================================
 /*
    getDate() // day of the month 1-31
    getDay()  // day of the week 0-6
    getFullYear() // get the full year
    getHours()      //get hours 0-59        or getUTCHours()   world time
    getMinutes()    // get minutes 0-59
    getSeconds()    // get seconds 0-59
    getMillseconds() //get milliseconds 0-999
    getTime()       // number of milliseconds from 1970 or specific Date
    getTimezoneOffset() // Get def between utc & Your Localtime
 */

 var my_date = new Date(),
    the_day = my_date.getUTCHours();

console.log(the_day)
===================================================================
============== javascript ====== lesson 62 ===============
===================================================================
/*
   now()
   parse()        // chose specify date
   toISOString()
   toDateString()
   toTimeString()
*/

/* var the_date = new Date(),
   now = Date.parse("20 nov 1994");
   min = 1000 * 60,
   hours = min * 60,
   day = hours * 24,
   month = day * 30,
   year = month * 12;

console.log(now / year); */

var the_date = new Date();
   my
console.log(the_date);

