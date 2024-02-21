function myEach(array, action) {
   for (let i = 0; i < array.length; i++) {
      action(array[i]);
   }
}
myEach([1, 2, 3], console.log);
myEach([2, 5, 4, 4], console.log);
