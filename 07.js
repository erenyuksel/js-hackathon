function myEach(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
      callback(arr[i], i, arr);
    }
  }

  function myMap(arr, callback) {
    const mappedArray = [];
    myEach(arr, (element, index, array) => {
      mappedArray.push(callback(element, index, array));
    });
    return mappedArray;
  }

  const numbers = [1, 2, 3, 4, 5];
  const doubledNumbers = myMap(numbers, (num) => num * 2);

  console.log(doubledNumbers);