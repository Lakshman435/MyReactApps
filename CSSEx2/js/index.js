// //"use strict";
// function Counter() {
//   let count = 0;
//   const Increment = function() {
//     // alert(count);
//     console.log(count);
//     return count++;
//   };

//   return { Increment };
// }
// let x = Counter();
// x.Increment();
// x.Increment();
// let x1 = Counter();
// x1.Increment();
// // Counter();
// // Counter();

// function countRabbits() {
//   for (let i = 1; i <= 3; i++) {
//     alert("Rabbit number " + i);
//   }
// }
// //promises

// let p = new Promise((resolve, reject) => {
//   let a = 4;
//   if (a == 4) resolve("a val is 4");
//   else reject("a value is not 4");
// });
// p.then(message => {
//   console.log("inside then", message);
// }).catch(message => {
//   console.log("inside catch", message);
// });
// // handleClick = () => {
// //   console.log("hello");
// //   let val = document.getElementsByTagName("button").innerHTML;
// //   console.log(val);
// // };
// // let buttons = document.getElementsByTagName("button");
// // console.log(buttons);
// // let btn = buttons.map(button => button);

// //console.log(btn);

// // let sum = function(x, y) {
// //   return this.x + this.y;
// // };
// function check() {
//   let x;
//   alert(x);

//   x = 10;
// }
// // check();

// //callbacks
// function fun1(callback1, callback) {
//   callback();
//   callback1();
//   console.log("helooo");
// }
// function sum1() {
//   console.log("callback called", 1 + 2);
// }
// fun1(sum1, function() {
//   console.log("anonymous fun");
// });
// const funOne = () => console.log(funcTwo());
// const funcTwo = () => 2 + 3;
// funOne(funcTwo);
// let h = 10;
// console.log(`hval ${h}`);

// //console.log(myName);
// // myName = "lakshman";
// // let myName;
// console.log("2a", myName2); // error: myName2 is not defined
// if (1) {
//   console.log("2b", myName2); // undefined
//   var myName2 = "Sunil";
// }

// let p1 = new Promise((resolve, reject) => {
//   resolve("promise1 success");
// });

// p2 = new Promise((resolve, reject) => {
//   resolve("promise2 success");
// });

// p3 = new Promise((resolve, reject) => {
//   resolve("promise3 success");
// });

// Promise.all([p3, p1, p3]).then(messages => {
//   console.log(messages);
// });

// const student = { fname: "lakshman", lname: "nidamanuri" };
// const { fname, lname } = student;
// console.log(fname, lname);

// //call fun
// let obj = {
//   fname: "lakshman",
//   lname: "nidamanuri"
// };

// let printFullName = function(city, age) {
//   console.log(this.fname + "" + this.lname + "" + city + age);
// };
// printFullName.call(obj);
// let obj2 = {
//   fname: "ram",
//   lname: "nidamanuri"
// };

// printFullName.call(obj2, "Bangalore");
// printFullName.apply(obj2, ["Pune", "27"]);

// let getFullName = printFullName.bind(obj2, "hyd");
// getFullName();

// let myObject = {};
// for (let i = 0; i <= 4; i++) {
//   myObject["prop" + i] = i;
// }
// console.log(myObject); // 3

// let sum = function(a, b) {
//   return a + b;
// };

// let sum10 = sum.bind(null, 10);
// console.log(sum10(10));

// var name = "globalName";
// const nameObj = {
//   name: "myName",
//   sayName: function() {
//     console.log(this.name);
//   }
// };
// const say = nameObj.sayName;
// console.log(say());

// nameObj.sayName();
// const boundSay = nameObj.sayName.bind(nameObj);
// boundSay();
// let num1 = { num: 2 };

// let myFun = function(a) {
//   return this.num + a;
// };
// let boundFun = myFun.bind(num1);
// console.log(boundFun);
// console.log(boundFun(11));

// //inheritance
// let X = function(j) {
//   this.i = 0;
//   this.j = j;
// };
// X.prototype.getJ = function() {
//   return this.j;
// };
// let x11 = new X(1);
// let x2 = new X(2);

// console.log(x11.getJ());
// console.log(x2.getJ());

// let X2 = function(k) {
//   X.call(this, 3);
//   this.k = k;
// };
// let x3 = new X2(10);
// console.log(x3.j, x3.i);
// //arrays and objects
// // const items = ["item1", "item2", "item3", "item4"];
// // console.log(items.indexOf("item1"));

// // const indexVal = items.findIndex(item => item === "item2");
// // console.log(indexVal);

