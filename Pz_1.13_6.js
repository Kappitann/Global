let characters = [
    {name: "Barney", age: 36},
    {name: "Fred", age: 40}
];

function pluck(array) {
    for (let key in array) {
        console.log(array[key].name)
    }
}

console.log(pluck(characters)); //['Barney', 'Fred'];
