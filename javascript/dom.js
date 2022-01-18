// * ======================================================================================
// * =============================== Lesson (1) ===========================================
// * ======================================================================================
/*
    [1]- document.getElementById();
    [2]- document.getElementsByTagName();
    [3]- document.getElementsByClassName();
    [4]- document.querySelectorAll();
*/

//-----------------------------------------------------


/* var my_div = document.getElementById("test");
my_div.innerHTML = "Changed by javascript"; */


//-----------------------------------------------------

/* var my_Element = document.getElementsByTagName("p");
my_Element[0].innerHTML = "Changed by javascript";
my_Element[1].innerHTML = "changed by javascript"; */

//-----------------------------------------------------

/* var my_Element = document.getElementsByClassName("test");
my_Element[0].innerHTML = "Changed by javascript";
 */

//-----------------------------------------------------

/* var my_Element = document.querySelectorAll("p.test");                    // Or div.test
my_Element[0].innerHTML = "Changed by java script";
 */

//-----------------------------------------------------

// * ======================================================================================
// * =============================== Lesson (2) ===========================================
// * ======================================================================================
// html
// --------------------------------

        // <div id="show"></div>
        // <img src="http://www.placehold.it/100/100" />
        // <img src="http://www.placehold.it/320/ddd" />
        // <img src="http://www.placehold.it/300/eee" />
        // <img src="http://www.placehold.it/200/ccc" />

// ==============================


// * ======================================================================================
// * =============================== Lesson (3) ===========================================
// * ======================================================================================
/*
    document.title;
    document.images;
    document.forms;
*/


 
var my_div = document.getElementById("show");
my_div.innerHTML = document.title; 


 
var my_div = document.getElementById("show");
my_div.innerHTML = document.images[1].src;

//Or

for (i = 0; i < document.images.length; i++){
    document.write(document.images[i].src + "<br>");
}

// ---------------------------------------------------------

 var my_div = document.getElementById("show");
my_div.innerText = document.forms[0].x2.value ;

 var my_div = document.getElementById("show");
my_div.innerText = document.forms[1].z1.type; 


// * ======================================================================================
// * =============================== Lesson (4) ===========================================
// * ======================================================================================

/*
    document.title;
    document.images;
    document.forms;
    document.body;
    document.anchors            xxxx not supported
    document.links;
*/


// --------------------------------------------------

 var my_div = document.getElementById("show");
my_div.innerText = document.body.innerText;         // or .innerHTML

if (document.body.innerText.indexOf("z") > -1){
    console.log("Yes this string is exsist");
}else{
    console.log("No this string is not exsist");
} 

//===================================================
 
var my_div = document.getElementById("show");
my_div.innerText = document.links.length; 
// * ======================================================================================
// * =============================== Lesson (5) ===========================================
// * ======================================================================================
/*
    innerText  //not stander
    outerText  // not stander

            // Stander
    innerHtml           .. all content in html selector
    outerHtml
    textContent         .. only content in html selector

    // Get HTML content
    Element.innerHTML

    // Get Text content
    Element.textContent
*/
var my_div = document.getElementById("main");
my_div.innerHTML;
// And 
my_div.textContent;             // run in browser console
// * ======================================================================================
// * =============================== Lesson (6) ===========================================
// * ======================================================================================
/*         HTML CODE
        <div id="" class="">This is div 1</div>
        <div id="" class="">This is div 2</div> */

/* my_div = document.querySelector("div");
my_div.id = "id-from-js";                       // Change id from js
my_div.className = "class-from-js"              // Change class from js 
 */

 //-----------------------------------------------
// <img src="" alt=""/>

my_image = document.querySelector("img");
my_image.src = "http://placehold.it/200/eee";          // change src 
my_image.alt = "photo";                                 // change alt
my_image.title = "title";                              // add title to attribute

// myImage.className;       // get
// myImage.className = ""   // set
// * ======================================================================================
// * =============================== Lesson (7) ===========================================
// * ======================================================================================
my_image = document.querySelector("img");
my_image.alt;           // Get alt Attribute;
my_image.getAttribute("alt");   

//----------------

my_image.src;
my_image.getAttribute("src");           // all is run in browser console
//======================

