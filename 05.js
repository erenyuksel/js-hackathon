//TODO  5. Rectangle Intersection
// Write a function that expects two rectangles and returns the intersected rectangle (if any).
// Each rectangle is represented by two points in a two dimensional space.
// For example: [1, 1] and [4, 3]. Is the rectangle with point the corners at [1, 1], [4, 1], [1, 3] and [4, 3].

function intersect(rect1, rect2) {

    let left = Math.max(rect1[0][0], rect2[0][0]);
    let right = Math.min(rect1[1][0], rect2[1][0]);
    let top = Math.min(rect1[1][1], rect2[1][1]);
    let bottom = Math.max(rect1[0][1], rect2[0][1]);

    if (left < right && bottom < top) {
        return [[left, bottom], [right, top]];
    } else {
        return null;
    }
}

console.log(intersect([[1, 1], [4, 3]], [[2, 2], [6, 7]])) // => [[2, 2], [4, 3]]
console.log(intersect([[2, 1], [4, 4]], [[1, 1], [8, 8]])) // => [[2, 1], [4, 4]]
console.log(intersect([[2, 1], [4, 4]], [[1, 1], [1, 8]])) 
console.log(intersect([[2, 1], [4, 4]], [[1, 1], [5, 4]])) 