// const items = [
//   { name: "Bike", price: 100 },
//   { name: "TV", price: 200 },
//   { name: "Album", price: 10 },
//   { name: "Book", price: 5 },
//   { name: "Phone", price: 500 }
// ];

// const names = items.map(item => item.name);
// console.log(names);

// const filteredItems = items.filter((item, index) => {
//   return item.price > 100;
// });

// console.log(filteredItems);

// const duplicateItems = [1, 1, 2, 2, 3, 4, 4, 5, 5, 6];
// const removeDuplicates = duplicateItems.filter((item, index) => {
//   return duplicateItems.indexOf(item) >= index;
// });

// console.log(removeDuplicates);

// const numArray = [1, 2, 3, 4, 5];
// const hasnumtwoincludes = numArray.includes(2);
// console.log(hasnumtwoincludes);

// const captains = {
//   england: "joe root",
//   india: "Kohli",
//   westindies: "holder",
//   newzealand: "williamson",
//   australia: "Tim paine"
// };

// const countries = Object.keys(captains);
// console.log(countries);
// let captainsNames = Object.values(captains);
// console.log(captainsNames);
// const entries = Object.entries(captains);
// console.log(entries[2][1]);

// //largest num in array
// let array = [3, 6, 2, 56, 89];
// let largest = 0;
// for (let i = 0; i <= array.length; i++) {
//   if (array[i] > largest) {
//     largest = array[i];
//   }
// }
// console.log("largest number", largest);

// for (let i = 0; i <= 5; i++) {
//   console.log(`i val inside for loop ${i}`);
// }
//console.log(`i val outside for loop${i}`);
// function Person(fname, lname) {
//   this.fname = fname;
//   this.lname = lname;
// }
// console.log(Person("lak", "nidamanuri"));
// console.log(fname, lname);
// console.log(Person("ram", "nidamanuri"));
// console.log(fname, lname);
// let p = new Person("kjksjd", "jsdhjd");
// console.log(p);
//objects
let myCar = new Object();
let seating = "seating";
myCar.make = "Ford";
myCar.model = "Mustang";
myCar.year = 1969;
myCar["c-olor"] = "red";
myCar[""] = "steering";
myCar["wheels"] = 2;
myCar[seating] = "eight seating";
console.log(myCar);
console.log(myCar["make"]);

console.log(myCar.color);

function showProps(obj, objName) {
  var result = "";
  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      result += `${objName}.${i} = ${obj[i]}\n`;
    }
  }
  return result;
}

showProps(myCar, "myCar");
console.log(showProps(myCar, "myCar"));
console.log(Object.keys(myCar));
console.log(Object.getOwnPropertyNames(myCar));
console.log(myCar.hasOwnProperty("model"));

function Person(name, age, sex) {
  this.name = name;
  this.age = age;
  this.sex = sex;
}

let lak = new Person("lakshman", 28, "M");
console.log(lak);
lak["city"] = "bangalore";
console.log(lak);

let Animal = {
  type: "animal",
  displaytype: function() {
    console.log(this.type);
  }
};

let animal1 = Object.create(Animal);
animal1.displaytype();
let fish = Object.create(Animal);
fish.type = "fish";
fish.displaytype();

let obj = {
  a: 2,
  m: function() {
    return this.a + 1;
  }
};
console.log(obj.m());
let p = Object.create(obj);
p.a = 5;
console.log(p.m());
console.log(p.hasOwnProperty("a"));

class Polygon {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

class Square extends Polygon {
  constructor(sidelength) {
    super(sidelength, sidelength);
  }
  getArea() {
    return this.height * this.width;
  }

  set sidelength(newLength) {
    this.height = newLength;
    this.width = newLength;
  }
}

let square = new Square(5);
console.log(square);
let myObj = new Object();
myObj.a = 5;
myObj.b = 12;
console.log(myObj);
delete myObj.a;
console.log(myObj);
let fruit = { name: "apple" };
let fruitbear = { name: "apple" };

console.log(fruit === fruitbear);
let fruit1 = fruit;
console.log(fruit === fruit1);
//closures
function makeFunc() {
  let name = "Mozilla";
  function displayName() {
    console.log(name);
  }
  return displayName;
}

let myfunc = makeFunc();
myfunc();

function makeAdder(x) {
  return function(y) {
    return x + y;
  };
}

let add5 = makeAdder(5);
let add10 = makeAdder(10);
console.log(add5(2));
console.log(add10(2));

var x = 100;
function display() {
  let x = 200;
  for (x; x < 205; x++) {
    console.log(x);
  }
  console.log(x);
}
console.log(x);

function showVal() {
  for (let i = 0; i < 3; i++) {
    setTimeout(() => {
      console.log(i);
    }, 0);
  }
}
showVal();