my_image.setAttribute("src","http://placehold.it/100/eee");
my_image.setAttribute("alt","this text changed form js");
my_image.setAttribute("title","this is my title");

// * ======================================================================================
// * =============================== Lesson (8) ===========================================
// * ======================================================================================
/*  hasAttribute();
 removeAttribute(); */

 var my_image = document.querySelector("img");
if (my_image.hasAttribute("alt")){
    console.log("ok this have alt");
}else{
    my_image.setAttribute("alt","default");
} 

//--------------removeAttribute-----------------------

 var my_image = document.querySelector("img");
if (my_image.hasAttribute("alt")){
    if (my_image.alt === ''){
        my_image.removeAttribute("alt");
}
}
 

// * ======================================================================================
// * =============================== Lesson (9) ===========================================
// * ======================================================================================
<div id="main" class="show coll main-div"></div>


var my_div = document.getElementById("main");
//console.log(my_div.classList)
 if (my_div.classList.contains("coll")){
    console.log("yes")
} 

console.log(my_div.classList.item(2));
// * ======================================================================================
// * =============================== Lesson (10) ===========================================
// * ======================================================================================
var my_div = document.getElementById("main");
my_div.className += " test";


// ADD CLASS
 
var my_div = document.getElementById("main"),
   my_button = document.querySelector("button");

my_button.onclick = function () {
    "use strict"
    my_div.classList.add("js", "css","html");
} 


// REMOVE CLASS

 var my_div = document.getElementById("main"),
   my_button = document.querySelector("button");

my_button.onclick = function () {
    "use strict"
    my_div.classList.remove("js" , "css","html1")
} 


// toggle class

var my_div = document.getElementById("main"),
   my_button = document.querySelector("button");

my_button.onclick = function () {
    "use strict"
    my_div.classList.toggle("css")
}

// toggle: if he has class he will remove or add if he has'nt
// ---------------------------------------------
//         <style>
//             .hidden {
//                 visibility: hidden;
//             }
//         </style>
//         <div id="out-text" class="hidden">This is our text</div>
//         <button>Show/hide Text</button>
// -----------------------------------------------------

var my_div = document.getElementById("out-text"),
    my_button = document.querySelector("button");

my_button.onclick = function(){
    'use strict';
    my_div.classList.toggle("hidden")
}


// * ======================================================================================
// * =============================== Lesson (11) ===========================================
// * ======================================================================================
/*
    my_div.children.length          // print the count of element
    my_div.children                 // print the element
    my_div.childElementCount        // print count of element
    children[1].textContent         // print the content
    children[0].className           // print the class Name
    ---------------
    childNodes.length               // print the count
    childNodes                      // print all element and text and comment
*/

 var my_div = document.getElementById("main");
console.log(my_div.children[1].textContent); 


// -----------------------------------------------------

var my_div = document.getElementById("main");
console.log(my_div.childNodes);


// * ======================================================================================
// * =============================== Lesson (12) ===========================================
// * ======================================================================================


/*
    firstChild          // print the first text Node 
    firstElementChild   // print the first Element Node 
    lastChild           // print the lastt text Node
*/

var my_div = document.getElementById("main");
console.log(my_div.lastChild);


// * ======================================================================================
// * =============================== Lesson (13) ===========================================
// * ======================================================================================


var myMainDiv = document.getElementById("main"),

    myNewElement = document.createElement("div"),

    myText = document.createTextNode("Hello from javascript"),

    myNewP = document.createElement("p"),

    textP  = document.createTextNode("this is p from javascript");

// append text to the new element

myNewElement.appendChild(myText)

// append the new element to main div

myMainDiv.appendChild(myNewElement);

myNewP.appendChild(textP);

myMainDiv.appendChild(myNewP);


// * ======================================================================================
// * =============================== Lesson (14) ===========================================
// * ======================================================================================

<div id="main">
    <p>This is our html p</p>
</div>
        
var myMainDiv = document.getElementById("main"),

    myNewElement = document.createElement("div"),

    myText = document.createTextNode("Hello from javascript"),

    myNewP = document.createElement("p"),

    textP  = document.createTextNode("this is p from javascript");

