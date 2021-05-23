const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

const numbers = [1, 2, 3, 4];

assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4]);
assert.notDeepStrictEqual(myRemove(numbers, 3), numbers);

const arr = [23, 9, 43, 27];

myRemove(arr, 23);
assert.deepStrictEqual(arr, [23, 9, 43, 27]);
assert.deepStrictEqual(myRemove(numbers, 5), [1, 2, 3, 4]);