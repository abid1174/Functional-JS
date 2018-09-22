var arr = [3, 5, 7, 1, 9, 4];

// var odd_arr = arr.filter(function(value){
//     return value % 2 == 1;
// });
//
// console.log(odd_arr);


function myFilter(arr, callback){
    var new_arr = [];

    for(var i=0; i<arr.length; i++){
        if(callback(arr[i])){
            new_arr.push(arr[i]);
        }
    }
    return new_arr;
}

odd_array = myFilter(arr, function(value){
    return value % 2 == 1;
});
console.log(odd_array);
