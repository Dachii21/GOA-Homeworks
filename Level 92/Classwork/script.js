let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

let concatArray = array1.concat(array2);

concatArray.copyWithin(concatArray.length, 0, 2);

concatArray.fill(0, concatArray.length - 3);

let lastElement = concatArray.pop();

let firstElement = concatArray.shift();

concatArray.unshift(10, 20);

console.log(concatArray);
console.log(lastElement);
console.log(firstElement);