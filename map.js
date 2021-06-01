const assertEqualArray = require('./assertEqualArray');

const map = (array, funkyCallback) => {
  const results = [];
  for (let index of array) {
    results.push(funkyCallback(index));
  }
  
  return results;
};

module.exports = map;

const words = ["ground", "control", "to", "major", "tom"];
const numbers = [1, 2, 3, 4, 5,];
assertEqualArray(map(words, word => word[0]), [ 'g', 'c', 't', 'm', 't' ]);
assertEqualArray(map(numbers, number => number * 2), [ 2, 4, 6, 8, 10 ]);
