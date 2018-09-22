arr = [33, 56, 6, 23, 90, 45, 34, 32, 67, 87];

arr.sort(function(a, b){
    return a - b;
});
console.log(arr + "\n\n");

people = [
    {name: 'abid', age: 23},
    {name: 'habib', age: 22},
    {name: 'sadik', age: 34},
    {name: 'riyad', age: 30},
    {name: 'sultan', age: 21}
]

// sort according to age
people_sort_by_age = people;
people_sort_by_age.sort(function(a, b){
    return a.age - b.age;
});
console.log(people_sort_by_age);

// sort according to name
console.log("\n\n");
people_sort_by_name = people;
people_sort_by_name.sort(function(a, b){
    if(a.name > b.name){
        return 1;
    }
    else if(a.name < b.name){
        return -1;
    }
    else{
        return 0;
    }
});
console.log(people_sort_by_name);
