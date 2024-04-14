// Object Example
/* 
const bookDetails = [{
    name: "Machine learning",
    price: 200
}, {
    name: "Deep Learning",
    price: 300,
    discount: {
        firstNumber: 10,
        secondNumber: 20,
        thridNumber: 30
    }
}, {
    name: "SSL Learning",
    price: 20
}
];


console.log(bookDetails["name"]);
*/

// Example of indexOf & lastIndexOf
/*
function findIndex(str, target){
    console.log("Orginal Stringh:", str);
    console.log("Index:", str.lastIndexOf(target)); //User can implement indexOf/lastIndexOf
}

findIndex("Hello world world", "world");
*/

// Example of CallBack function
/* 
function calculation(a,b, total){
    const ans = total(a,b);
    return ans;
}

function sum(a, b){
    return a + b;
}

console.log(calculation(1,2,sum));
*/

// Example of call back
/*
function sum(a,b,finToCall){
    const ans = a + b;
    finToCall(ans);
}

function displayResult(data){
    console.log("Sum of a and b:", data);
}

console.log(sum(1,2,displayResult));
*/

// Example of setTimeOut & setInterval
/*
function greet(){
    console.log("hello world");
} 

setTimeout(greet, 3*1000);
setInterval(greet, 2000);
*/

// Example of call back function
/*
function calculation(a, b, totalFunction) {
    return totalFunction(a, b);
}

function sum(a, b) {
    return a + b;
}

function setTimeOut(totalFunction, duration) {
    setTimeout(totalFunction, duration);
}

console.log(calculation(1, 2, sum));
*/  

//Example of Slice
/*
function getSlice(str, start, end){
    console.log("Orginal String:", str);
    console.log("After Slice", str.slice(start, end));
}

getSlice("hello world", 1, 5);
*/

//Other way to implementing the slice
/*
function cutIt(str, startIndex, endIndex){
    let newStr = "";
    for(let i = 0; i < str.length; i++){
        if(i >= startIndex && i < endIndex){
            newStr = newStr + str[i];
        }
    }
    return newStr;
}

console.log(cutIt("hello world", 1, 5));
*/

// Example of replace
/*
const str = "hello world";
console.log(str.replace("world", "javascript"));
*/

// Example of split function
/*
const value = "hello world javascript";
console.log(value.split(" "));
*/

// Example of trim (It helps removing space of benning and end)
/*
const value = "   hello world    ";
console.log(value.trim());
*/

//Example of concat 
/*
const arr1 = [1,2,3];
const arr2 = [4,5,6];
console.log(arr1.concat(arr2));
*/

// Example for forEach with callBack function
/*
const arr = [1,2,3];

function logThing(str){
    console.log(str);
}

arr.forEach(logThing);
*/


//////////////////////////////////////////////////// Ops In Javascript /////////////////////////////////////////////////

// Example of class and object

/*
class animle { // Creating class
    constructor(name, legCount, speaks){
        this.name = name;
        this.legCount = legCount;
        this.speaks = speaks;
    }
    speak(){
        console.log("hi animel speak:", this.speaks);
    }

    // Static method: It is used to call the class itself 
    static myType(){
        console.log("Animle");
    }
}

console.log(animle.myType()); // call the function mytype by using class name
let dog = new animle("dog", 4, "bhow bhow");  // Creating object
let cat = new animle("cat", 4, "meow");

cat.speak(); // It return this -> hi animel speak: meow (Call function on object)

console.log(cat) // Its return this result -> animle { name: 'cat', legCount: 4, speaks: 'meow' }
*/

///////////////////////////////////////////////////////  Date & Time //////////////////////////////////////////////////////

//Example of getting date and time
/*
const currentDate = new Date();

console.log(currentDate.getDate());
console.log(currentDate.getFullYear());
*/

// "Creating a function to measure the program execution time."
/*
function calculation (){
    let a = 0;
    for(let i = 0; i < 100000000; i++){
        a = a + i;
    }
    return a;
}

const beforeDate = new Date();
const beforeTimeInMs = beforeDate.getTime();

calculation();

const afterDate = new Date();
const afterTimeInMs = afterDate.getTime();

console.log(afterTimeInMs - beforeTimeInMs);
*/

//////////////////////////////////////////////////////Async Function//////////////////////////////////////////////////

// Example of Async function
/* 
const fs = require('fs');

fs.readFile('testing.txt', 'utf-8', (err, data) => console.log(data));

console.log('Testing the system');

let a = 0;
for(let i = 0; i<=10000; i++){
    a++;
}

console.log('testing is underway');
*/

// Example of own Asynchronous function
/*
const fs = require('fs');

function readText(cb){
    fs.readFile('testing.txt', 'utf-8', (err, data) => cb(data));
}

function oneDone(data){
    console.log(data);
}

readText(oneDone);
*/

//Example of Promise
const fs = require('fs');

function readText(){
    return new Promise((resolve) => fs.readFile('testing.txt', 'utf-8', (err, data) => resolve(data)))
}

function oneDone(data){
    console.log(data);
}

readText().then(oneDone);
