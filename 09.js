function merge(obj1, obj2) {
    let objAll =  {...obj2, ...obj1};
    return (objAll)
}

console.log(merge({ a: 3, b: 2 }, { a: 2, c: 4 })) 
console.log(merge({ a: 5, b: 2 }, { a: 6, c: 4 }))