// append text to the new element

myNewElement.appendChild(myText)

// append the new element to main div

myMainDiv.insertBefore(myNewElement,myMainDiv.firstElementChild);       // set the element on the first

myNewP.appendChild(textP);

myMainDiv.insertBefore(myNewP,myMainDiv.childNodes[2]);                // select the place of the element
// * ======================================================================================
// * =============================== Lesson (15) ===========================================
// * ======================================================================================
/*
    removeChild
    

*/

var myMainDiv = document.getElementById("main");

//myMainDiv.removeChild(myMainDiv.firstElementChild);
        //Or
        
myMainDiv.removeChild(myMainDiv.childNodes[1])
// * ======================================================================================
// * =============================== Lesson (16) ===========================================
// * ======================================================================================
        <div id="main">
            First Text 
            <p>This is our html p</p>
            secound text 
            <div>This is our html div</div>
            third text 
            <p>This is our html p</p>
            last text 
        </div>


// childNodes  -- nodeName -- tagName -- nodeValue -- nodeType

// var my_div = document.getElementById("main");
// console.log(my_div.childNodes[3].nodeValue);

//console.log(my_div.childNodes[3].firstChild.nodeValue);
// Or
//console.log(my_div.childNodes[3].childNodes[0]);

/*
    my_div = The main parent div
    childNodes[3] = <div>This is our html div </div>
    childNodes[0] = first child of <div>This is our html div </div>
*/

var my_div = document.getElementById("main");
console.log(my_div.childNodes[3].childNodes[0].nodeType);               
// * ======================================================================================
// * =============================== Lesson (17) ===========================================
// * ======================================================================================
        <div id="main">
            <p>This is our main p</p>
        </div>
        <div id="new">
            
        </div>


var my_main_div = document.getElementById("main"),
    my_new_div  = document.getElementById("new"),
    
    // clone The node and save in variable

    my_clone    = my_main_div.firstElementChild.cloneNode(true);

    // Insert this copy inside the new element
    
my_new_div.appendChild(my_clone);
// * ======================================================================================
// * =============================== Lesson (18) ===========================================
// * ======================================================================================
var myMainDiv       = document.getElementById("main"),
    myButton        = myMainDiv.firstElementChild;

//console.log(myButton.parentNode)                    // get the parent Node

myButton.onclick = function(){
    "use strict";
    this.parentNode.style.display = "none";             //  بيجيب الأب بتاع البوتوم ويديله خصائص معينه
};

console.log(myMainDiv.parentElement.tagName);          // get the name of the parent of the element

if (myMainDiv.parentElement.tagName === "BODY"){
    console.log("This element has parent Body");
};
// * ======================================================================================
// * =============================== Lesson (19) ===========================================
// * ======================================================================================
 /* var myMainDiv = document.getElementById("main");

console.log(myMainDiv.childNodes[1].nextSibling);               // get the next node
console.log(myMainDiv.childNodes[2].nextElementSibling);        // get the next element node        ** use the children بدالها

myMainDiv.childNodes[1].nextElementSibling.textContent = "Changed"; */

var myMainDiv = document.getElementById("main");

console.log(myMainDiv.childNodes[1].previousSibling);               // get the previous node
console.log(myMainDiv.childNodes[2].previousElementSibling);        // get the previous element node        ** use the children بدالها

myMainDiv.childNodes[1].nextElementSibling.textContent = "Changed";
// * ======================================================================================
// * =============================== Lesson (20) ===========================================
// * ======================================================================================
        <form id="main">
            <input type="text" id="myInput"/>
            <button>Remove focus</button>
        </form>
        
        
var myMainDiv = document.getElementById("main");
window.onload = function(){
    "use strict";
    document.getElementById("myInput").focus();
};

document.getElementById("myInput").onclick = function (){
    "use strict";
    this.blur();
}
// * ======================================================================================
// * =============================== Lesson (21) ===========================================
// * ======================================================================================
				// Not working
// * ======================================================================================
// * =============================== Lesson (23) ===========================================
// * ======================================================================================
var myMainButton = document.getElementById("main"),
    myPower     = document.getElementById("power");


