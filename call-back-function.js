var names = ['abid', 'raju', 'sultan', 'riyad'];

// names.forEach(function(name){
//     console.log(name);
// })

// names.forEach(print);
//
// function print(name){
//     console.log(name);
// }


function operation(a, b, callback){
    var c = a+b;
    var d = a-b;

    callback(c, d);
}

function print(x, y){
    console.log(x, y);
}
function multiply(x, y){
    console.log(x * y);
}

operation(10, 5, print);
operation(10, 5, multiply);
