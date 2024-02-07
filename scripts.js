/*Objects: Objects are variables too. But objects can contain many values.
If we assume a real life object car :
-All cars have the same properties, but the property values differ from car to car.
-All cars have the same methods, but the methods are performed at different time*/

const car = {
  type: "Marcedes",
  model: "2022",
  color: "white",
};

const person = {
  f_name: "Jhon",
  l_name: "Champion",
  age: "50",
  fullname: function () {
    //this is not a variable. It is a keyword. You cannot change the value of this.
    return this.f_name + " " + this.l_name; //this refers to the person object, this.name is the property
  },
};

//accessig an object:name.property

console.log(car.type);
console.log(person.fullname()); //If you access a method without the () parentheses, it will return the function definition

//HTML events
/*An HTML event can be something the browser does, or something a user does.

Here are some examples of HTML events:

An HTML web page has finished loading
An HTML input field was changed
An HTML button was clicked */

//Strings

let text = `He is a nice kid `;
console.log(text.length);
console.log(text.toUpperCase()); //dont forget the ()

//slice
let text1 = "Apple, Banana, Kiwi";
let part = text1.slice(7);

console.log(part);
// repeat
let me = "fardan ";
console.log(me.repeat(4));

//replace   is case sensitive

let browse = "Please visit Edge";
console.log(browse.replace("Edge", "Google"));

const cars = ["Saab", "Volvo", "BMW"];
let x = cars[1]; //as car is array be careful
console.log(x);

//date

const d = new Date();

days = d.getHours();

console.log(days);

//math

let large = Math.max(10, 20);
