			//------------------------------------------------------------------------------------------------------------
								// Lesson [3]
			//------------------------------------------------------------------------------------------------------------


			/*
			  Defining Object
			  [1] Object Literal
			*/

			let user = {
			  // Properties
			  firstName: "Osama",
			  lastName: "Elzero",

			  // Methods
			  getFullName: function () {
			    return `Full Name: ${user.firstName} ${user.lastName}`;
			  },
			};

			// Accessing Object Properties
			console.log(user.firstName); // Dot Notation
			console.log(user["firstName"]); // Bracket Notation

			console.log(typeof user.firstName); // String

			// Accessing Object Methods
			console.log(typeof user.getFullName); // Function
			console.log(user.getFullName());


			//------------------------------------------------------------------------------------------------------------
								// Lesson [4]
			//------------------------------------------------------------------------------------------------------------
			/*
			  Defining Object
			  [1] Object Literal
			*/

			let user = {
			  // Properties
			  firstName: "Osama",
			  lastName: "Elzero",
			  age: 37,
			  addresses: {
			    eg: "Giza",
			    usa: "California",
			    ksa: "Riyadh",

			    getMainAddress: function () {
			      return `Main Address Is In Egypt In City ${user.addresses.eg}`;
			    },
			  },

			  // Methods
			  // getFullName: function () {
			  //   return `Full Name: ${user.firstName} ${user.lastName}`;
			  // },
			  getFullName: () => `Full Name: ${user.firstName} ${user.lastName}`,

			  getAgeInDays: () => `Your Age In Days Is ${user.age}`,
			};

			// Accessing Object Properties
			console.log(user.firstName); // Dot Notation
			console.log(user["firstName"]); // Bracket Notation

			console.log(typeof user.firstName); // String

			console.log(user.addresses.eg);
			console.log(user["addresses"]["ksa"]);

			// Accessing Object Methods
			console.log(typeof user.getFullName); // Function
			console.log(user.getFullName());
			console.log(user.getAgeInDays());

			console.log(user.addresses.getMainAddress());
			//------------------------------------------------------------------------------------------------------------
								// Lesson [5]
			//------------------------------------------------------------------------------------------------------------
			let myObj = {
			  "One": 1,
			  "Two!": 2
			};

			console.log(myObj.One);
			// console.log(myObj."One"); // Syntax Error
			// console.log(myObj.Two!); // Syntax Error

			console.log(myObj["One"]); // 1
			console.log(myObj["Two!"]); // 2

			let myObj2 = {
			  1: "One",
			  2: "Two"
			};

			// console.log(myObj2.1); // Syntax Error

			console.log(myObj2["1"]);
			console.log(myObj2["2"]);

			let myVariable = "name";

			let myLastObj = {
			  name: "Osama"
			};

			console.log(myLastObj.myVariable); // Undefined
			console.log(myLastObj[myVariable]); // Osama
			console.log(myLastObj["name"]); // Osama
			//------------------------------------------------------------------------------------------------------------
								// Lesson [6]
			//------------------------------------------------------------------------------------------------------------
			/*
			  Defining Object
			  [1] Object Literal
			  [2] With New Keyword
			*/

			let user = new Object();

			user.firstName = "Osama";
			user.lastName = "Elzero";
			user["age"] = 37;

			user.getFullName = function () {
			  return `Full Name Is ${user.firstName} ${user.lastName}`;
			};

			console.log(user);
			console.log(user.firstName);
			console.log(user["lastName"]);
			console.log(user.age);
			console.log(user.getFullName());
			//------------------------------------------------------------------------------------------------------------
								// Lesson [7]
			//------------------------------------------------------------------------------------------------------------
			/*
			  Defining Object
			  [1] Object Literal
			  [2] With New Keyword
			  [3] With Object.create()
			*/

			let mainObj = {
			  hasDiscount: true,
			  showMsg: function () {
			    return `You${this.hasDiscount ? "" : " Don't"} Have Discount`;
			  },
			};

			console.log(mainObj.hasDiscount);
			console.log(mainObj.showMsg());

			let otherObj = Object.create(mainObj);

			otherObj.hasDiscount = false;
			console.log(otherObj.hasDiscount);
			console.log(otherObj.showMsg());

			let lastObj = Object.create(mainObj);

			console.log(lastObj.hasDiscount);
			console.log(lastObj.showMsg());

			//------------------------------------------------------------------------------------------------------------
								// Lesson [8]
			//------------------------------------------------------------------------------------------------------------
			/*
			  Defining Object
			  [1] Object Literal
			  [2] With New Keyword
			  [3] With Object.create()
			  [4] With Object.assign()
			*/

			const src1 = {
			  prop1: "Value1",
			  prop2: "Value2",
			  method1: function () {
			    return `Method 1`;
			  },
			};

			const src2 = {
			  prop3: "Value3",
			  prop4: "Value4",
			  method2: function () {
			    return `Method 2`;
			  },
			};

			const target = {
			  prop5: "Value5",
			};

			Object.assign(target, src1, src2, { prop6: "Value6" });

			console.log(target);

			const myObject = Object.assign({}, target, { prop7: "Value7" });

			console.log(myObject);
			console.log(myObject.prop1);
			console.log(myObject.prop2);
			console.log(myObject.prop6);
			console.log(myObject.method1());
			console.log(myObject.method2());

			//------------------------------------------------------------------------------------------------------------
								// Lesson [9]
			//------------------------------------------------------------------------------------------------------------
			/*
			  Delete Operator
			*/

			const user = { name: "Osama" };

			console.log(user);
			console.log(user.name);

			// delete user; // Delete Property Not Object
			// delete user.name;
			// delete user["name"];
			console.log(delete user["name"]);

			console.log(user);
			console.log(user.name);

			console.log("#".repeat(15));

			const username = "Osama";
			console.log(username);
			console.log(delete username);
			console.log(username);

			console.log("#".repeat(15));

			const freezedObj = Object.freeze({ age: 37 });
			console.log(freezedObj);
			console.log(freezedObj.age);

			console.log(delete freezedObj.age);

			console.log(freezedObj);
			console.log(freezedObj.age);

			console.log("#".repeat(15));

			const eObj = {};
			Object.defineProperty(eObj, "a", { value: 1, configurable: false });
			console.log(eObj);
			console.log(eObj.a);

			console.log(delete eObj.a);

			console.log(eObj);
			console.log(eObj.a);
			//------------------------------------------------------------------------------------------------------------
								// Lesson [10]
			//------------------------------------------------------------------------------------------------------------
			/*
			  For ... In Loop
			  Loop Through The Properties Of The Objects
			*/

			const user = {
			  name: "Osama",
			  country: "Egypt",
			  age: 37,
			};

			let finalData = "";

			for (let info in user) {
			  // console.log(`The ${info} Is => ${user[info]}`);
			  finalData += `<div>The ${info} Is => ${user[info]}</div>`;
			}

			// console.log(user.country);
			// console.log(user["country"]);

			console.log(finalData);

			document.getElementById("info").innerHTML = finalData;

			//------------------------------------------------------------------------------------------------------------
								// Lesson [11]
			//------------------------------------------------------------------------------------------------------------
			/*
			  Constructor Function
			*/

			function Phone(serial, color, price) {
			  this.serial = serial;
			  this.color = color;
			  this.price = price - 100;
			}

			let phone1 = new Phone(123, "Red", 500);
			let phone2 = new Phone(159, "Black", 500);
			let phone3 = new Phone(167, "Silver", 500);

			console.log(phone1.serial);
			console.log(phone1.color);
			console.log(phone1.price);

			console.log(phone2.serial);
			console.log(phone2.color);
			console.log(phone2.price);

			console.log(phone3.serial);
			console.log(phone3.color);
			console.log(phone3.price);

			// const phone1 = {
			//   serial: 123,
			//   color: "Red",
			//   price: 500,
			// };

			// const phone2 = {
			//   serial: 159,
			//   color: "Black",
			//   price: 500,
			// };

			// const phone3 = {
			//   serial: 167,
			//   color: "Silver",
			//   price: 500,
			// };
			//------------------------------------------------------------------------------------------------------------
								// Lesson [12]
			//------------------------------------------------------------------------------------------------------------
			/*
			  Constructor Function
			*/

			function Phone(serial) {
			  // this is The Created Object From The Constrcutor Function
			  console.log(this);
			  this.serial = `#${serial}`;
			}

			let phone1 = new Phone(123456);
			let phone2 = new Phone(528951);
			let phone3 = Phone(125698);

			console.log(phone1.serial);
			console.log(phone2.serial);
			console.log(window.serial);

			console.log(phone1 instanceof Phone);
			console.log(phone2 instanceof Phone);
			console.log(phone3 instanceof Phone);

			console.log(phone1.constructor === Phone);
			console.log(phone2.constructor === Phone);
			// console.log(phone3.constructor === Phone); // Error

			function sayHelloTo(someone) {
			  // someone => Parameter
			  return `Hello ${someone}`;
			}

			console.log(sayHelloTo("Osama")); // Osama => Argument

			//------------------------------------------------------------------------------------------------------------
								// Lesson [13]
			//------------------------------------------------------------------------------------------------------------
			/*
			  Constructor Function
			  Dealing With Properties
			  40% to 60%
			*/

			function User(fName, lName, age, country) {
			  this.fName = fName;
			  this.lName = lName;
			  this.age = age;
			  this.country = country;
			  this.fullName = function () {
			    return `Full Name: ${this.fName} ${this.lName}`;
			  };
			  this.ageInDays = function () {
			    return `Age In Days: ${this.age * 365}`;
			  };
			}
			// User.country = "Egypt"; Wrong

			let user1 = new User("Osama", "Elzero", 37, "Egypt");
			let user2 = new User("Ahmed", "Ali", 30, "KSA");

			console.log(user1);
			console.log(`Full Name: ${user1.fName} ${user1.lName}`);
			console.log(user1.fullName());
			console.log(user1.ageInDays());
			console.log(user2);
			console.log(user2.country);
			console.log(user2.ageInDays());
			//------------------------------------------------------------------------------------------------------------
								// Lesson [14]
			//------------------------------------------------------------------------------------------------------------
			/*
			  Constructor Function
			  60% To 70%
			  Trainings
			*/

			function User(name, email, age, showEmail) {
			  this.name = name;
			  this.email = email;
			  this.age = age;
			  this.updateName = function (newName) {
			    if (this.age > 18) {
			      this.name = newName;
			    } else {
			      console.log(`You Cant Update Name Because Of Age Restriction`);
			    }
			  };
			  this.showEmail = function () {
			    if (showEmail === true) {
			      return `Email Is: ${this.email}`;
			    } else {
			      return `Data Is Private`;
			    }
			  };
			}

			let user1 = new User("Osama", "o@nn.sa", 19, false);
			console.log(user1.name);
			user1.updateName("Ahmed");
			console.log(user1.name);
			console.log(user1.showEmail());

			//------------------------------------------------------------------------------------------------------------
								// Lesson [15]
			//------------------------------------------------------------------------------------------------------------
			/*
			  Constructor Function 80%
			  Built In Constructors
			*/

			function User(name) {
			  this.name = name;
			  this.welcome = function () {
			    return `Welcome ${this.name}`;
			  };
			}

			let user1 = new User("Osama");
			let user2 = new User("Ahmed");

			// let obj1 = new Object({ a: 1 });
			// let obj2 = new Object({ b: 2 });
			let obj3 = { c: 3 };

			let num1 = new Number(1);
			let num2 = new Number(2);
			let num3 = 3;

			let str1 = new String("Osama");
			let str2 = new String("Ahmed");
			let str3 = "Mahmoud";

			//------------------------------------------------------------------------------------------------------------
								// Lesson [16]
			//------------------------------------------------------------------------------------------------------------
			/*
			  Prototype
			*/

			function User(name) {
			  this.name = name;
			  this.welcome = function () {
			    return `Welcome ${this.name}`;
			  };
			}

			let user1 = new User("Osama");
			let user2 = new User("Ahmed");

			console.log(User.prototype);

			// function sayHello() {
			//   return 1;
			// }
			// console.log(sayHello.prototype);

			const arr = [1, 2, 3, 4, 5];
			console.log(Array.prototype);
			console.log(arr.reverse());
			//------------------------------------------------------------------------------------------------------------
								// Lesson [17]
			//------------------------------------------------------------------------------------------------------------
			*
			  Prototype
			*/

			function User(name) {
			  this.name = name;
			  this.welcome = function () {
			    return `Welcome ${this.name}`;
			  };
			}

			let user1 = new User("Osama");
			let user2 = new User("Ahmed");

			console.log(User.prototype);
			console.log(user1);

			User.prototype.addTitle = function () {
			  return `Mr. ${this.name}`;
			};

			console.log(Object.prototype);

			Object.prototype.elzero = "Elzero Web School";

			const myObject = { a: 1, b: 2 };
			console.log(myObject.a);
			console.log(myObject.b);
			console.log(myObject.elzero);

			//------------------------------------------------------------------------------------------------------------
								// Lesson [18]
			//------------------------------------------------------------------------------------------------------------
			/*
			  Prototype
			*/

			let myString = "Osama";

			console.log(String.prototype);

			String.prototype.zFill = function (width) {
			  let theResult = this;

			  while (theResult.length < width) {
			    theResult = `0${theResult}`;
			  }

			  return theResult.toString();
			};

			console.log("12".zFill(6));
			console.log("516".zFill(6));
			console.log("3625".zFill(6));
			console.log("25145".zFill(6));
			console.log("987654".zFill(6));

			String.prototype.sayYouLoveMe = function () {
			  return `I Love You ${this}`;
			};

			console.log("Osama".sayYouLoveMe());
			//------------------------------------------------------------------------------------------------------------
								// Lesson [19]
			//------------------------------------------------------------------------------------------------------------
			/*
			  Prototype
			  [1] Every Object Has A Prototype
			  [2] Prototype Chain Ends With Object.prototype
			  [2] In Javascript Function Is Object
			*/

			function User(name) {
			  /*
			    [1] Create Empty Object
			    [2] Assign The New Object To this Context
			    [3] New Object Created Prototype = Function Prototype
			    this = {};
			    this.__proto__ = User.__proto__
			  */
			  this.name = name;
			  /*
			    [4] Return The New Object
			    return this
			  */

			  // if (!(this instanceof User)) {
			  //   // throw new Error("Must Be Called With New Keyword");
			  //   console.log("Error");
			  // }

			  // ES6
			  if (!new.target) {
			    // throw new Error("Must Be Called With New Keyword");
			    console.log("Error");
			  }
			}

			let user1 = new User("Osama");
			let user2 = new User("Ahmed");
			console.log(User.prototype);
			console.log(user1);

			let myArray = [1, 2, 3, 4];8
			//------------------------------------------------------------------------------------------------------------
								// Lesson [20]
			//------------------------------------------------------------------------------------------------------------
			/*
			  Class
			*/

			class User {
			  constructor(name, email) {
			    this.name = name;
			    this.email = email;
			  }
			  sayHello() {
			    return `Hello ${this.name}`;
			  }
			  showEmail() {
			    return `Your Email Is ${this.email}`;
			  }
			}

			let user1 = new User("Osama", "o@nn.sa");
			let user2 = new User("Ahmed");

			console.log(user1);
			console.log(user2);
			//------------------------------------------------------------------------------------------------------------
								// Lesson [21]
			//------------------------------------------------------------------------------------------------------------
								/*
			  Class
			  Static Properties & Methods
			*/

			class User {
			  // Static Properties
			  static counter = 0;

			  constructor(name, email, counter) {
			    this.name = name;
			    this.email = email;
			    this.counter = counter;
			    User.counter++;
			  }
			  sayHello() {
			    return `Hello ${this.name}`;
			  }
			  showEmail() {
			    return `Your Email Is ${this.email}`;
			  }

			  // Static Methods
			  static countObjects = function () {
			    return `${this.counter} Objects Created.`;
			  };
			}

			let user1 = new User("Osama", "o@nn.sa", 2);
			let user2 = new User("Ahmed", "o@nn.sa", 2);
			let user3 = new User("Osama", "o@nn.sa", 2);
			let user4 = new User("Osama", "o@nn.sa", 2);
			// let user2 = User("Ahmed", "a@nn.sa"); // TypeError: Class constructor User

			console.log(typeof User); // Function
			console.log(User === User.prototype.constructor); // True

			console.log(User.countObjects());

			//------------------------------------------------------------------------------------------------------------
								// Lesson [22]
			//------------------------------------------------------------------------------------------------------------
			/*
  Class
  Inheritance
*/

			class User {
			  constructor(name, email) {
			    this.name = name;
			    this.email = email;
			  }
			  sayHello() {
			    return `Hello ${this.name}`;
			  }
			  showEmail() {
			    return `Your Email Is ${this.email}`;
			  }
			  writeMsg() {
			    return `Message From Parent Class`;
			  }
			}

			class Admin extends User {
			  constructor(name, email) {
			    super(name, email);
			  }
			  adminMsg() {
			    return `You Are Admin`;
			  }
			  writeMsg() {
			    return `Message From Child Class`;
			  }
			}

			let admin1 = new Admin("Osama", "o@nn.sa");

			//------------------------------------------------------------------------------------------------------------
								// Lesson [23]
			//------------------------------------------------------------------------------------------------------------
			/*
			  JavaScript Accessors
			  Getters & Setters
			*/

			class User {
			  constructor(name, email) {
			    this.name = name;
			    this.email = email;
			  }
			  sayHello() {
			    return `Hello ${this.name}`;
			  }
			  get showInfo() {
			    return `Name: ${this.name}, Email" ${this.email}`;
			  }
			  changeName(newName) {
			    this.name = newName;
			  }
			  set changeEmail(newEmail) {
			    this.email = newEmail;
			  }
			}

			let user1 = new User("Osama", "o@nn.sa");

			console.log(user1.name);
			console.log(user1.email);
			console.log(user1.showInfo);

			user1.changeName("Mahmoud");
			console.log(user1.name);
			console.log(user1.showInfo);

			user1.changeEmail = "oooo@gmail.com";
			console.log(user1.name);
			console.log(user1.email);
			console.log(user1.showInfo);
			//------------------------------------------------------------------------------------------------------------
								// Lesson [24]
			//------------------------------------------------------------------------------------------------------------
			/*
			  Object Meta Data
			  writable
			  enumerable
			  configurable
			  ============
			  Object.defineProperty(obj, prop, descriptor)
			*/

			const myObject = {
			  a: 1,
			  b: 2,
			};

			Object.defineProperty(myObject, "c", {
			  writable: false,
			  enumerable: false,
			  configurable: true,
			  value: 3,
			});

			Object.defineProperty(myObject, "c", {
			  writable: true,
			});

			// console.log(delete myObject.c); // Will Not Delete Because configurable is False
			myObject.c = 500; // Will Not Change Because writable is False

			console.log(myObject);

			console.log("#".repeat(10));

			for (let prop in myObject) {
			  console.log(prop, myObject[prop]);
			}

			console.log("#".repeat(10));

			console.log(Object.getOwnPropertyNames(myObject));

			//------------------------------------------------------------------------------------------------------------
								// Lesson [25]
			//------------------------------------------------------------------------------------------------------------
			/*
		  Object.defineProperties & Trainings
		*/

		const myObject = {
		  a: 1,
		  b: 2,
		};

		Object.defineProperty(myObject, "a", {
		  writable: false,
		  enumerable: false,
		  configurable: false,
		  value: 500,
		});

		Object.defineProperty(myObject, "c", {
		  value: 3,
		});

		myObject.d = 4;

		Object.defineProperties(myObject, {
		  e: {
		    value: 5,
		  },
		  f: {
		    value: 6,
		  },
		  g: {
		    value: 7,
		  },
		});

		console.log(myObject);
		console.log(Object.getOwnPropertyDescriptor(myObject, "a"));
		console.log(Object.getOwnPropertyDescriptor(myObject, "c"));
		console.log(Object.getOwnPropertyDescriptor(myObject, "d"));

		console.log(Object.getOwnPropertyNames(myObject));
		console.log(Object.keys(myObject));
		ملاحظات الدرس
			//------------------------------------------------------------------------------------------------------------
								// Lesson [26]
			//------------------------------------------------------------------------------------------------------------

