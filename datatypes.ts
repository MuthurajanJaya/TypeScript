// String
let myName:string;

myName='Jai'

console.log(myName.toUpperCase());

// Number
let myAge:number;

myAge=22;
console.log(myAge);

myAge=22.3;
console.log(myAge);

let myAges="22"
console.log(parseInt(myAges));

// Boolean
let isValid:boolean=false;

console.log(isValid); //undefined

isValid=12<3;
console.log(isValid);//false

// Array
let myArray:string[];
myArray=['Jai',"Anu"];

let myArray2:Array<number>;
myArray2=[1,2,3,4];

console.log(myArray2.filter((num)=>num>2));
console.log(myArray2.find((num)=>num===2));
console.log(myArray2.reduce((acc, num)=> acc + num));
console.log(myArray2.reduce((acc, num)=> acc + num)*2);
console.log(myArray2.map(x=>x*2).reduce((acc, num)=> acc + num))


// Enum
enum Color{
    Red,
    Blue,
    Green,
}

let color:Color=Color.Blue;

// Tuple
let swapNumber:[number,number];

function swapNumbers(firstValue:number,secondValue:number):[number,number]{
    return [secondValue,firstValue]
}
swapNumber=swapNumbers(38,63);
swapNumber[1];

// any
let department:any;

department="IT";
department=10;

function add(firstValue:any,secondValue:any):[any,any]{
    return firstValue+secondValue;
}

console.log(add('100',100));