// function outter(){
//     function inner() {
//         console.log("I am inner function.");
//     }
//     console.log("I am outter function.");
//     return inner();
// }
// outter();

function final_add(a, b){

    function add(){
        return a+b;
    }
    function sub(){
        return a-b;
    }
    function mul(){
        return a*b;
    }
    function div(){
        return a/b;
    }

    return add()+sub()+mul()+div();
}
var res = final_add(10, 5);
console.log(res);
