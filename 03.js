// Create a calculator that allows a user to send 2 numbers, the type of operation and return the result.

function calculator(a, b, todo) {
    switch (todo) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            if (b === 0) {
                return 'Cannot divide by 0';
            } else {
                return a / b;
            }
        default:
            return 'Pls try again';
    }
}



// Example:

console.log(calculator(2, 10, "+")) // 12
console.log(calculator(20, 3, "*")) // 60
console.log(calculator(10, 0, "/")) // Cannot divide by 0