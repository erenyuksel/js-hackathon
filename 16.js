//TODO “Loves me, loves me not” is a traditional game in which a person plucks off all the petals of a flower one by one, saying the phrase “Loves me” and “Loves me not” when determining whether the one that they love, loves them back. Given a number of petals, return a string which repeats the phrases “Loves me” and “Loves me not” for every alternating petal, and return the last phrase in all caps. Remember to put a comma and space between phrases.

function lovesMe(num) {
    let newArr = [];
    for (let i = 1; i <= num; i++) {
        if (i === num) { 
            newArr.push(i % 2 ? 'Loves me'.toUpperCase() : 'Loves me not'.toUpperCase());
        } else { 
            newArr.push(i % 2 ? 'Loves me' : 'Loves me not');
        }
    }
    return newArr.join(', ');
}

console.log(lovesMe(3)) // "Loves me, Loves me not, LOVES ME"
console.log(lovesMe(6)) // "Loves me, Loves me not, Loves me, Loves me not, Loves me, LOVES ME NOT"
console.log(lovesMe(1)) // "LOVES ME"