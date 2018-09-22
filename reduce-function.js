var arr = [3, 5, 7, 1, 9, 4];

// var sum = 0;
// for(var i=0; i<arr.length; i++){
//     sum = sum + arr[i];
// }
// console.log("Sum = "+ sum); //sum = 29

var sum = arr.reduce(function(a, b){
    return a+b;
});
console.log(sum); // sum = 29
