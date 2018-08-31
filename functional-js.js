/*
*
*   Functional Programming - 01
*
*/

function sayName(name){
    return "Hello, " + name;
}

var printName = sayName;
var print = sayName("abid");

console.log(printName);
console.log(print);

// function into an array
var arr = [1, 2, 3];
arr.push(printName);
console.log(arr);

// function into an object
var person = {
    name: "abid",
    displayName: printName,
}
console.log(person);

// self invoking Function
var sum = 10 + (function(){return 20})();
console.log(sum);

console.log("\nWe can return function from another function:");
function base(b){
    return function(n){
        var result = 1;
        for(var i = 0; i < b; i++){
            result = result * n;
        }
        return result;
    }
}
// var power = base(3);
// var res = power(2);
var res = base(2)(5);
console.log(res);
