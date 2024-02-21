//TODO invert takes an object as a parameter. It returns a new object with the values of the passed object as properties and the keys as values of those properties.

function invert(obj) {
    return Object.entries(obj).reduce((acc, [key, value]) => {
        acc[value] = key;
        return acc;
    }, {});
}

console.log(invert({ a: 3, b: 2 })) // { 2: 'b', 3: 'a' }
console.log(invert({ a: 3, b: 2, i: 23, o: 3 }))
