// Create a function that takes two numbers as arguments (num, length). num is the number to be multiplied. length is the amount of times the number needs to be multiplied. Each multiplication should be saved in a results array and be returned.

function arrayOfMultiples(num, length) {
    let newArr = [];
    for (let i = 1; i <= length; i++) {
        newArr.push(num * i);
    }
    return newArr;
}



console.log(arrayOfMultiples(7, 5))  //  [7, 14, 21, 28, 35]