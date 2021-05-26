const eqArrays = function(x, y) {
  let finalAsnwer = '';
  if (x.length === y.length) {
    for (let i = 0; i < x.length; i++) {
      if (x[i] === y[i]) {
        finalAsnwer = true;
      } else {
        finalAsnwer = false;
      }
    }
  } else {
    finalAsnwer = false;
  }
  return finalAsnwer;
};


const assertEqualArray = function(actual, expected) {
  if (actual === expected) {
    return(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    return(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

console.log(assertEqualArray(eqArrays([1, 2, 3], [1, 2, 3]), true));
console.log(assertEqualArray(eqArrays([1, 2, 3], [3, 2, 1]), false));