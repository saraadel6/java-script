
/*---- A. Part 1: Coding Questions -----*/

//(1)
let result = Number("123") + 7;
console.log(`Question1:\n${result}`)

//(2)
function isFalsy(value) {
    if (!value)
        return "Invalid";
    else
        return "Valid";
}

let valueQ2 = 0;
console.log(`Question2:\n${isFalsy(valueQ2)}`);
 
//(3)
console.log("Question3: ")
for(let i=1; i<=10; i++){
    if(i%2===0)
        continue;
    console.log(i);
}

// (4)
let numbers = [1,2,3,4,5]
console.log("Question4:\n",numbers.filter((number) => {
    return (number%2==0);
}));


// (5)
let arrMerge1 = [1,2,3];
let arrMerge2 = [4,5,6];
let merged = [...arrMerge1, ...arrMerge2];
console.log("Question5:\n",merged);

// (6)
console.log("Question6: ")
let day = 2
switch(day) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("Enter a valid day");
        break;
}

// (7)
let strings = ['a', 'ab', 'abc']
let lengths = strings.map(string => {
    return string.length;
});
console.log("Question7:\n",lengths);

// (8)
function divisible(value) {
    if (value % 3 === 0 && value % 5 === 0)
        return "Divisible by both";
    else
        return "Not divisible by both";
}
console.log("Question8:\n", divisible(15));

// (9)
let num = 3;
let square = (n) => n**2;
console.log( "Question9:\n",square(num));

// (10)
function desrtuct(object){
    const { name, age } = object;
    return `${name} is ${age} years old`;
}

const person = { name: "John", age: 25 };
console.log("Question10:\n",desrtuct(person));

// (11)
function sum(...nums) {
    let res = 0;

    for (let i = 0; i < nums.length; i++)
        res += nums[i];
    return res;
}

console.log("Question11:\n",sum(1, 2, 3, 4, 5));

// (12)
function promiseFunc(){
    
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve("Success")
        }, 3000)
    }
)}
promiseFunc().then((message) => {
    console.log("Question 12:")
    console.log(message); 
});


// (13)
console.log("Question13: ");
function largest(arr) {
    let res = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (res < arr[i])
            res = arr[i];
    }
    return res;
}

console.log(largest([1, 3, 7, 2, 4]));


// (14)
console.log("Question14: ");
function arrKeys(person){
    return Object.keys(person);
}

console.log( arrKeys({name: "John", age: 30}))


// (15)
console.log("Question15: ");

function splitWord(str){
    let arr = str.split(" ")
    return arr;
    
}
console.log(splitWord("The quick brown fox"));


/*---- B. Part 2: Essay Questions -----*/

// 1. What is the difference between forEach and for...of? When would you use each?
// We use both to iterate over the elements of an array and apply some logic to each element.

// forEach --> it doesn't allow us to use break and continue.
// forEach --> it can be used with asynchronous callbacks, but it doesn't wait for each async callback to finish before moving to the next element.

// for...of --> it allows us to use break and continue.
// for...of --> it can be used with async/await when we need to wait for asynchronous operations.


// 2. What is hoisting and what is the Temporal Dead Zone (TDZ)?

// Hoisting --> JavaScript processes declarations before executing the code.
// var: hoisted to the top of its scope and initialized with undefined.
// function declarations: hoisted with their entire function body.

// Example:
// sayHello();         // it will work
// function sayHello() {
//     console.log("Hello, Everyone!");
// }

// console.log(value); // it will print undefined
// var value = 10;


// Temporal Dead Zone (TDZ)

// let and const are also hoisted to the top of their scope, but they are not initialized.
// They remain in the TDZ from the beginning of their scope until their declaration is initialized.
// Accessing them while they are in the TDZ causes a ReferenceError.

// Example:
// console.log(name); // ReferenceError: Cannot access 'name' before initialization
// let name = "Sara";


// 3. What are the main differences between == and ===?

// == --> (loose equality) it performs type coercion when necessary before comparing the values.
// It tries to convert the values to compatible types before comparing them.
// === --> (strict equality) it checks if both the value and the type are identical.


// 4. Explain how try-catch works and why it is important in async operations.

// try-catch --> it'ss used to handle errors that may occur during the execution of a block of code.
// try --> contains the code that may throw an error.
// catch --> if the code in try throws an error, catch receives the error and executes the code inside it.
// We can use it with async/await to handle errors from rejected Promises and prevent unhandled errors if the code in await fails.


// 5. What's the difference between type conversion and coercion?

// Type conversion --> (explicit) when the developer explicitly converts the type of a value using a built-in function.

// Example:
// let ageStr = "20";
// let age = Number(ageStr);
// console.log("Your birth year:", 2026 - age);


// Type coercion --> (implicit) JavaScript automatically converts a value from one type to another when needed.
// Example:

// let difference = 10 - "6";
// console.log("The difference:", difference);