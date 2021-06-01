module.exports = map

const words = ["ground", "control", "to", "major", "tom"];
const numbers = [1, 2, 3, 4, 5,];

const map = (array, funkyCallback) => {
  const results = []; 
  for (let index of array) {
    results.push(funkyCallback(index));
  }
  
  return results;
};

const eqArrays = function(x, y) {
  if (x.length !== y.length) {
    return false
  }
  for (let i = 0; i < x.length; i++) {
    if (x[i] !== y[i]) {
      return false
    } 
  }
  return true;
};


const assertEqualArray = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`Assertion Failed: ${array1} !== ${array2}`);
  }
};



assertEqualArray(map(words, word => word[0]), [ 'g', 'c', 't', 'm', 't' ])
assertEqualArray(map(numbers, number => number * 2), [ 2, 4, 6, 8, 10 ])
