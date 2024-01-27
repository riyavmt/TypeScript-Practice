const num1Element = document.getElementById("num1") as HTMLInputElement;
const num2Element = document.getElementById("num2") as HTMLInputElement;
const buttonElement = document.querySelector('button')!;
const numArray : Array<number> = []; //Array is a generic(a type interacting with another type)
const stringArray: string[] = [];

function add(num1:number|string,num2:number|string){
    if(typeof num1 == "number" && typeof num2 == "number"){
        return num1 + num2;
    }
    else if(typeof num1 == "string" && typeof num2 == "string"){
        return num1 + " " + num2;
    }
    return +num1 + +num2;
}
buttonElement.addEventListener("click",()=>{
    const num1 = num1Element.value;
    const num2 = num2Element.value;
    const result = add(+num1,+num2);
    numArray.push(result as number);
    const stringResult = add(num1,num2);
    stringArray.push(stringResult as string);
    console.log(numArray); 
    console.log(stringArray);
});

const promise = new Promise<string>((resolve,reject)=>{
    setTimeout(()=>{
        resolve("It worked!")
    },1000);
});

promise.then(result=>{
    console.log(result.split('w'));
})

// console.log(add(1,6));
// console.log(add("1","6")); //shows error : Argument of type 'string' is not assignable to parameter of type 'number'.