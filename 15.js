// Create a function that takes in a year and returns the correct century.

function century(year) {
    let century = Math.ceil(year/100);
    
    let suffix = '';

    if (century % 10 === 1 && century % 100 !== 11) {
        suffix = 'st';
    } else if (century % 10 === 2 && century % 100 !== 12) {
        suffix = 'nd';
    } else if (century % 10 === 3 && century % 100 !== 13) {
        suffix = 'rd';
    } else {
        suffix = 'th';
    };
    return `${century}${suffix} century`;
}

console.log(century(11)) // "10th century"
console.log(century(1001)) // "11th century"
console.log(century(2005)) // "21st century"
console.log(century(2105)) 