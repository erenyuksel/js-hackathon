//TODO Write a function that logs the argument (string) minus two letters until only the first letter is left. Use recursion.


function checkEcho(str) {
    console.log(str);

    if (str.length > 2) {
        checkEcho(str.slice(0, -2));
    } else if (str.length == 2) {
        checkEcho(str.slice(0, -1));
    }
}

const yodel = "Yodelayheeeeehooooo"

checkEcho(yodel) // "Yodelayheeeeehooooo", "Yodelayheeeeehooo", "Yodelayheeeeeho", "Yodelayheeeee" ... until "Y"