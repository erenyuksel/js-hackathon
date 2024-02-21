function myEach(arr) {
    for (let i = 0; i < arr.length; i++) {
       return arr.map(n => n * n);
    }
  }

  console.log(myEach([1,2,3]))
  console.log(myEach([2,5,4,4]))
  