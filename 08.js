function myEach(array, action) {
    for (let i = 0; i < array.length; i++) {
        action(array[i]);
    }
}

myEach([1, 2, 3], console.log);



