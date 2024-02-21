// Write a function that converts an object into an array of arrays. Each nested array should contain the key on index 0 and the value on index 1.

function objectToArray(obj) {
    return Object.entries(obj);
}


console.log(objectToArray({likes: 2, dislikes: 3, followers: 10})) 
// [["likes", 2], ["dislikes", 3], ["followers", 10]]