myMainButton.onclick = function (){
    "use strict";
    document.getElementById("monster1").style.display = "none";
}

myPower.onclick = function (){
    "use strict";
    myMainButton.addEventListener("click",function(){
        document.getElementById("monster2").style.display = 'none';
    })
}
--------------------------------
var myMainButton = document.getElementById("main"),
    myPower     = document.getElementById("power");


function makePower(){
    "use strict";
    document.getElementById('monster2').style.display = 'none';
};
myMainButton.onclick = function (){
    "use strict";
    document.getElementById("monster1").style.display = "none";
};

myMainButton.addEventListener("click",makePower);

// * ======================================================================================
// * =============================== Lesson (24) ===========================================
// * ======================================================================================
var myMainDiv = document.getElementById("main"),
    myChild   = document.getElementById("myChild");

if (myMainDiv.contains(myChild)){		// y7toy 3la
    myChild.textContent = "Changed from js";
}
// * ======================================================================================
// * =============================== Lesson (25) ===========================================
// * ======================================================================================
        <style>
            #main{
                height: 50px;
                padding: 20px;
                background-color: #eee;
                margin: 20px;
                border: 10px solid#ccc;
                overflow:
            }
        </style>
    </head>
    <body>
        <div id="main">
            My Main Div 
        </div>
        
        
        /*
    Viewable Area
    Include Padding
    No border 
    No margin

*/
var myMainDiv = document.getElementById("main");
console.log(myMainDiv.clientHeight + "px");
// * ======================================================================================
// * =============================== Lesson (26) ===========================================
// * ======================================================================================
        <style>
            #main{
                width:300px;
                height: 300px;
                padding: 20px;
                background-color: #eee;
                margin: 20px;
                border: 10px solid#ccc;
                overflow:scroll;
            }
            .child{
                height: 800px;
                width: 800px;
                background-color:#fff;
                color:#ddd
            }
        </style>
    </head>
    <body>
        <div id="main">
            <div class="child">
                Child div
            </div>
        </div>
/*
clientHeight:                           elmsa7a ally byshofha el 3amil
    Viewable Area
    Include Padding
    No border 
    No margin

scrollHeight:
    All area include invisible area         elmkan elm5fy
    include padding
    no border
    no margin

*/
var myMainDiv = document.getElementById("main");
console.log(myMainDiv.scrollHeight + "px");
console.log(myMainDiv.scrollWidth+ "px");
// * ======================================================================================
// * =============================== Lesson (27) ===========================================
// * ======================================================================================
        <style>
            #main{
                width:300px;
                height: 300px;
                padding: 20px;
                background-color: #eee;
                margin: 20px;
                border: 10px solid#ccc;
                overflow:hidden;
            }
            .child{
                height: 200px;
                width: 200px;
                background-color:#fff;
                color:#ddd
            }
        </style>
    </head>
    <body>
        <div id="main">
            <div class="child">
                Child div
            </div>
        </div>
/*
clientHeight:                           elmsa7a ally byshofha el 3amil
    Viewable Area
    Include Padding
    No border 
    No margin

scrollHeight:
    All area include invisible area         elmkan elm5fy
    include padding
    no border
    no margin

offsetHeight
    viewable area
    include padding
    include border
    include scroll
    no margin
*/
var myMainDiv = document.getElementById("main");
console.log(myMainDiv.offsetHeight + "px");
console.log(myMainDiv.offsetWidth + "px");
// * ======================================================================================
// * =============================== Lesson (28) ===========================================
// * ======================================================================================
        <style>
            #myDIV {
              height: 250px;
              width: 250px;
              overflow: auto;
            }
            
            #content {
              height: 800px;
              width: 2000px;
              background-color: coral;
            }
            </style>
    </head>
    <body>
        <div id="myDIV" onscroll="myFunction()">
            <div id="content">Scroll inside me!</div>
          </div>
          <p id="demo"></p>
          
          
