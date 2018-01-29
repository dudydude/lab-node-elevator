const Elevator = require("./elevator.js");
const Person = require("./person.js");
console.log("hello world");

var e = new Elevator();
var arthur = new Person("Arthur", 2, 8);
var josh = new Person("Josh", 0, 2);
var maxence = new Person("Maxence", 3, 6);

e.start();
e.call(arthur);
e.call(josh);
e.call(maxence);
