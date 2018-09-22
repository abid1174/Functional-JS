// Learn callback function by example

// ************* Example 01 *****************
console.log("Example 01:");
function greetings(name, design){
    design(name);
}

greetings('abid', function(name){
    console.log("Hello " + name);
});
greetings('abid', function(name){
    console.log("Hi, " + name + ".Welcome to our world!");
});

// ************* Example 02 *****************
console.log("\nExample 02:");
var person = {
    name  : "Abid Al Amin",
    age   : 23,
    email : "abidalamin7@gmail.com"
}

function personinfo(person_obj, callback){
    console.log("Person: " + person.name + "(" + person.age + ")");
    if( person.age >= 18 ){
        callback(person.email);
    }
}
personinfo(person, function(email){
    console.log("Email sent to " + email);
})

// ************* Example 03 *****************
console.log("\nExample 03: ");
function print(data, callback1, callback2){
    console.log("Primary Data: " + data);
    callback1(data);
    callback2(data);
}
print("Abid", function(name){
    console.log("Modified By First Function: " + name.toUpperCase());
}, function(name){
    console.log("Modified By Second Function: "+ name.toLowerCase());
})
