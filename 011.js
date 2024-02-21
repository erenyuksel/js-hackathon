function minMaxLengthAverage(arr) {
    let max = arr[0];
    let min = arr[0];
    let sum = arr[0]; 
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
        sum = sum + arr[i];
    }
    return [min, max, arr.length, sum/arr.length,]; 
}

console.log(minMaxLengthAverage([7, 13, 3, 77, 100]));