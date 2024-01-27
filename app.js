"use strict";
const num1Element = document.getElementById("num1");
const num2Element = document.getElementById("num2");
const buttonElement = document.querySelector('button');
const numArray = []; //Array is a generic(a type interacting with another type)
const stringArray = [];
function add(num1, num2) {
    if (typeof num1 == "number" && typeof num2 == "number") {
        return num1 + num2;
    }
    else if (typeof num1 == "string" && typeof num2 == "string") {
        return num1 + " " + num2;
    }
    return +num1 + +num2;
}
buttonElement.addEventListener("click", () => {
    const num1 = num1Element.value;
    const num2 = num2Element.value;
    const result = add(+num1, +num2);
    numArray.push(result);
    const stringResult = add(num1, num2);
    stringArray.push(stringResult);
    console.log(numArray);
    console.log(stringArray);
});
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("It worked!");
    }, 1000);
});
promise.then(result => {
    console.log(result.split('w'));
});
// console.log(add(1,6));
// console.log(add("1","6")); //shows error : Argument of type 'string' is not assignable to parameter of type 'number'.
