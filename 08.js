function myEach(array, action) {
    for (let i = 0; i < array.length; i++) {
       action(array[i]);
    }
 }
 
 function myFilter(array, predicate) {
    let result = [];
    myEach(array, function(element) {
       if (predicate(element)) {
          result.push(element);
       }
    });
    return result;
 }
 
 function notTwo(element) {
    return element !== 2;
 }

 let filtered = myFilter([1,2,3,4,2,4,6,22,464,3,2,21], notTwo);
 console.log(filtered)
