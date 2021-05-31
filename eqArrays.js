const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};


const eqArrays = function(x, y) {
  if (x.length !== y.length) {
    return false
  }
    for (let i = 0; i < x.length; i++) {
      if (x[i] !== y[i]) {
        return false;
    }
  }
  return true;
};


// create a function called eqArrays
//loop through each array and compair each index 

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)// => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false