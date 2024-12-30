const mergeObjects = (...objects) => Object.assign({}, ...objects);

const obj1 = {a: 1, b: 3};
const obj2 = {b: 2, c: 4};
const merge = mergeObjects(obj1, obj2);
console.log(merge); // {a: 1, b:2, c:4}