function myFunction() {
    var elmnt = document.getElementById("myDIV");
    var x = elmnt.scrollLeft;
    var y = elmnt.scrollTop;
    document.getElementById ("demo").innerHTML = "Horizontally: " + x + "px<br>Vertically: " + y + "px";
}
// * ======================================================================================
// * =============================== Lesson (29) ===========================================
// * ======================================================================================
        <style>
          .custom{
            width: 300px;
            height: 300px;
            border: 20px solid#333;
            background-color: #eee;
            color: #fff;
          }
        </style>
    </head>
    <body>
      <div id="main" class="custom">
        MyDiv
      </div>
      
      
var myMainDiv = document.getElementById("main");

console.log(myMainDiv.clientLeft);

// clientLeft
// clientTop
// * ======================================================================================
// * =============================== Lesson (30) ===========================================
// * ======================================================================================
var myMainDiv = document.getElementById("main");

myMainDiv.style.backgroundColor = "#f00";
myMainDiv.style.padding = "20px";
myMainDiv.style.color = '#fff';
myMainDiv.style.margin = "3px";
// * ======================================================================================
// * =============================== Lesson (31) ===========================================
// * ======================================================================================
	inputEncoding , lastModified , url
// * ======================================================================================
// * =============================== Lesson (32) ===========================================
// * ======================================================================================
// Create the main element
var myElement = document.createElement("div");

// Append to Body
document.body.appendChild(myElement);

// Create textNode
var myText = document.createTextNode("This div create by js");

// Create Start comment
var myComment = document.createComment("Start text created by js");

// create End Comment
var myEndComment = document.createComment("End text Create by js");

// Add the comment to my Element
myElement.appendChild(myComment);

// Add the text to myElement
myElement.appendChild(myText);

// Add the comment to my Element
myElement.appendChild(myEndComment);
// * ======================================================================================
// * =============================== Lesson (33) ===========================================
// * ======================================================================================
var myElement = document.getElementById("main"),
    // Create the attribute
    myAttr    = document.createAttribute("class");

// Add value to Attribute
myAttr.value = "custome";

// Add this attribute to element
myElement.setAttributeNode(myAttr);
// * ======================================================================================
// * =============================== Lesson (34) ===========================================
// * ======================================================================================
var myElement = document.getElementById("main"),
    // Create the attribute
    myAttr    = document.createAttribute("class"),
    //Create anthour Attribute
    mySecoundAttr = document.createAttribute("title");

// Change Attribute Value
mySecoundAttr.value = "hello";

// Add value to Attribute
myAttr.value = "custome";

// Add this attribute to element
myElement.setAttributeNode(myAttr);

myElement.setAttributeNode(mySecoundAttr)
// * ======================================================================================
// * =============================== Lesson (33) ===========================================
// * ======================================================================================
var myElement = document.getElementById("main");

function changeMe(){
    myElement.style.color = "red";
}
document.querySelector("button").onclick = changeMe;
// * ======================================================================================
// * =============================== Lesson (34) ===========================================
// * ======================================================================================
onload // onscroll // onresize
// * ======================================================================================
// * =============================== Lesson (36) ===========================================
// * ======================================================================================
var myElement       = document.getElementById("main"),
    myNote          = document.getElementById("notice"),
    myInput         = document.getElementById("input");

myInput.onfocus = function (){
    myNote.textContent = "Please don't forget to write a strong password";
};
myInput.onblur = function (){
    myNote.textContent = "";

    if (myInput.value.length < 10){
        myNote.textContent = "You must type 10 or more";
    }
}
var myElement       = document.getElementById("main"),
    myNote          = document.getElementById("notice"),
    myInput         = document.getElementById("input");

myInput.onfocus = function (){
    myNote.textContent = "Please don't forget to write a strong password";
};
myInput.onblur = function (e){
    e.preventDefault();
}
// * ======================================================================================
// * =============================== Lesson (37) ===========================================
// * ======================================================================================
var myElement = document.getElementById("main"),
    myNote    = document.getElementById("notice");

myElement.oncontextmenu = function (){
    myNote.textContent = "You right clicked the mouse "
}

.. onmouseenter // onmouseleave .. onclick
// * ======================================================================================
// * =============================== Lesson (38) ===========================================
// * ======================================================================================
var myElement = document.getElementById("main"),
    myNote    = document.getElementById("notice"),
    myInput   = document.getElementById("input");

myInput.onkeyup = function(){
    myNote.textContent = this.value
}










