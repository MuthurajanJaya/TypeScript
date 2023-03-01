// Named Function
function namedFunction(num1:number,num2:number):number{
    return num1+num2;
}
console.log(namedFunction(2,3));

// Arrow Function
const arrowFunction=(num1:number,num2:number):number => num1 - num2;
console.log(arrowFunction(2,3));

// Anonymous Function
const anonymousFunction=function(num1:number,num2:number):number{
    return num1+num2;
}