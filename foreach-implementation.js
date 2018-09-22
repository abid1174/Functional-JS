var arr = [3, 5, 7, 1, 9, 4];

// arr.forEach(function(element){
//     console.log(element);
// });

function loop(arr, callback){
    for(var i=0; i<arr.lenght; i++){
        callback(arr[i]);
    }
}

loop(arr, function(element){
    console.log(element);
});
