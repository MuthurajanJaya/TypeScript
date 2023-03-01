"use strict";
// String
let myName;
myName = 'Jai';
console.log(myName.toUpperCase());
// Number
let myAge;
myAge = 22;
console.log(myAge);
myAge = 22.3;
console.log(myAge);
let myAges = "22";
console.log(parseInt(myAges));
// Boolean
let isValid = false;
console.log(isValid); //undefined
isValid = 12 < 3;
console.log(isValid); //false
// Array
let myArray;
myArray = ['Jai', "Anu"];
let myArray2;
myArray2 = [1, 2, 3, 4];
console.log(myArray2.filter((num) => num > 2));
console.log(myArray2.find((num) => num === 2));
console.log(myArray2.reduce((acc, num) => acc + num));
console.log(myArray2.reduce((acc, num) => acc + num) * 2);
console.log(myArray2.map(x => x * 2).reduce((acc, num) => acc + num));
// Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Blue"] = 1] = "Blue";
    Color[Color["Green"] = 2] = "Green";
})(Color || (Color = {}));
let color = Color.Blue;
// Tuple
let swapNumber;
function swapNumbers(firstValue, secondValue) {
    return [secondValue, firstValue];
}
swapNumber = swapNumbers(38, 63);
swapNumber[1];
// any
let department;
department = "IT";
department = 10;
function add(firstValue, secondValue) {
    return firstValue + secondValue;
}
console.log(add('100', 100));
