var arr = [3, 5, 7, 1, 9, 4];
// add number 2 to every elements

// var updated_arry = [];
// for(var i=0; i<arr.length; i++){
//     updated_arry.push(arr[i] + 2);
// }
// console.log(updated_arry);


// updated_arry = arr.map(function(value){
//     return value + 2;
// });
// console.log(updated_arry);


function my_map(arr, callback){
    new_arr = [];
    for(var i=0; i<arr.length; i++){
        new_arr.push(callback(arr[i]));
    }
    return new_arr;
}

square = my_map(arr, function(value){
    return value * value;
});
console.log(square);
