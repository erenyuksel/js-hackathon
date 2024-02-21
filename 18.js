// One of the fun parts of JavaScript is that you can extend all the standard types by extending their prototype. In this challenge, you need to give JavaScript Strings a swapCase() function, which will return a new string with all upper case characters swapped for lower case characters, and vice versa. Any non-alphabetic characters should be kept as they are.


String.prototype.swapCase = function () {
    return this.split('').map(e => String(e).toLowerCase() === e ? e.toUpperCase() : e.toLowerCase()).join('');
}

console.log("Hello1".swapCase()) // "hELLO"
console.log("Test".swapCase()) // "hELLO"
console.log("aBcD".swapCase().swapCase()) // "aBcD"

