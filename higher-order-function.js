var arr = [5, 4, 1, 9, 0];

arr.forEach(function(a){
    console.log(a);
});

function square(n){
    return function(p){
        var res = 1;
        for(var i = 0; i < p; i++){
            res *= n;
        }
        return res;
    }
}

var value = square(5)(2);
console.log("Square result is: " + value);
